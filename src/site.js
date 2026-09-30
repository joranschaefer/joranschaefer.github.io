import { highlight } from './highlight.js'
import mainSrc from './main.js?raw'
import bannerSrc from './banner.js?raw'
import bannerScssSrc from './banner.scss?raw'
import mailSrc from './mail.js?raw'
import styleSrc from './style.scss?raw'
import siteSrc from './site.js?raw'

const DEFAULTS = { accent: '#ff5a1f', radius: 14, marquee: 45, font: 'bebas' }

// Accent swatches, straight from the skill bars on my 2015 CV
const SWATCHES = [
  ['#ff5a1f', 'Signal orange'],
  ['#4a8bc9', 'Photoshop blue'],
  ['#f07f22', 'Illustrator orange'],
  ['#b52f73', 'InDesign pink'],
  ['#e0262a', 'Flash red, RIP'],
  ['#5b6aa8', 'PHP purple'],
]

const FONTS = {
  bebas: { css: "'Bebas Neue', Impact, sans-serif", toast: '' },
  serif: { css: "Georgia, 'Times New Roman', serif", toast: 'Very editorial. Very Outlook, too.' },
  comic: { css: "'Comic Sans MS', 'Comic Neue', cursive", toast: 'You asked for this.' },
}

const tokensSrc = (t) => `/* Live: edited from the remix panel */
:root {
  --accent: ${t.accent};
  --radius: ${t.radius}px;
  --marquee-speed: ${t.marquee}s;
  --display: ${FONTS[t.font].css};
}`

const root = document.querySelector('[data-site]')

if (root) {
  const tokens = { ...DEFAULTS }
  const html = document.documentElement
  const code = root.querySelector('[data-code]')
  const gutter = root.querySelector('.code-gutter')
  const stats = root.querySelector('[data-code-stats]')
  const tabsEl = root.querySelector('.code-tabs')
  const toast = root.querySelector('[data-toast]')

  const files = [
    { name: 'tokens.css', lang: 'css', src: () => tokensSrc(tokens), live: true },
    { name: 'main.js', lang: 'js', src: () => mainSrc },
    { name: 'banner.js', lang: 'js', src: () => bannerSrc },
    { name: 'banner.scss', lang: 'scss', src: () => bannerScssSrc },
    { name: 'mail.js', lang: 'js', src: () => mailSrc },
    { name: 'site.js', lang: 'js', src: () => siteSrc, note: 'this viewer' },
    { name: 'style.scss', lang: 'scss', src: () => styleSrc },
  ]
  let active = files[0]

  const lines = (s) => s.split('\n').length
  const total = files.slice(1).reduce((sum, f) => sum + lines(f.src()), 0)
  root.querySelector('[data-code-total]').textContent = `${total} lines · 0 frameworks`

  const render = (flashLine) => {
    const src = active.src()
    code.innerHTML = highlight(src, active.lang)
    gutter.textContent = Array.from({ length: lines(src) }, (_, i) => i + 1).join('\n')
    stats.textContent = `${active.name} · ${lines(src)} lines · ${(new Blob([src]).size / 1024).toFixed(1)} kB`
    if (flashLine) {
      code.parentElement.classList.remove('is-flash')
      void code.offsetWidth
      code.parentElement.classList.add('is-flash')
    }
  }

  const tabs = files.map((file) => {
    const tab = document.createElement('button')
    tab.type = 'button'
    tab.setAttribute('role', 'tab')
    tab.innerHTML = file.live ? `<i class="live"></i>${file.name}` : file.name
    if (file.note) tab.title = file.note
    tab.addEventListener('click', () => select(file))
    tabsEl.append(tab)
    return tab
  })

  const select = (file) => {
    active = file
    tabs.forEach((t, i) => t.setAttribute('aria-selected', files[i] === file))
    render()
    root.querySelector('.code-body').scrollTop = 0
  }

  const say = (msg) => {
    toast.textContent = msg
    toast.classList.toggle('is-on', Boolean(msg))
  }

  const apply = (key) => {
    html.style.setProperty('--accent', tokens.accent)
    html.style.setProperty('--radius', `${tokens.radius}px`)
    html.style.setProperty('--marquee-speed', `${tokens.marquee}s`)
    html.style.setProperty('--display', FONTS[tokens.font].css)
    root.querySelector('[data-out="radius"]').textContent = `${tokens.radius}px`
    root.querySelector('[data-out="marquee"]').textContent = `${tokens.marquee}s`
    swatches.forEach((s) => s.setAttribute('aria-pressed', s.dataset.color === tokens.accent))
    root.querySelectorAll('[data-font]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.font === tokens.font))
    if (key && active !== files[0]) select(files[0])
    else render(Boolean(key))
  }

  const swatches = SWATCHES.map(([color, name]) => {
    const s = document.createElement('button')
    s.type = 'button'
    s.className = 'swatch'
    s.dataset.color = color
    s.style.background = color
    s.title = name
    s.setAttribute('aria-label', name)
    s.addEventListener('click', () => {
      tokens.accent = color
      say(name === 'Flash red, RIP' ? 'Flash red. A moment of silence, please.' : `${name} it is.`)
      apply('accent')
    })
    root.querySelector('[data-swatches]').append(s)
    return s
  })

  root.querySelectorAll('input[data-token]').forEach((input) => {
    input.addEventListener('input', () => {
      tokens[input.dataset.token] = Number(input.value)
      if (input.dataset.token === 'marquee') say(tokens.marquee < 12 ? 'Brands at warp speed.' : '')
      if (input.dataset.token === 'radius') say(tokens.radius === 0 ? 'Very Outlook 2016 of you.' : '')
      apply(input.dataset.token)
    })
  })

  root.querySelectorAll('[data-font]').forEach((btn) => {
    btn.addEventListener('click', () => {
      tokens.font = btn.dataset.font
      say(FONTS[tokens.font].toast)
      apply('font')
    })
  })

  root.querySelector('[data-reset]').addEventListener('click', () => {
    Object.assign(tokens, DEFAULTS)
    root.querySelectorAll('input[data-token]').forEach((i) => (i.value = DEFAULTS[i.dataset.token]))
    say('Back to factory settings.')
    apply('reset')
  })

  select(files[0])
  apply()
}
