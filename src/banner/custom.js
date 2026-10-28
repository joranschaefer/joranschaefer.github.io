import './style.scss'
import birdUrl from './bird-sprite.png'

const WORDS = ['HTML', 'Interactive', 'Lightweight', 'Playable']
const WORD_MS = 1500
const MAX_LOOPS = 3
const BEST_KEY = 'flappy-js-best'
const INK = '#17292b'

// The sprite's head sits right of centre (the wing sticks out left), so that's where the hitbox goes
const sprite = new Image()
sprite.src = birdUrl
const HEAD_X = 0.61
const HEAD_Y = 0.51

const clickTag = new URLSearchParams(location.search).get('clickTag') || 'https://joranschaefer.github.io/#contact'
const framed = window.parent !== window

const banner = document.querySelector('.banner')
const canvas = banner.querySelector('.banner__game')
const ctx = canvas.getContext('2d')
const frames = [...banner.querySelectorAll('[data-frame]')]
const word = banner.querySelector('[data-word]')
const scoreEl = banner.querySelector('[data-score]')
const resultEl = banner.querySelector('[data-result]')
const msgEl = banner.querySelector('[data-msg]')
const again = banner.querySelector('[data-again]')
const cta = banner.querySelector('[data-clicktag]')

// Tell the page around the banner what's going on (the previewer prints it in its log)
const say = (msg) => framed && parent.postMessage({ banner: msg }, '*')

const readBest = () => {
  try { return Number(localStorage.getItem(BEST_KEY)) || 0 } catch { return 0 }
}
const saveBest = (n) => {
  try { localStorage.setItem(BEST_KEY, n) } catch {}
}

let W, H, floor, r, gap, pipeW, spacing, speed, gravity, flapV
let state = 'intro'
let bird, pipes, score
let best = readBest()
let groundX = 0
let loop = 0
let last = 0
let raf = 0
let timers = []

const later = (fn, ms) => timers.push(setTimeout(fn, ms))
const stopTimers = () => {
  timers.forEach(clearTimeout)
  timers = []
}

const fit = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  W = canvas.clientWidth
  H = canvas.clientHeight
  canvas.width = Math.round(W * dpr)
  canvas.height = Math.round(H * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  floor = H - Math.max(8, H * 0.06)
  r = Math.max(7, Math.min(W, H) * 0.045)
  gap = Math.max(r * 7.5, floor * 0.26)
  pipeW = Math.max(r * 3, W * 0.14)
  spacing = Math.max(pipeW * 3.2, W * 0.58)
  speed = W * 0.42
  gravity = H * 2.6
  flapV = -H * 0.78
}

const resetWorld = () => {
  bird = { x: W * 0.28, y: floor * 0.45, vy: 0, wing: 1 }
  pipes = []
  score = 0
}

const show = (name) => {
  frames.forEach((f) => f.classList.toggle('is-on', f.dataset.frame === name))
}

const spawn = (x) => {
  const prev = pipes.length ? pipes[pipes.length - 1].y : floor / 2
  const edge = gap / 2 + floor * 0.08
  const swing = (Math.random() * 2 - 1) * floor * 0.3
  pipes.push({ x, y: Math.min(floor - edge, Math.max(edge, prev + swing)), passed: false })
}

const hitsRect = (x, y, w, h) => {
  const dx = bird.x - Math.max(x, Math.min(bird.x, x + w))
  const dy = bird.y - Math.max(y, Math.min(bird.y, y + h))
  return dx * dx + dy * dy < (r * 0.8) ** 2
}

const hits = (p) => hitsRect(p.x, -H, pipeW, p.y - gap / 2 + H) || hitsRect(p.x, p.y + gap / 2, pipeW, H)

const flap = () => {
  bird.vy = flapV
  bird.wing = 0
}

const step = (dt) => {
  bird.vy += gravity * dt
  bird.y += bird.vy * dt
  bird.wing += dt
  if (bird.y < r) {
    bird.y = r
    bird.vy = 0
  }

  if (state === 'over') {
    bird.y = Math.min(bird.y, floor - r)
    return
  }

  groundX = (groundX + speed * dt) % 24
  pipes.forEach((p) => (p.x -= speed * dt))
  pipes = pipes.filter((p) => p.x + pipeW > -pipeW)
  const lastPipe = pipes[pipes.length - 1]
  if (!lastPipe) spawn(W + W * 0.35)
  else if (lastPipe.x + spacing < W + pipeW) spawn(lastPipe.x + spacing)

  // Intro: the autopilot aims just below the middle of the next gap and never crashes
  if (state === 'intro') {
    const next = pipes.find((p) => p.x + pipeW > bird.x - r)
    const target = next && next.x < W ? next.y + gap * 0.15 : floor * 0.5
    if (bird.y > target && bird.vy > 0) flap()
    if (bird.y + r > floor) bird.y = floor - r
    return
  }

  pipes.forEach((p) => {
    if (p.passed || p.x + pipeW > bird.x) return
    p.passed = true
    score++
    scoreEl.textContent = score
    say(`score ${score}`)
  })

  if (bird.y + r >= floor || pipes.some(hits)) crash()
}

