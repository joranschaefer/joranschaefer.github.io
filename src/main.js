import './style.scss'
import './banner.js'
import './mail.js'
import './site.js'
import clients from './data/clients.json'

// Client marquee: rendered twice so the -50% loop is seamless
const track = document.querySelector('[data-clients]')
const row = clients.map((name) => `<span class="marquee__item">${name}</span><i class="marquee__sep">✦</i>`).join('')
track.innerHTML = row + row

const clocks = document.querySelectorAll('[data-clock]')
const tick = () => {
  const time = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Brussels',
  }).format(new Date())
  clocks.forEach((clock) => (clock.textContent = time))
}
tick()
setInterval(tick, 30_000)

document.querySelector('[data-year]').textContent = new Date().getFullYear()

// Scroll reveals
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      io.unobserve(entry.target)
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

// Lab rows: cursor bubble showing the tech
const bubble = document.createElement('div')
bubble.className = 'lab-cursor'
document.body.append(bubble)

let x = 0, y = 0, bx = 0, by = 0
const follow = () => {
  bx += (x - bx) * 0.18
  by += (y - by) * 0.18
  bubble.style.left = `${bx}px`
  bubble.style.top = `${by}px`
  requestAnimationFrame(follow)
}
follow()

window.addEventListener('pointermove', (e) => {
  x = e.clientX
  y = e.clientY
})

document.querySelectorAll('.lab__row').forEach((row) => {
  row.addEventListener('pointerenter', () => {
    bubble.textContent = row.querySelector('.lab__tech').textContent
    bubble.classList.add('is-on')
  })
  row.addEventListener('pointerleave', () => bubble.classList.remove('is-on'))
})
