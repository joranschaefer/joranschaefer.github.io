import './style.scss'
import './boot.js'
import './banner.js'
import './mail.js'
import './site.js'
import './portrait.js'
import clients from './data/clients.json'

// Client marquee
const track = document.querySelector('[data-clients]')
const row = clients.map((name) => `<span class="marquee__item">${name}</span><i class="marquee__sep">✦</i>`).join('')
track.innerHTML = row + row

const marquee = track.closest('.marquee')
const setRate = (rate) => track.getAnimations().forEach((a) => a.updatePlaybackRate(rate))
marquee.addEventListener('pointerenter', () => setRate(0.5))
marquee.addEventListener('pointerleave', () => setRate(1))

// What time is it?
const clocks = document.querySelectorAll('[data-clock]')
const tick = () => {
  const time = new Intl.DateTimeFormat('nl-BE', {
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

// Lab rows: cursor bubble
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

// For the people who open DevTools
console.log('%cNever gonna give you up, never gonna let you down.', 'font: 600 14px monospace; color: #ff5a1f')
console.log('↑ ↑ ↓ ↓ ← → ← → B A')

// Konami code: you know the rules, and so do I
const KONAMI = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']
let streak = 0
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase()
  streak = key === KONAMI[streak] ? streak + 1 : Number(key === KONAMI[0])
  if (streak < KONAMI.length) return
  streak = 0
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank', 'noopener')
})