const drawPipe = (p) => {
  const top = p.y - gap / 2
  const bottom = p.y + gap / 2
  const capH = Math.max(8, r * 1.1)
  const out = Math.max(3, pipeW * 0.08)

  ctx.fillStyle = INK
  ctx.fillRect(p.x, 0, pipeW, top - capH)
  ctx.fillRect(p.x, bottom + capH, pipeW, floor - bottom - capH)
  ctx.beginPath()
  ctx.roundRect(p.x - out, top - capH, pipeW + out * 2, capH, 3)
  ctx.roundRect(p.x - out, bottom, pipeW + out * 2, capH, 3)
  ctx.fill()

  ctx.fillStyle = 'rgba(242, 239, 232, .14)'
  ctx.fillRect(p.x + pipeW * 0.18, 0, pipeW * 0.12, top - capH)
  ctx.fillRect(p.x + pipeW * 0.18, bottom + capH, pipeW * 0.12, floor - bottom - capH)
}

const drawGround = () => {
  const h = H - floor
  ctx.fillStyle = INK
  ctx.fillRect(0, floor, W, h)
  ctx.fillStyle = 'rgba(242, 239, 232, .35)'
  for (let x = -groundX; x < W; x += 24) ctx.fillRect(x, floor + h * 0.4, 12, Math.max(2, h * 0.2))
}

const drawBird = () => {
  if (!sprite.complete || !sprite.naturalWidth) return
  const tilt = Math.max(-0.5, Math.min(1.2, bird.vy / (gravity * 0.6)))
  const w = r * 3.2
  const h = w * (sprite.naturalHeight / sprite.naturalWidth)
  // A quick squash right after a flap stands in for the wing beat
  const squash = bird.wing < 0.12 ? 0.9 : 1

  ctx.save()
  ctx.translate(bird.x, bird.y)
  ctx.rotate(tilt)
  ctx.scale(1, squash)
  ctx.drawImage(sprite, -w * HEAD_X, -h * HEAD_Y, w, h)
  ctx.restore()
}

const draw = () => {
  ctx.clearRect(0, 0, W, H)
  pipes.forEach(drawPipe)
  drawGround()
  drawBird()
}

const tick = (now) => {
  step(Math.min((now - last) / 1000, 1 / 30))
  last = now
  draw()
  const landed = state === 'over' && bird.y + r >= floor
  raf = state === 'idle' || landed ? 0 : requestAnimationFrame(tick)
}

const run = () => {
  if (raf) return
  last = performance.now()
  raf = requestAnimationFrame(tick)
}

const verdict = (n) => {
  if (n === 0) return 'Task failed successfully.'
  if (n < 5) return 'Niet slecht. Maar ook niet goed.'
  if (n < 15) return 'Netjes, netjes!'
  if (n < 30) return 'Wauw, jij bent echt een nerd.'
  return 'Oké, jij wint. Laten we iets bouwen.'
}

const showEnd = (played, isBest) => {
  resultEl.hidden = !played
  resultEl.textContent = `Score ${score} · Best ${best}${isBest ? ' ★' : ''}`
  msgEl.textContent = played ? verdict(score) : 'Kan jij beter dan de autopilot?'
  again.textContent = played ? '↻ Nog eens' : '▸ PLAY'
  show('end')
}

const crash = () => {
  state = 'over'
  bird.vy = Math.max(bird.vy, 0)
  banner.classList.remove('is-hit')
  void banner.offsetWidth
  banner.classList.add('is-hit')
  const isBest = score > best
  best = Math.max(best, score)
  saveBest(best)
  say(`wasted · score ${score} · best ${best}`)
  later(() => showEnd(true, isBest), 700)
}

const start = () => {
  stopTimers()
  banner.classList.remove('is-still', 'is-hit')
  resetWorld()
  state = 'play'
  scoreEl.textContent = 0
  show('play')
  flap()
  say('game on: flap!')
  run()
}

const swap = (text) => {
  word.classList.remove('is-in')
  void word.offsetWidth
  word.textContent = text
  word.classList.add('is-in')
}

// The ad part: personal frames over a self-playing game, max 3 loops, then hold still
const introLoop = () => {
  loop++
  say(`intro loop ${loop}/${MAX_LOOPS}`)
  WORDS.forEach((text, i) => later(() => swap(text), i * WORD_MS))
  later(loop < MAX_LOOPS ? introLoop : idle, WORDS.length * WORD_MS)
}

const idle = () => {
  state = 'idle'
  banner.classList.add('is-still')
  showEnd(false, false)
  say(`stopped after ${MAX_LOOPS} loops, IAB approved`)
}

const intro = () => {
  stopTimers()
  banner.classList.remove('is-still', 'is-hit')
  fit()
  resetWorld()
  state = 'intro'
  loop = 0
  show('intro')
  run()
  introLoop()
}

const tap = () => {
  if (state === 'intro' || state === 'idle') start()
  else if (state === 'play') flap()
}

canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault()
  tap()
})

window.addEventListener('keydown', (e) => {
  if (e.code !== 'Space' && e.code !== 'ArrowUp') return
  if (e.target.closest('a, button')) return
  e.preventDefault()
  if (state === 'over') start()
  else tap()
})

again.addEventListener('click', start)

// Every banner needs a clickTag. Inside the previewer, the page handles it
cta.href = clickTag
cta.addEventListener('click', (e) => {
  e.preventDefault()
  if (framed) parent.postMessage({ clickTag }, '*')
  else window.open(clickTag, '_blank')
})

window.addEventListener('message', (e) => {
  if (e.data?.cmd === 'replay') intro()
})

// New format: refit straight away, restart once the resize settles
let resizing
window.addEventListener('resize', () => {
  fit()
  draw()
  clearTimeout(resizing)
  resizing = setTimeout(intro, 200)
})

intro()
