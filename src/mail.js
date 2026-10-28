import './mail.scss'
import { highlight } from './highlight.js'
import mailHtml from './mail/mail.html?raw'
import clientsCss from './mail-clients.scss?inline'

// Outlook reads the styles inside the mail's <!--[if mso]> block, so the Outlook preview does too
const msoCss = () => {
  const block = mailHtml.slice(mailHtml.indexOf('<!--[if mso]>'))
  return block.slice(block.indexOf('<style>') + 7, block.indexOf('</style>'))
}

// Annotations for the Outlook preview: [cell, note, modifier]
const PINS = [
  ['.email__logo', 'Web font → Arial fallback', 'logo'],
  // ['.email__hero', 'Gradient → solid bgcolor'],
  ['.email__card', 'border-radius → square', 'card'],
  ['.email__cta', 'Still round: <v:roundrect>', 'good'],
]

// The source view shows the whole mail as it would be sent. Its main <style> block gets CSS colours
const sourceHtml = () => {
  const open = mailHtml.indexOf('<style>') + 7
  const close = mailHtml.indexOf('</style>', open)
  return highlight(mailHtml.slice(0, open), 'html') + highlight(mailHtml.slice(open, close), 'css') + highlight(mailHtml.slice(close), 'html')
}

const LINES = mailHtml.split('\n')
const VML_LINE = LINES.findIndex((l) => l.includes('<v:roundrect')) + 1

// The name in the fake client's title bar
const APPS = {
  gmail: 'Gmail',
  outlook: 'Outlook 2016',
  dark: 'Apple Mail · Dark mode',
}

const root = document.querySelector('[data-mail]')

if (root) {
  const app = root.querySelector('[data-app]')
  const canvas = root.querySelector('.mail__canvas')
  const frame = root.querySelector('.mail__frame')
  const source = root.querySelector('.mail__source')
  const sourceBtn = root.querySelector('[data-source]')

  root.querySelector('[data-mail-code]').innerHTML = sourceHtml()
  root.querySelector('.mail__gutter').textContent = LINES.map((_, i) => i + 1).join('\n')

  const press = (attr, value) => {
    root.querySelectorAll(`[data-${attr}]`).forEach((b) => {
      if (b.tagName === 'BUTTON') b.setAttribute('aria-pressed', b.dataset[attr] === value)
    })
  }

  let mso
  let darkRules = []

  // The mail itself is a plain HTML mail. This fakes the client around it, inside its iframe
  const prepare = () => {
    const doc = frame.contentDocument
    const style = doc.createElement('style')
    style.textContent = clientsCss
    mso = doc.createElement('style')
    mso.textContent = msoCss()
    doc.head.append(style, mso)

    // The mail's @media (prefers-color-scheme: dark) block. The web font sheet is cross-origin, so skip it
    darkRules = [...doc.styleSheets].flatMap((sheet) => {
      try { return [...sheet.cssRules] } catch { return [] }
    }).filter((rule) => rule.media?.mediaText.includes('prefers-color-scheme'))

    PINS.forEach(([cell, note, mod]) => {
      const pin = doc.createElement('em')
      pin.className = mod ? `mail-pin mail-pin--${mod}` : 'mail-pin'
      pin.textContent = note
      doc.querySelector(cell).append(pin)
    })

    // Links go to the page around the demo, not into the iframe
    doc.addEventListener('click', (e) => {
      const link = e.target.closest('a')
      if (!link) return
      e.preventDefault()
      if (link.href.startsWith('mailto:')) window.location.href = link.href
      else if (link.hash === '#contact') document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
      else window.open(link.href, '_blank', 'noopener')
    })

    render()
  }

  // Dark mode: the mail's own dark styles kick in, through its prefers-color-scheme block and
  // Outlook.com's data-ogsc attribute. The block follows the preview, not the visitor's OS
  const render = () => {
    const doc = frame.contentDocument
    if (!mso || !doc?.body) return
    const client = root.dataset.client
    const dark = client === 'dark'
    doc.documentElement.dataset.client = client
    doc.documentElement.toggleAttribute('data-ogsc', dark)
    darkRules.forEach((rule) => (rule.media.mediaText = dark ? 'all' : 'not all'))
    frame.style.colorScheme = dark ? 'dark' : 'light'
    mso.media = client === 'outlook' ? 'all' : 'not all'
  }

  frame.addEventListener('load', prepare)
  if (frame.contentDocument?.readyState === 'complete' && frame.contentDocument.querySelector('.email')) prepare()

  const setClient = (client) => {
    root.dataset.client = client
    press('client', client)
    app.textContent = APPS[client]
    render()
  }

  root.querySelectorAll('button[data-client]').forEach((b) =>
    b.addEventListener('click', () => setClient(b.dataset.client))
  )

  // Mobile narrows the iframe to 340px, so the mail stacks the way it would on a phone
  root.querySelectorAll('button[data-device]').forEach((b) =>
    b.addEventListener('click', () => {
      root.dataset.device = b.dataset.device
      press('device', b.dataset.device)
    })
  )

  sourceBtn.addEventListener('click', () => {
    const open = source.hidden
    source.hidden = !open
    canvas.hidden = open
    sourceBtn.setAttribute('aria-pressed', open)
    // Open on the button, a few lines of context above it
    if (open) source.scrollTop = source.scrollHeight * ((VML_LINE - 6) / LINES.length)
  })

  setClient('gmail')
}
