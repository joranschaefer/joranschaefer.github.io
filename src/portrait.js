const root = document.querySelector('[data-portrait]')
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches

if (root && !calm) {
  const img = root.querySelector('.about__photo')
  const hud = root.querySelector('[data-hud]')
  const canvas = document.createElement('canvas')
  canvas.className = 'about__canvas'
  canvas.setAttribute('aria-hidden', 'true')
  const ctx = canvas.getContext('2d')
  const tiny = document.createElement('canvas')
  const tinyCtx = tiny.getContext('2d')

  const STEPS = [6, 12, 24, 48, 96]  // Blocks across the width per step
  const STEP_MS = 300
  const TINTS = ['#ff2a55', '#22e6ff']

  let size = 0
  let ghosts = []
  let busy = false
  let visible = false
  let started = false

  const wait = (ms) => new Promise((done) => setTimeout(done, ms))
  const random = (min, max) => min + Math.random() * (max - min)

  const ghost = (color) => {
    const copy = document.createElement('canvas')
    copy.width = copy.height = size
    const copyCtx = copy.getContext('2d')
    copyCtx.drawImage(img, 0, 0, size, size)
    copyCtx.globalCompositeOperation = 'source-in'
    copyCtx.fillStyle = color
    copyCtx.fillRect(0, 0, size, size)
    return copy
  }

  const fit = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    size = Math.round(root.clientWidth * dpr)
    canvas.width = canvas.height = size
    ctx.imageSmoothingEnabled = false
    ghosts = TINTS.map(ghost)
  }

  const sharp = () => {
    ctx.clearRect(0, 0, size, size)
    ctx.drawImage(img, 0, 0, size, size)
  }

  // Shrink to n×n, then blow it back up without smoothing
  const blocky = (n) => {
    tiny.width = tiny.height = n
    tinyCtx.drawImage(img, 0, 0, n, n)
    ctx.clearRect(0, 0, size, size)
    ctx.drawImage(tiny, 0, 0, size, size)
  }

  // Hiding keeps the last line, so it fades out with its text
  const say = (text) => {
    if (text) hud.textContent = text
    hud.classList.toggle('is-on', Boolean(text))
  }

  const load = async () => {
    busy = true
    for (const [i, n] of STEPS.entries()) {
      blocky(n)
      say(`server@localhost:~$ loading ${(100/STEPS.length) * (i + 1)}%`)
      await wait(STEP_MS)
    }
    sharp()
    say('server@localhost:~$ Joran successfully loaded')
    busy = false
    await wait(2400)
    if (!busy) say('')
  }

  const glitchFrame = () => {
    const shift = size * 0.025
    const scale = img.naturalWidth / size
    ctx.clearRect(0, 0, size, size)
    ctx.globalAlpha = 0.75
    ctx.drawImage(ghosts[0], -random(shift * 0.3, shift), 0)
    ctx.drawImage(ghosts[1], random(shift * 0.3, shift), 0)
    ctx.globalAlpha = 1
    ctx.drawImage(img, 0, 0, size, size)

    // Tear a few horizontal slices sideways
    for (let i = 0; i < 5; i++) {
      const y = random(0, size)
      const h = random(size * 0.01, size * 0.06)
      ctx.clearRect(0, y, size, h)
      ctx.drawImage(img, 0, y * scale, img.naturalWidth, h * scale, random(-shift * 2, shift * 2), y, size, h)
    }
  }

  const glitch = async () => {
    if (busy || !started) return
    busy = true
    for (let i = 0; i < 6; i++) {
      glitchFrame()
      await wait(random(40, 90))
    }
    sharp()
    busy = false
  }

  img.after(canvas)
  root.classList.add('is-live')

  const start = async () => {
    started = true
    try {
      await img.decode()
    } catch {
      root.classList.remove('is-live')
      return
    }
    fit()
    load()
  }

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting
      if (visible && !started) start()
    },
    { threshold: 0.4 }
  ).observe(root)

  // Now and then, while you're looking
  const idle = () => {
    if (visible) glitch()
    setTimeout(idle, random(4000, 9000))
  }
  setTimeout(idle, 6000)

  root.addEventListener('pointerenter', glitch)
  root.addEventListener('pointerdown', glitch)

  new ResizeObserver(() => {
    if (!size || busy) return
    fit()
    sharp()
  }).observe(root)
}
