import bannerHtml from './banner/banner.html?raw'
import bannerJs from './banner/custom.js?raw'
import bannerCss from './banner/style.scss?inline'
import birdData from './banner/bird-sprite.png?inline'

const STAGE_H = 520
const root = document.querySelector('[data-banner]')

if (root) {
  const ad = root.querySelector('.ad-viewport__ad')
  const viewport = root.querySelector('.ad-viewport')
  const log = root.querySelector('[data-log]')
  let size = [300, 600]

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
      log.textContent = `served as ${btn.dataset.size}`
      fit()
    })
  })

  root.querySelector('[data-replay]').addEventListener('click', () => {
    ad.contentWindow?.postMessage({ cmd: 'replay' }, location.origin)
  })

  window.addEventListener('message', (e) => {
    if (e.source !== ad.contentWindow) return
    if (e.data.banner) log.textContent = e.data.banner
    if (e.data.clickTag) {
      log.textContent = `window.open(clickTag) → ${e.data.clickTag}`
      setTimeout(() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }), 700)
    }
  })

  new ResizeObserver(fit).observe(viewport)
  fit()

  // Only serve it once somebody can actually see it
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    ad.src = ad.dataset.src
    io.disconnect()
  }, { threshold: 0.4 })
  io.observe(root)
}
