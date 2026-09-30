import './mail.scss'
import { highlight } from './highlight.js'

const SOURCE = `<!-- The button from this mail -->
<table role="presentation" cellpadding="0" cellspacing="0" align="center">
  <tr>
    <td align="center">
      <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
        href="mailto:joran.schaefer@gmail.com"
        style="height:48px;v-text-anchor:middle;width:200px;"
        arcsize="50%" fillcolor="#ff5a1f" stroke="f">
        <center style="color:#ffffff;font-family:Arial,sans-serif;
          font-size:16px;font-weight:bold;">Book a call</center>
      </v:roundrect>
      <![endif]-->
      <!--[if !mso]><!-- -->
      <a href="mailto:joran.schaefer@gmail.com"
        style="background:#ff5a1f;border-radius:99px;color:#ffffff;
        display:inline-block;font-family:'Instrument Sans',Arial,sans-serif;
        font-size:16px;font-weight:600;line-height:48px;width:200px;
        text-align:center;text-decoration:none;">Book a call</a>
      <!--<![endif]-->
    </td>
  </tr>
</table>`

const CLIENTS = {
  gmail: {
    app: 'Gmail',
    log: 'Gmail clips anything over 102 kB, so this mail stays lean.',
  },
  outlook: {
    app: 'Outlook 2016',
    log: 'Outlook renders with Word. Everything falls back gracefully and the button is redrawn in VML.',
  },
  dark: {
    app: 'Apple Mail · Dark',
    log: 'Forced dark mode: colours are picked so an inversion still looks intentional.',
  },
}

const root = document.querySelector('[data-mail]')

if (root) {
  const app = root.querySelector('[data-app]')
  const log = root.querySelector('[data-mail-log]')
  const canvas = root.querySelector('.mail-canvas')
  const source = root.querySelector('.mail-source')
  const sourceBtn = root.querySelector('[data-source]')

  root.querySelector('[data-mail-code]').innerHTML = highlight(SOURCE, 'html')

  const press = (attr, value) => {
    root.querySelectorAll(`[data-${attr}]`).forEach((b) => {
      if (b.tagName === 'BUTTON') b.setAttribute('aria-pressed', b.dataset[attr] === value)
    })
  }

  const setClient = (client) => {
    root.dataset.client = client
    press('client', client)
    app.textContent = CLIENTS[client].app
    log.textContent = CLIENTS[client].log
  }

  root.querySelectorAll('button[data-client]').forEach((b) =>
    b.addEventListener('click', () => setClient(b.dataset.client))
  )

  root.querySelectorAll('button[data-device]').forEach((b) =>
    b.addEventListener('click', () => {
      root.dataset.device = b.dataset.device
      press('device', b.dataset.device)
      log.textContent = b.dataset.device === 'mobile'
        ? 'Mobile: the 2×2 grid stacks into one column, no media query needed.'
        : CLIENTS[root.dataset.client].log
    })
  )

  sourceBtn.addEventListener('click', () => {
    const open = source.hidden
    source.hidden = !open
    canvas.hidden = open
    sourceBtn.setAttribute('aria-pressed', open)
    log.textContent = open
      ? 'Yes, I work at VML. And yes, that is VML on line 6.'
      : CLIENTS[root.dataset.client].log
  })

  setClient('gmail')
}
