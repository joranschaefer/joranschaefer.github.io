import './banner.scss'
import bannerCss from './banner.scss?inline'

const FRAME_MS = 2000
const LOOP_PAUSE_MS = 2600
const MAX_LOOPS = 3 // IAB: stop animating after 3 loops (or 30s)

const root = document.querySelector('[data-banner]')

if (root) {
  const ad = root.querySelector('.ad')
  const viewport = root.querySelector('.ad-viewport')
  const log = root.querySelector('[data-log]')
  const dotsWrap = root.querySelector('.ad-dots')
  const frames = [...ad.querySelectorAll('.ad__f, .ad__end')]
  let timers = []
  let loop = 0
  let size = [300, 600]

  const dots = frames.map((_, i) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.setAttribute('aria-label', `Frame ${i + 1}`)
    dot.addEventListener('click', () => {
      stop()
      show(i)
      log.textContent = `paused on frame ${i + 1}/${frames.length}`
    })
    dotsWrap.append(dot)
    return dot
  })

  const show = (index) => {
    frames.forEach((frame, i) => {
      frame.classList.toggle('is-on', i === index)
      frame.classList.toggle('is-past', i < index)
    })
    dots.forEach((dot, i) => dot.classList.toggle('is-on', i === index))
  }

  const stop = () => {
    timers.forEach(clearTimeout)
    timers = []
  }

  const runLoop = () => {
    loop++
    log.textContent = `loop ${loop}/${MAX_LOOPS}`
    frames.forEach((_, i) => timers.push(setTimeout(() => show(i), i * FRAME_MS)))

    const loopEnd = frames.length * FRAME_MS + LOOP_PAUSE_MS
    if (loop < MAX_LOOPS) {
      timers.push(setTimeout(runLoop, loopEnd))
    } else {
      timers.push(setTimeout(() => (log.textContent = `stopped after ${MAX_LOOPS} loops, IAB approved`), loopEnd - LOOP_PAUSE_MS))
    }
  }

  const play = () => {
    stop()
    loop = 0
    show(-1)
    requestAnimationFrame(runLoop)
  }

  // Scale the banner down to fit a fixed stage, never up, and centre it
  const STAGE_H = 520
  const fit = () => {
    const [w, h] = size
    const avail = viewport.clientWidth
    const scale = Math.min(1, avail / w, STAGE_H / h)
    ad.style.transform = `scale(${scale})`
    ad.style.left = `${(avail - w * scale) / 2}px`
    ad.style.top = `${(STAGE_H - h * scale) / 2}px`
  }

  root.querySelectorAll('[data-size]').forEach((btn) => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('[data-size]').forEach((b) => b.setAttribute('aria-pressed', b === btn))
      size = btn.dataset.size.split('x').map(Number)
      ad.style.width = `${size[0]}px`
      ad.style.height = `${size[1]}px`
      fit()
      play()
    })
  })

  root.querySelector('[data-replay]').addEventListener('click', play)

  // Every banner needs a clickTag
  ad.addEventListener('click', (e) => {
    e.preventDefault()
    log.textContent = 'window.open(clickTag) → #contact'
    setTimeout(() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }), 700)
  })

  // Real weight: this banner's markup + its compiled stylesheet
  const bytes = new Blob([ad.outerHTML, bannerCss]).size
  document.querySelector('[data-weight]').textContent = `${(bytes / 1024).toFixed(1)} kB`

  new ResizeObserver(fit).observe(viewport)
  fit()

  // Only start once somebody can actually see it
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    play()
    io.disconnect()
  }, { threshold: 0.4 })
  io.observe(root)
}
