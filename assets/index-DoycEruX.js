(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function d(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(o){if(o.ep)return;o.ep=!0;const s=d(o);fetch(o.href,s)}})();const M=`/* The demo banner. Sized by its box, laid out by container queries: one source, every format. */
.ad {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  container-type: size;
  transform-origin: 0 0;
  background: var(--accent, #ff5a1f);
  color: #17292b;
  text-decoration: none;
  border: 1px solid #17292b;
  font-family: 'Bebas Neue', Impact, sans-serif;
}

.ad__bg {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(-45deg, transparent 0 14px, rgb(0 0 0 / .06) 14px 28px);
  background-size: 200% 200%;
  animation: ad-stripes 8s linear infinite;
}
.ad__bg i {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #17292b;
  opacity: .18;
  animation: ad-float 7s ease-in-out infinite alternate;
}
.ad__bg i:nth-child(1) { width: 70cqmin; height: 70cqmin; left: -20cqmin; top: -18cqmin; }
.ad__bg i:nth-child(2) { width: 40cqmin; height: 40cqmin; right: -8cqmin; bottom: 8cqmin; animation-delay: -2s; background: #17292b; opacity: .08; }
.ad__bg i:nth-child(3) { width: 16cqmin; height: 16cqmin; right: 22cqmin; top: 12cqmin; animation-delay: -4s; background: #f2efe8; opacity: .5; border: 0; }

@keyframes ad-stripes { to { background-position: 100% 100%; } }
@keyframes ad-float { to { transform: translate(6cqmin, 8cqmin) rotate(20deg); } }

.ad__f,
.ad__end {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3cqmin;
  padding: 8cqmin;
  text-align: center;
  opacity: 0;
  transform: translateY(14%);
  transition: opacity .45s ease, transform .7s cubic-bezier(.2, .8, .2, 1);
}
.ad__f.is-past,
.ad__end.is-past { transform: translateY(-14%); }
.ad__f.is-on,
.ad__end.is-on { opacity: 1; transform: none; }

.ad__f strong { font-size: 36cqmin; line-height: .82; font-weight: 400; }
.ad__f span {
  font: 600 7.5cqmin/1.15 'Instrument Sans', Arial, sans-serif;
  max-width: 22ch;
}
.ad__f--hello span { font: 12cqmin/.9 'Bebas Neue', Impact, sans-serif; }

.ad__logo { font: 400 30cqmin/.8 'Bebas Neue', Impact, sans-serif; }
.ad__logo em { font-style: normal; color: #f2efe8; }
.ad__tag { font: 600 7cqmin/1.2 'Instrument Sans', Arial, sans-serif; }
.ad__cta {
  margin-top: 2cqmin;
  padding: 3.2cqmin 6cqmin;
  border-radius: 99px;
  background: #17292b;
  color: #f2efe8;
  font: 600 6.5cqmin/1 'Instrument Sans', Arial, sans-serif;
  animation: ad-nudge 1.6s ease-in-out infinite;
}
.ad:hover .ad__cta { background: #f2efe8; color: #17292b; }
@keyframes ad-nudge { 50% { transform: scale(1.06); } }

/* Wide formats (leaderboards, mobile banners): go horizontal */
@container (aspect-ratio > 2.5) {
  .ad__f,
  .ad__end { flex-direction: row; gap: 5cqw; padding: 0 6cqw; }
  .ad__f,
  .ad__end { transform: translateX(8%); }
  .ad__f.is-past,
  .ad__end.is-past { transform: translateX(-8%); }
  .ad__f strong { font-size: 64cqh; }
  .ad__f span { font-size: 17cqh; max-width: 16ch; text-align: left; }
  .ad__f--hello span { font-size: 34cqh; }
  .ad__logo { font-size: 60cqh; }
  .ad__tag { font-size: 16cqh; max-width: 10ch; text-align: left; }
  .ad__cta { font-size: 15cqh; padding: 7cqh 12cqh; margin: 0; }
}
`,z=2e3,O=2600,E=3,g=document.querySelector("[data-banner]");if(g){const e=g.querySelector(".ad"),i=g.querySelector(".ad-viewport"),d=g.querySelector("[data-log]"),m=g.querySelector(".ad-dots"),o=[...e.querySelectorAll(".ad__f, .ad__end")];let s=[],c=0,a=[300,600];const f=o.map((n,t)=>{const r=document.createElement("button");return r.type="button",r.setAttribute("aria-label",`Frame ${t+1}`),r.addEventListener("click",()=>{_(),u(t),d.textContent=`paused on frame ${t+1}/${o.length}`}),m.append(r),r}),u=n=>{o.forEach((t,r)=>{t.classList.toggle("is-on",r===n),t.classList.toggle("is-past",r<n)}),f.forEach((t,r)=>t.classList.toggle("is-on",r===n))},_=()=>{s.forEach(clearTimeout),s=[]},y=()=>{c++,d.textContent=`loop ${c}/${E}`,o.forEach((t,r)=>s.push(setTimeout(()=>u(r),r*z)));const n=o.length*z+O;c<E?s.push(setTimeout(y,n)):s.push(setTimeout(()=>d.textContent=`stopped after ${E} loops, IAB approved`,n-O))},k=()=>{_(),c=0,u(-1),requestAnimationFrame(y)},v=520,b=()=>{const[n,t]=a,r=i.clientWidth,w=Math.min(1,r/n,v/t);e.style.transform=`scale(${w})`,e.style.left=`${(r-n*w)/2}px`,e.style.top=`${(v-t*w)/2}px`};g.querySelectorAll("[data-size]").forEach(n=>{n.addEventListener("click",()=>{g.querySelectorAll("[data-size]").forEach(t=>t.setAttribute("aria-pressed",t===n)),a=n.dataset.size.split("x").map(Number),e.style.width=`${a[0]}px`,e.style.height=`${a[1]}px`,b(),k()})}),g.querySelector("[data-replay]").addEventListener("click",k),e.addEventListener("click",n=>{n.preventDefault(),d.textContent="window.open(clickTag) → #contact",setTimeout(()=>document.querySelector("#contact").scrollIntoView({behavior:"smooth"}),700)});const x=new Blob([e.outerHTML,M]).size;document.querySelector("[data-weight]").textContent=`${(x/1024).toFixed(1)} kB`,new ResizeObserver(b).observe(i),b();const S=new IntersectionObserver(([n])=>{n.isIntersecting&&(k(),S.disconnect())},{threshold:.4});S.observe(g)}const D={js:[/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")|\b(import|from|const|let|function|return|if|else|for|of|new|async|await|export|default|true|false|null|this|break)\b|\b(\d+(?:\.\d+)?)\b/g,["c","s","k","n"]],css:[/(\/\*[\s\S]*?\*\/)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,["c","s","n","v","k","p","n"]],html:[/(<!--[\s\S]*?-->|<!\[endif\]-->)|(<\/?[\w:]+|\/?>)|([\w:-]+)(?==)|("[^"]*")/g,["c","k","p","s"]]},A=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function j(e,i){const[d,m]=D[i];let o="",s=0;for(const c of e.matchAll(d)){const a=c.slice(1).findIndex(f=>f!==void 0);o+=A(e.slice(s,c.index)),o+=`<span class="t-${m[a]}">${A(c[0])}</span>`,s=c.index+c[0].length}return o+A(e.slice(s))}const H=`<!-- The button from this mail -->
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
</table>`,q={gmail:{app:"Gmail",log:"Gmail clips anything over 102 kB, so this mail stays lean."},outlook:{app:"Outlook 2016",log:"Outlook renders with Word. Everything falls back gracefully and the button is redrawn in VML."},dark:{app:"Apple Mail · Dark",log:"Forced dark mode: colours are picked so an inversion still looks intentional."}},p=document.querySelector("[data-mail]");if(p){const e=p.querySelector("[data-app]"),i=p.querySelector("[data-mail-log]"),d=p.querySelector(".mail-canvas"),m=p.querySelector(".mail-source"),o=p.querySelector("[data-source]");p.querySelector("[data-mail-code]").innerHTML=j(H,"html");const s=(a,f)=>{p.querySelectorAll(`[data-${a}]`).forEach(u=>{u.tagName==="BUTTON"&&u.setAttribute("aria-pressed",u.dataset[a]===f)})},c=a=>{p.dataset.client=a,s("client",a),e.textContent=q[a].app,i.textContent=q[a].log};p.querySelectorAll("button[data-client]").forEach(a=>a.addEventListener("click",()=>c(a.dataset.client))),p.querySelectorAll("button[data-device]").forEach(a=>a.addEventListener("click",()=>{p.dataset.device=a.dataset.device,s("device",a.dataset.device),i.textContent=a.dataset.device==="mobile"?"Mobile: the 2×2 grid stacks into one column, no media query needed.":q[p.dataset.client].log})),o.addEventListener("click",()=>{const a=m.hidden;m.hidden=!a,d.hidden=a,o.setAttribute("aria-pressed",a),i.textContent=a?"Yes, I work at VML. And yes, that is VML on line 6.":q[p.dataset.client].log}),c("gmail")}const V=`import './style.css'
import './banner.js'
import './mail.js'
import './site.js'
import clients from './data/clients.json'

// Client marquee: rendered twice so the -50% loop is seamless
const track = document.querySelector('[data-clients]')
const row = clients.map((name) => \`<span>\${name}</span><i>✦</i>\`).join('')
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
  bubble.style.left = \`\${bx}px\`
  bubble.style.top = \`\${by}px\`
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
`,U=`import './banner.css'
import bannerCss from './banner.css?raw'

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
    dot.setAttribute('aria-label', \`Frame \${i + 1}\`)
    dot.addEventListener('click', () => {
      stop()
      show(i)
      log.textContent = \`paused on frame \${i + 1}/\${frames.length}\`
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
    log.textContent = \`loop \${loop}/\${MAX_LOOPS}\`
    frames.forEach((_, i) => timers.push(setTimeout(() => show(i), i * FRAME_MS)))

    const loopEnd = frames.length * FRAME_MS + LOOP_PAUSE_MS
    if (loop < MAX_LOOPS) {
      timers.push(setTimeout(runLoop, loopEnd))
    } else {
      timers.push(setTimeout(() => (log.textContent = \`stopped after \${MAX_LOOPS} loops, IAB approved\`), loopEnd - LOOP_PAUSE_MS))
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
    ad.style.transform = \`scale(\${scale})\`
    ad.style.left = \`\${(avail - w * scale) / 2}px\`
    ad.style.top = \`\${(STAGE_H - h * scale) / 2}px\`
  }

  root.querySelectorAll('[data-size]').forEach((btn) => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('[data-size]').forEach((b) => b.setAttribute('aria-pressed', b === btn))
      size = btn.dataset.size.split('x').map(Number)
      ad.style.width = \`\${size[0]}px\`
      ad.style.height = \`\${size[1]}px\`
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

  // Real weight: this banner's markup + its stylesheet
  const bytes = new Blob([ad.outerHTML, bannerCss]).size
  document.querySelector('[data-weight]').textContent = \`\${(bytes / 1024).toFixed(1)} kB\`

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
`,W=`import './mail.css'
import { highlight } from './highlight.js'

const SOURCE = \`<!-- The button from this mail -->
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
</table>\`

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
    root.querySelectorAll(\`[data-\${attr}]\`).forEach((b) => {
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
`,Y=`:root {
  --paper: #f2efe8;
  --paper-2: #e8e3d8;
  --ink: #17292b;
  --ink-soft: #4d5a5b;
  --line: #17292b26;
  --accent: #ff5a1f;
  --on-ink: #f2efe8;
  --on-ink-soft: #a9b5b4;
  --card: #ffffff;
  --radius: 14px;
  --marquee-speed: 45s;

  --display: 'Bebas Neue', 'Oswald', Impact, sans-serif;
  --sans: 'Instrument Sans', system-ui, sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;

  --gutter: clamp(16px, 4vw, 56px);
  --max: 1320px;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --paper: #101a1b;
    --paper-2: #162324;
    --ink: #eae6dc;
    --ink-soft: #9aa6a5;
    --line: #eae6dc22;
    --on-ink: #101a1b;
    --on-ink-soft: #44585a;
    --card: #182627;
  }
}
:root[data-theme='dark'] {
  --paper: #101a1b;
  --paper-2: #162324;
  --ink: #eae6dc;
  --ink-soft: #9aa6a5;
  --line: #eae6dc22;
  --on-ink: #101a1b;
  --on-ink-soft: #44585a;
  --card: #182627;
}

*,
*::before,
*::after { box-sizing: border-box; }

html { scroll-behavior: smooth; scroll-padding-top: 80px; overflow-x: clip; }

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font: 400 17px/1.55 var(--sans);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: inherit; }
img { display: block; max-width: 100%; }
h1, h2, h3 { margin: 0; font-weight: 400; }
p { margin: 0; }
ul, ol { list-style: none; margin: 0; padding: 0; }

::selection { background: var(--accent); color: #fff; }

/* ---------- NAV ---------- */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px var(--gutter);
  background: color-mix(in srgb, var(--paper) 82%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.nav__logo {
  font: 32px/1 var(--display);
  text-decoration: none;
  letter-spacing: .02em;
}
.nav__logo span { color: var(--accent); }
.nav nav { display: flex; gap: clamp(12px, 2.4vw, 32px); align-items: center; }
.nav nav a {
  font: 500 13px/1 var(--mono);
  text-transform: uppercase;
  letter-spacing: .08em;
  text-decoration: none;
  opacity: .75;
  transition: opacity .2s;
}
.nav nav a:hover { opacity: 1; }
.nav .nav__cta {
  opacity: 1;
  padding: 9px 14px;
  border-radius: 99px;
  background: var(--ink);
  color: var(--paper);
}
@media (max-width: 620px) {
  .nav nav a:not(.nav__cta) { display: none; }
}

/* ---------- HERO ---------- */
.hero {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(48px, 9vw, 120px) var(--gutter) clamp(40px, 6vw, 80px);
}
.eyebrow {
  font: 500 12px/1.4 var(--mono);
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 var(--accent);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  70% { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
.hero__title {
  margin-top: 28px;
  font-family: var(--display);
  line-height: .86;
  text-transform: uppercase;
}
.hero__hello {
  display: block;
  font-size: clamp(40px, 7vw, 96px);
  color: var(--ink-soft);
  letter-spacing: .02em;
}
.hero__name {
  display: block;
  font-size: clamp(75px, 17vw, 230px);
  letter-spacing: -.005em;
}
.hero__name em {
  font-style: normal;
  color: transparent;
  -webkit-text-stroke: 2px var(--ink-soft);
}
.hero__rule {
  margin: clamp(24px, 4vw, 48px) 0;
  height: 1px;
  background-image: linear-gradient(90deg, var(--ink) 40%, transparent 0);
  background-size: 6px 1px;
  opacity: .5;
}
.hero__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(32px, 6vw, 96px);
  align-items: end;
}
.hero__lede {
  font-size: clamp(19px, 2vw, 26px);
  line-height: 1.4;
  max-width: 100%;
}
.hero__lede strong { font-weight: 600; box-shadow: inset 0 -.35em 0 color-mix(in srgb, var(--accent) 35%, transparent); }
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 32px;
  margin: 0;
}
.stats div { border-top: 1px solid var(--line); padding-top: 12px; }
.stats dt { font: clamp(40px, 5vw, 64px)/1 var(--display); }
.stats dd { margin: 4px 0 0; font: 12px/1.3 var(--mono); text-transform: uppercase; letter-spacing: .08em; color: var(--ink-soft); }
@media (max-width: 820px) {
  .hero__grid { grid-template-columns: 1fr; }
}

/* ---------- MARQUEE ---------- */
.marquee {
  overflow: hidden;
  background: var(--accent);
  color: #1a0d07;
  padding: 14px 0;
  transform: rotate(-1.2deg);
  margin: 0 -10px;
}
.marquee__track {
  display: flex;
  width: max-content;
  gap: 28px;
  align-items: center;
  animation: marquee var(--marquee-speed) linear infinite;
  font: clamp(28px, 3.6vw, 44px)/1 var(--display);
  text-transform: uppercase;
  letter-spacing: .03em;
}
.marquee i { font-style: normal; font-size: .6em; }
@keyframes marquee { to { transform: translateX(-50%); } }

/* ---------- SECTIONS ---------- */
.section {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(72px, 10vw, 140px) var(--gutter);
}
.section--ink,
.section--paper {
  max-width: none;
  padding-inline: max(var(--gutter), calc((100vw - var(--max)) / 2 + var(--gutter)));
}
.section--ink { background: var(--ink); color: var(--on-ink); }
.section--paper { background: var(--paper-2); }

.section__head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 24px;
  margin-bottom: clamp(40px, 6vw, 72px);
  align-items: baseline;
}
.section__num { font: 500 13px/1 var(--mono); color: var(--accent); }
.section__head h2 {
  font: clamp(56px, 9vw, 128px)/.9 var(--display);
  text-transform: uppercase;
}
.section__head p {
  grid-column: 2;
  max-width: 52ch;
  color: var(--ink-soft);
  font-size: 18px;
}
.section--ink .section__head p { color: var(--on-ink-soft); }

/* ---------- WORK: three kinds ---------- */
.kind {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
  padding-block: clamp(48px, 7vw, 96px);
  border-top: 1px solid var(--line);
}
.kind--flip { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); }
.kind--flip .kind__copy { order: 2; }
.kind__index {
  display: flex;
  align-items: center;
  gap: 12px;
  font: 500 12px/1 var(--mono);
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--ink-soft);
  margin-bottom: 18px;
}
.kind__index span {
  display: grid;
  place-items: center;
  width: 30px; height: 30px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: 13px;
}
.kind h3 {
  font: clamp(48px, 6vw, 88px)/.88 var(--display);
  text-transform: uppercase;
  margin-bottom: 20px;
}
.kind__copy > p:not(.kind__index):not(.kind__hint) { color: var(--ink-soft); max-width: 46ch; }
.kind__aside {
  margin-top: 14px;
  padding-left: 14px;
  border-left: 3px solid var(--accent);
  font-style: italic;
}
.kind__hint { margin-top: 22px; font: 500 13px/1.4 var(--mono); color: var(--accent); }
.kind__facts { display: flex; gap: 28px; margin-top: 24px; }
.kind__facts li { font: 12px/1.3 var(--mono); text-transform: uppercase; letter-spacing: .06em; color: var(--ink-soft); }
.kind__facts strong { display: block; font: 40px/1 var(--display); color: var(--ink); letter-spacing: 0; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
.tags li {
  font: 12px/1 var(--mono);
  padding: 7px 10px;
  border: 1px solid var(--line);
  border-radius: 99px;
}
@media (max-width: 900px) {
  .kind, .kind--flip { grid-template-columns: 1fr; }
  .kind--flip .kind__copy { order: 0; }
}

/* shared demo chrome */
.demo {
  min-width: 0;
  padding: clamp(12px, 2vw, 20px);
  border-radius: calc(var(--radius) + 6px);
  background: var(--paper-2);
  border: 1px solid var(--line);
}
.demo-bar { display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; margin-bottom: 16px; }
.seg {
  display: inline-flex;
  flex-wrap: wrap;
  padding: 3px;
  border-radius: 99px;
  background: var(--paper);
  border: 1px solid var(--line);
}
.seg button,
.demo-btn {
  font: 500 12px/1 var(--mono);
  padding: 8px 12px;
  border: 0;
  border-radius: 99px;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: background .2s, color .2s;
}
.seg button:hover { background: color-mix(in srgb, var(--ink) 8%, transparent); }
.seg button[aria-pressed='true'] { background: var(--ink); color: var(--paper); }
.demo-btn { border: 1px solid var(--line); background: var(--paper); }
.demo-btn:hover,
.demo-btn[aria-pressed='true'] { background: var(--accent); border-color: var(--accent); color: #fff; }
.demo-foot { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 14px; min-height: 20px; flex-wrap: wrap; }
.demo-log { font: 12px/1.4 var(--mono); color: var(--ink-soft); }
.demo-log::before { content: '> '; color: var(--accent); }

/* banner stage */
.ad-viewport {
  position: relative;
  width: 100%;
  height: 520px;
}
.ad { transition: width .5s cubic-bezier(.2, .8, .2, 1), height .5s cubic-bezier(.2, .8, .2, 1), left .5s cubic-bezier(.2, .8, .2, 1), top .5s cubic-bezier(.2, .8, .2, 1); box-shadow: 0 30px 50px -28px #0007; }
.ad-dots { display: flex; gap: 6px; }
.ad-dots button {
  width: 22px; height: 6px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: color-mix(in srgb, var(--ink) 18%, transparent);
  cursor: pointer;
  transition: background .3s, width .3s;
}
.ad-dots button.is-on { background: var(--accent); width: 36px; }

/* code viewer: always dark, like an editor */
.demo--code { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 16px; }
.code-win {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: var(--radius);
  overflow: hidden;
  background: #0f1a1b;
  color: #d6dedd;
  box-shadow: 0 30px 60px -30px #0008;
}
.code-tabs { display: flex; overflow-x: auto; background: #0a1213; scrollbar-width: none; }
.code-tabs button {
  flex: none;
  padding: 11px 14px;
  border: 0;
  border-right: 1px solid #ffffff0d;
  background: transparent;
  color: #7f8f8e;
  font: 12px/1 var(--mono);
  cursor: pointer;
}
.code-tabs button[aria-selected='true'] { background: #0f1a1b; color: #fff; box-shadow: inset 0 2px 0 var(--accent); }
.code-tabs .live { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-right: 7px; animation: pulse 2s infinite; }
.code-body { display: flex; height: 380px; overflow: auto; }
.code,
.code-gutter { margin: 0; padding: 16px 0; font: 12.5px/1.6 var(--mono); tab-size: 2; }
.code-gutter { position: sticky; left: 0; padding-inline: 14px 12px; text-align: right; color: #3f5354; background: #0f1a1b; user-select: none; }
.code { padding-right: 20px; white-space: pre; color: #d6dedd; }
.code.is-flash { animation: code-flash .9s ease; }
@keyframes code-flash { 0% { background: color-mix(in srgb, var(--accent) 25%, transparent); } 100% { background: transparent; } }
.code-foot { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 9px 14px; background: #0a1213; color: #7f8f8e; font: 11px/1.3 var(--mono); }
.t-c { color: #62797a; font-style: italic; }
.t-s { color: #a5d6a7; }
.t-k { color: #ff9e7a; }
.t-n { color: #f5c26b; }
.t-v { color: #8ecbff; }
.t-p { color: #c7b4ff; }

.remix { display: flex; flex-direction: column; gap: 18px; }
.remix__title { font: 30px/1 var(--display); text-transform: uppercase; }
.remix__row { display: grid; gap: 8px; }
.remix__label { display: flex; justify-content: space-between; gap: 8px; font: 500 12px/1.3 var(--mono); text-transform: uppercase; letter-spacing: .06em; }
.remix__label small { text-transform: none; letter-spacing: 0; color: var(--ink-soft); }
.remix__label output { color: var(--accent); }
.remix input[type='range'] { width: 100%; accent-color: var(--accent); }
.swatches { display: flex; flex-wrap: wrap; gap: 8px; }
.swatch {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 2px solid var(--paper);
  box-shadow: 0 0 0 1px var(--line);
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
}
.swatch:hover { transform: scale(1.12); }
.swatch[aria-pressed='true'] { box-shadow: 0 0 0 2px var(--ink); }
.seg--small button { padding: 7px 10px; }
.remix .demo-btn { align-self: flex-start; }
.remix__toast {
  min-height: 1.4em;
  font: 500 13px/1.4 var(--mono);
  color: var(--accent);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity .3s, transform .3s;
}
.remix__toast.is-on { opacity: 1; transform: none; }
@media (max-width: 1100px) { .demo--code { grid-template-columns: 1fr; } }

/* DEFINED thumbnails */
.thumbs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding-top: clamp(40px, 5vw, 64px);
  border-top: 1px solid var(--line);
}
.thumbs__label { grid-column: 1 / -1; font: 500 12px/1 var(--mono); text-transform: uppercase; letter-spacing: .1em; color: var(--ink-soft); }
.thumb { display: grid; gap: 4px; text-decoration: none; }
.thumb img {
  aspect-ratio: 16 / 10;
  width: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  margin-bottom: 8px;
  transition: transform .5s cubic-bezier(.2, .8, .2, 1);
}
.thumb:hover img { transform: translateY(-6px) rotate(-1deg); }
.thumb span { font: 24px/1 var(--display); text-transform: uppercase; }
.thumb small { font: 11px/1.3 var(--mono); color: var(--ink-soft); }
@media (max-width: 820px) { .thumbs { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

/* ---------- LAB ---------- */
.lab { border-top: 1px solid var(--line); }
.lab__row {
  display: grid;
  grid-template-columns: 1.1fr 1.6fr auto;
  gap: 16px;
  align-items: baseline;
  padding: 22px 4px;
  border-bottom: 1px solid var(--line);
  transition: padding .35s cubic-bezier(.2,.7,.2,1), color .2s;
  cursor: default;
}
.lab__row:hover { padding-left: 20px; color: var(--accent); }
.lab__name { font: clamp(30px, 3.4vw, 44px)/1 var(--display); text-transform: uppercase; }
.lab__what { color: var(--ink-soft); }
.lab__tech { font: 12px/1 var(--mono); text-transform: uppercase; letter-spacing: .06em; color: var(--ink-soft); }
@media (max-width: 720px) {
  .lab__row { grid-template-columns: 1fr auto; }
  .lab__what { grid-column: 1 / -1; grid-row: 2; }
}
.lab-cursor {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 60;
  width: 120px; height: 120px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent);
  color: #1a0d07;
  font: 22px/1 var(--display);
  text-align: center;
  padding: 16px;
  transform: translate(-50%, -50%) scale(0);
  transition: transform .3s cubic-bezier(.2,.7,.2,1);
}
.lab-cursor.is-on { transform: translate(-50%, -50%) scale(1); }
@media (hover: none) { .lab-cursor { display: none; } }

/* ---------- ABOUT ---------- */
.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(32px, 4vw, 64px);
}
.about__label {
  font: 44px/1 var(--display);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px dotted var(--ink);
}
.bars { display: grid; gap: 8px; }
.bars li {
  position: relative;
  padding: 6px 10px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--ink) 8%, transparent);
  font: 20px/1.1 var(--display);
  letter-spacing: .03em;
  text-transform: uppercase;
  color: #fff;
  isolation: isolate;
  overflow: hidden;
}
.bars li::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--w);
  background: var(--c, var(--ink));
  border-radius: 6px;
  z-index: -1;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 1.1s cubic-bezier(.2,.7,.2,1);
}
.is-visible .bars li::before { transform: scaleX(1); }
.bars li:nth-child(2)::before { transition-delay: .05s; }
.bars li:nth-child(3)::before { transition-delay: .1s; }
.bars li:nth-child(4)::before { transition-delay: .15s; }
.bars li:nth-child(5)::before { transition-delay: .2s; }
.bars li:nth-child(6)::before { transition-delay: .25s; }
.bars li:nth-child(7)::before { transition-delay: .3s; }
.bars li:nth-child(8)::before { transition-delay: .35s; }
.bars li:nth-child(9)::before { transition-delay: .4s; }
.bars--now li { color: var(--paper); }
.bars--now li::before { background: var(--ink); }
.bars--now li:first-child::before { background: var(--accent); }
.bars--dead { text-decoration: line-through; text-decoration-thickness: 2px; }
.bars--dead small { font: 10px/1 var(--mono); margin-left: 6px; text-decoration: none; opacity: .8; }
.timeline { display: grid; gap: 0; }
.timeline li {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
}
.timeline time { font: 12px/1.6 var(--mono); color: var(--accent); }
.timeline li:nth-last-child(-n+2) { font-weight: 600; }
.about__off { margin-top: 24px; color: var(--ink-soft); }
@media (max-width: 960px) { .about { grid-template-columns: 1fr 1fr; } .about__story { grid-column: 1 / -1; } }
@media (max-width: 620px) { .about { grid-template-columns: 1fr; } }

/* ---------- CONTACT ---------- */
.contact {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(80px, 12vw, 160px) var(--gutter) clamp(56px, 8vw, 96px);
}
.contact__big {
  display: inline-flex;
  align-items: flex-start;
  gap: .08em;
  margin: 20px 0 clamp(40px, 6vw, 72px);
  font: clamp(80px, 16vw, 240px)/.85 var(--display);
  text-transform: uppercase;
  text-decoration: none;
  transition: color .25s;
}
.contact__big span { font-size: .45em; color: var(--accent); transition: transform .3s; }
.contact__big:hover { color: var(--accent); }
.contact__big:hover span { transform: translate(8px, -8px); }
.contact__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  border-top: 1px solid var(--line);
}
.contact__list li {
  padding: 20px 0;
  border-bottom: 1px solid var(--line);
  display: grid;
  gap: 4px;
  min-width: 0;
}
.contact__list span { font: 12px/1 var(--mono); text-transform: uppercase; letter-spacing: .08em; color: var(--ink-soft); }
.contact__list a { font-size: 18px; font-weight: 500; text-decoration: none; overflow-wrap: anywhere; }
.contact__list a:hover { color: var(--accent); }

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding: 24px var(--gutter);
  border-top: 1px solid var(--line);
  font: 12px/1.4 var(--mono);
  color: var(--ink-soft);
}

/* ---------- REVEAL ---------- */
.reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1); }
.reveal.is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
  .bars li::before { transform: none; }
}
`,G=`import { highlight } from './highlight.js'
import mainSrc from './main.js?raw'
import bannerSrc from './banner.js?raw'
import bannerCssSrc from './banner.css?raw'
import mailSrc from './mail.js?raw'
import styleSrc from './style.css?raw'
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

const tokensSrc = (t) => \`/* Live: edited from the remix panel */
:root {
  --accent: \${t.accent};
  --radius: \${t.radius}px;
  --marquee-speed: \${t.marquee}s;
  --display: \${FONTS[t.font].css};
}\`

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
    { name: 'banner.css', lang: 'css', src: () => bannerCssSrc },
    { name: 'mail.js', lang: 'js', src: () => mailSrc },
    { name: 'site.js', lang: 'js', src: () => siteSrc, note: 'this viewer' },
    { name: 'style.css', lang: 'css', src: () => styleSrc },
  ]
  let active = files[0]

  const lines = (s) => s.split('\\n').length
  const total = files.slice(1).reduce((sum, f) => sum + lines(f.src()), 0)
  root.querySelector('[data-code-total]').textContent = \`\${total} lines · 0 frameworks\`

  const render = (flashLine) => {
    const src = active.src()
    code.innerHTML = highlight(src, active.lang)
    gutter.textContent = Array.from({ length: lines(src) }, (_, i) => i + 1).join('\\n')
    stats.textContent = \`\${active.name} · \${lines(src)} lines · \${(new Blob([src]).size / 1024).toFixed(1)} kB\`
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
    tab.innerHTML = file.live ? \`<i class="live"></i>\${file.name}\` : file.name
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
    html.style.setProperty('--radius', \`\${tokens.radius}px\`)
    html.style.setProperty('--marquee-speed', \`\${tokens.marquee}s\`)
    html.style.setProperty('--display', FONTS[tokens.font].css)
    root.querySelector('[data-out="radius"]').textContent = \`\${tokens.radius}px\`
    root.querySelector('[data-out="marquee"]').textContent = \`\${tokens.marquee}s\`
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
      say(name === 'Flash red, RIP' ? 'Flash red. A moment of silence, please.' : \`\${name} it is.\`)
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
`,L={accent:"#ff5a1f",radius:14,marquee:45,font:"bebas"},X=[["#ff5a1f","Signal orange"],["#4a8bc9","Photoshop blue"],["#f07f22","Illustrator orange"],["#b52f73","InDesign pink"],["#e0262a","Flash red, RIP"],["#5b6aa8","PHP purple"]],$={bebas:{css:"'Bebas Neue', Impact, sans-serif",toast:""},serif:{css:"Georgia, 'Times New Roman', serif",toast:"Very editorial. Very Outlook, too."},comic:{css:"'Comic Sans MS', 'Comic Neue', cursive",toast:"You asked for this."}},K=e=>`/* Live: edited from the remix panel */
:root {
  --accent: ${e.accent};
  --radius: ${e.radius}px;
  --marquee-speed: ${e.marquee}s;
  --display: ${$[e.font].css};
}`,l=document.querySelector("[data-site]");if(l){const e={...L},i=document.documentElement,d=l.querySelector("[data-code]"),m=l.querySelector(".code-gutter"),o=l.querySelector("[data-code-stats]"),s=l.querySelector(".code-tabs"),c=l.querySelector("[data-toast]"),a=[{name:"tokens.css",lang:"css",src:()=>K(e),live:!0},{name:"main.js",lang:"js",src:()=>V},{name:"banner.js",lang:"js",src:()=>U},{name:"banner.css",lang:"css",src:()=>M},{name:"mail.js",lang:"js",src:()=>W},{name:"site.js",lang:"js",src:()=>G,note:"this viewer"},{name:"style.css",lang:"css",src:()=>Y}];let f=a[0];const u=n=>n.split(`
`).length,_=a.slice(1).reduce((n,t)=>n+u(t.src()),0);l.querySelector("[data-code-total]").textContent=`${_} lines · 0 frameworks`;const y=n=>{const t=f.src();d.innerHTML=j(t,f.lang),m.textContent=Array.from({length:u(t)},(r,w)=>w+1).join(`
`),o.textContent=`${f.name} · ${u(t)} lines · ${(new Blob([t]).size/1024).toFixed(1)} kB`,n&&(d.parentElement.classList.remove("is-flash"),d.offsetWidth,d.parentElement.classList.add("is-flash"))},k=a.map(n=>{const t=document.createElement("button");return t.type="button",t.setAttribute("role","tab"),t.innerHTML=n.live?`<i class="live"></i>${n.name}`:n.name,n.note&&(t.title=n.note),t.addEventListener("click",()=>v(n)),s.append(t),t}),v=n=>{f=n,k.forEach((t,r)=>t.setAttribute("aria-selected",a[r]===n)),y(),l.querySelector(".code-body").scrollTop=0},b=n=>{c.textContent=n,c.classList.toggle("is-on",!!n)},x=n=>{i.style.setProperty("--accent",e.accent),i.style.setProperty("--radius",`${e.radius}px`),i.style.setProperty("--marquee-speed",`${e.marquee}s`),i.style.setProperty("--display",$[e.font].css),l.querySelector('[data-out="radius"]').textContent=`${e.radius}px`,l.querySelector('[data-out="marquee"]').textContent=`${e.marquee}s`,S.forEach(t=>t.setAttribute("aria-pressed",t.dataset.color===e.accent)),l.querySelectorAll("[data-font]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.font===e.font)),n&&f!==a[0]?v(a[0]):y(!!n)},S=X.map(([n,t])=>{const r=document.createElement("button");return r.type="button",r.className="swatch",r.dataset.color=n,r.style.background=n,r.title=t,r.setAttribute("aria-label",t),r.addEventListener("click",()=>{e.accent=n,b(t==="Flash red, RIP"?"Flash red. A moment of silence, please.":`${t} it is.`),x("accent")}),l.querySelector("[data-swatches]").append(r),r});l.querySelectorAll("input[data-token]").forEach(n=>{n.addEventListener("input",()=>{e[n.dataset.token]=Number(n.value),n.dataset.token==="marquee"&&b(e.marquee<12?"Brands at warp speed.":""),n.dataset.token==="radius"&&b(e.radius===0?"Very Outlook 2016 of you.":""),x(n.dataset.token)})}),l.querySelectorAll("[data-font]").forEach(n=>{n.addEventListener("click",()=>{e.font=n.dataset.font,b($[e.font].toast),x("font")})}),l.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(e,L),l.querySelectorAll("input[data-token]").forEach(n=>n.value=L[n.dataset.token]),b("Back to factory settings."),x("reset")}),v(a[0]),x()}const Q=["Amazon","Belfius","bpost","Center Parcs","Child Focus","Danone","KIA","Mazda","MediaMarkt","Nationale Loterij","NN","Pioneer","Q8","Randstad","Rode Kruis","Škoda","Telenet","Toyota","Vlaamse Overheid"],Z=document.querySelector("[data-clients]"),I=Q.map(e=>`<span>${e}</span><i>✦</i>`).join("");Z.innerHTML=I+I;const J=document.querySelectorAll("[data-clock]"),B=()=>{const e=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Brussels"}).format(new Date);J.forEach(i=>i.textContent=e)};B();setInterval(B,3e4);document.querySelector("[data-year]").textContent=new Date().getFullYear();const N=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),N.unobserve(i.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(e=>N.observe(e));const h=document.createElement("div");h.className="lab-cursor";document.body.append(h);let F=0,P=0,C=0,T=0;const R=()=>{C+=(F-C)*.18,T+=(P-T)*.18,h.style.left=`${C}px`,h.style.top=`${T}px`,requestAnimationFrame(R)};R();window.addEventListener("pointermove",e=>{F=e.clientX,P=e.clientY});document.querySelectorAll(".lab__row").forEach(e=>{e.addEventListener("pointerenter",()=>{h.textContent=e.querySelector(".lab__tech").textContent,h.classList.add("is-on")}),e.addEventListener("pointerleave",()=>h.classList.remove("is-on"))});
