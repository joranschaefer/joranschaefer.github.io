(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))b(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&b(i)}).observe(document,{childList:!0,subtree:!0});function p(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function b(a){if(a.ep)return;a.ep=!0;const r=p(a);fetch(a.href,r)}})();const H=".ad{position:absolute;top:0;left:0;display:block;overflow:hidden;container-type:size;transform-origin:0 0;background:var(--accent, #ff5a1f);color:#17292b;text-decoration:none;border:1px solid #17292b;font-family:Bebas Neue,Impact,sans-serif}.ad__bg{position:absolute;inset:0;background:repeating-linear-gradient(-45deg,transparent 0 14px,rgba(0,0,0,.06) 14px 28px);background-size:200% 200%;animation:ad-stripes 8s linear infinite}.ad__blob{position:absolute;border-radius:50%;border:2px solid #17292b;opacity:.18;animation:ad-float 7s ease-in-out infinite alternate}.ad__blob:nth-child(1){width:70cqmin;height:70cqmin;left:-20cqmin;top:-18cqmin}.ad__blob:nth-child(2){width:40cqmin;height:40cqmin;right:-8cqmin;bottom:8cqmin;animation-delay:-2s;background:#17292b;opacity:.08}.ad__blob:nth-child(3){width:16cqmin;height:16cqmin;right:22cqmin;top:12cqmin;animation-delay:-4s;background:#f2efe8;opacity:.5;border:0}.ad__frame{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3cqmin;padding:8cqmin;text-align:center;opacity:0;transform:translateY(14%);transition:opacity .45s ease,transform .7s cubic-bezier(.2,.8,.2,1)}.ad__frame.is-past{transform:translateY(-14%)}.ad__frame.is-on{opacity:1;transform:none}.ad__big{font-size:36cqmin;line-height:.82;font-weight:400}.ad__text{font:600 7.5cqmin/1.15 Instrument Sans,Arial,sans-serif;max-width:22ch}.ad__frame--hello .ad__text{font:12cqmin/.9 Bebas Neue,Impact,sans-serif}.ad__logo{font:400 30cqmin/.8 Bebas Neue,Impact,sans-serif}.ad__logo-dot{font-style:normal;color:#f2efe8}.ad__tag{font:600 7cqmin/1.2 Instrument Sans,Arial,sans-serif}.ad__cta{margin-top:2cqmin;padding:3.2cqmin 6cqmin;border-radius:99px;background:#17292b;color:#f2efe8;font:600 6.5cqmin/1 Instrument Sans,Arial,sans-serif;animation:ad-nudge 1.6s ease-in-out infinite}.ad:hover .ad__cta{background:#f2efe8;color:#17292b}@keyframes ad-stripes{to{background-position:100% 100%}}@keyframes ad-float{to{transform:translate(6cqmin,8cqmin) rotate(20deg)}}@keyframes ad-nudge{50%{transform:scale(1.06)}}@container (aspect-ratio > 2.5){.ad__frame{flex-direction:row;gap:5cqw;padding:0 6cqw;transform:translate(8%)}.ad__frame.is-past{transform:translate(-8%)}.ad__big{font-size:64cqh}.ad__text{font-size:17cqh;max-width:16ch;text-align:left}.ad__frame--hello .ad__text{font-size:34cqh}.ad__logo{font-size:60cqh}.ad__tag{font-size:16cqh;max-width:10ch;text-align:left}.ad__cta{font-size:15cqh;padding:7cqh 12cqh;margin:0}}",j=2e3,z=2600,E=3,x=document.querySelector("[data-banner]");if(x){const n=x.querySelector(".ad"),s=x.querySelector(".ad-viewport"),p=x.querySelector("[data-log]"),b=x.querySelector(".ad-dots"),a=[...n.querySelectorAll(".ad__frame")];let r=[],i=0,o=[300,600];const f=a.map((l,e)=>{const t=document.createElement("button");return t.type="button",t.className="ad-dots__dot",t.setAttribute("aria-label",`Frame ${e+1}`),t.addEventListener("click",()=>{_(),u(e),p.textContent=`paused on frame ${e+1}/${a.length}`}),b.append(t),t}),u=l=>{a.forEach((e,t)=>{e.classList.toggle("is-on",t===l),e.classList.toggle("is-past",t<l)}),f.forEach((e,t)=>e.classList.toggle("is-on",t===l))},_=()=>{r.forEach(clearTimeout),r=[]},k=()=>{i++,p.textContent=`loop ${i}/${E}`,a.forEach((e,t)=>r.push(setTimeout(()=>u(t),t*j)));const l=a.length*j+z;i<E?r.push(setTimeout(k,l)):r.push(setTimeout(()=>p.textContent=`stopped after ${E} loops, IAB approved`,l-z))},w=()=>{_(),i=0,u(-1),requestAnimationFrame(k)},q=520,y=()=>{const[l,e]=o,t=s.clientWidth,d=Math.min(1,t/l,q/e);n.style.transform=`scale(${d})`,n.style.left=`${(t-l*d)/2}px`,n.style.top=`${(q-e*d)/2}px`};x.querySelectorAll("[data-size]").forEach(l=>{l.addEventListener("click",()=>{x.querySelectorAll("[data-size]").forEach(e=>e.setAttribute("aria-pressed",e===l)),o=l.dataset.size.split("x").map(Number),n.style.width=`${o[0]}px`,n.style.height=`${o[1]}px`,y(),w()})}),x.querySelector("[data-replay]").addEventListener("click",w),n.addEventListener("click",l=>{l.preventDefault(),p.textContent="window.open(clickTag) → #contact",setTimeout(()=>document.querySelector("#contact").scrollIntoView({behavior:"smooth"}),700)});const g=new Blob([n.outerHTML,H]).size;document.querySelector("[data-weight]").textContent=`${(g/1024).toFixed(1)} kB`,new ResizeObserver(y).observe(s),y();const h=new IntersectionObserver(([l])=>{l.isIntersecting&&(w(),h.disconnect())},{threshold:.4});h.observe(x)}const R={js:[/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")|\b(import|from|const|let|function|return|if|else|for|of|new|async|await|export|default|true|false|null|this|break)\b|\b(\d+(?:\.\d+)?)\b/g,["comment","string","keyword","number"]],css:[/(\/\*[\s\S]*?\*\/)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,["comment","string","number","var","keyword","prop","number"]],scss:[/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+|\$[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,["comment","string","number","var","keyword","prop","number"]],html:[/(<!--[\s\S]*?-->|<!\[endif\]-->)|(<\/?[\w:]+|\/?>)|([\w:-]+)(?==)|("[^"]*")/g,["comment","keyword","prop","string"]]},A=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function I(n,s){const[p,b]=R[s];let a="",r=0;for(const i of n.matchAll(p)){const o=i.slice(1).findIndex(f=>f!==void 0);a+=A(n.slice(r,i.index)),a+=`<span class="token token--${b[o]}">${A(i[0])}</span>`,r=i.index+i[0].length}return a+A(n.slice(r))}const V=`<!-- The button from this mail -->
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
</table>`,S={gmail:{app:"Gmail",log:"Gmail clips anything over 102 kB, so this mail stays lean."},outlook:{app:"Outlook 2016",log:"Outlook renders with Word. Everything falls back gracefully and the button is redrawn in VML."},dark:{app:"Apple Mail · Dark",log:"Forced dark mode: colours are picked so an inversion still looks intentional."}},m=document.querySelector("[data-mail]");if(m){const n=m.querySelector("[data-app]"),s=m.querySelector("[data-mail-log]"),p=m.querySelector(".mail__canvas"),b=m.querySelector(".mail__source"),a=m.querySelector("[data-source]");m.querySelector("[data-mail-code]").innerHTML=I(V,"html");const r=(o,f)=>{m.querySelectorAll(`[data-${o}]`).forEach(u=>{u.tagName==="BUTTON"&&u.setAttribute("aria-pressed",u.dataset[o]===f)})},i=o=>{m.dataset.client=o,r("client",o),n.textContent=S[o].app,s.textContent=S[o].log};m.querySelectorAll("button[data-client]").forEach(o=>o.addEventListener("click",()=>i(o.dataset.client))),m.querySelectorAll("button[data-device]").forEach(o=>o.addEventListener("click",()=>{m.dataset.device=o.dataset.device,r("device",o.dataset.device),s.textContent=o.dataset.device==="mobile"?"Mobile: the 2×2 grid stacks into one column, no media query needed.":S[m.dataset.client].log})),a.addEventListener("click",()=>{const o=b.hidden;b.hidden=!o,p.hidden=o,a.setAttribute("aria-pressed",o),s.textContent=o?"Yes, I work at VML. And yes, that is VML on line 6.":S[m.dataset.client].log}),i("gmail")}const Y=`import './style.scss'
import './banner.js'
import './mail.js'
import './site.js'
import clients from './data/clients.json'

// Client marquee: rendered twice so the -50% loop is seamless
const track = document.querySelector('[data-clients]')
const row = clients.map((name) => \`<span class="marquee__item">\${name}</span><i class="marquee__sep">✦</i>\`).join('')
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
`,U=`// Runtime tokens stay CSS custom properties: the remix panel overrides them live.
// Sass variables are for build-time constants only.
$ease: cubic-bezier(.2, .8, .2, 1);
$ease-soft: cubic-bezier(.2, .7, .2, 1);

@mixin dark-tokens {
  --paper: #101a1b;
  --paper-2: #162324;
  --ink: #eae6dc;
  --ink-soft: #9aa6a5;
  --line: #eae6dc22;
  --on-ink: #101a1b;
  --on-ink-soft: #44585a;
  --card: #182627;
}

// Mono, uppercase, tracked out: every small label on the page
@mixin label($font, $spacing: .08em) {
  font: $font;
  text-transform: uppercase;
  letter-spacing: $spacing;
}

// Shared by segmented-control buttons and standalone buttons
@mixin pill-button {
  font: 500 12px/1 var(--mono);
  padding: 8px 12px;
  border: 0;
  border-radius: 99px;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition: background .2s, color .2s;
}

:root {
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
  :root:not([data-theme='light']) { @include dark-tokens; }
}
:root[data-theme='dark'] { @include dark-tokens; }

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

@keyframes pulse {
  70% { box-shadow: 0 0 0 10px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}

// ---------- NAV ----------
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

  &__logo {
    font: 32px/1 var(--display);
    text-decoration: none;
    letter-spacing: .02em;
  }

  &__dot { color: var(--accent); }

  &__menu {
    display: flex;
    gap: clamp(12px, 2.4vw, 32px);
    align-items: center;
  }

  &__link {
    @include label(500 13px/1 var(--mono));
    text-decoration: none;
    opacity: .75;
    transition: opacity .2s;

    &:hover { opacity: 1; }

    &--cta {
      opacity: 1;
      padding: 9px 14px;
      border-radius: 99px;
      background: var(--ink);
      color: var(--paper);
    }

    @media (max-width: 620px) {
      &:not(#{&}--cta) { display: none; }
    }
  }
}

// ---------- HERO ----------
.hero {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(48px, 9vw, 120px) var(--gutter) clamp(40px, 6vw, 80px);

  &__title {
    margin-top: 28px;
    font-family: var(--display);
    line-height: .86;
    text-transform: uppercase;
  }

  &__hello {
    display: block;
    font-size: clamp(40px, 7vw, 96px);
    color: var(--ink-soft);
    letter-spacing: .02em;
  }

  &__name {
    display: block;
    font-size: clamp(75px, 17vw, 230px);
    letter-spacing: -.005em;
  }

  &__outline {
    font-style: normal;
    color: transparent;
    -webkit-text-stroke: 2px var(--ink-soft);
  }

  &__rule {
    margin: clamp(24px, 4vw, 48px) 0;
    height: 1px;
    background-image: linear-gradient(90deg, var(--ink) 40%, transparent 0);
    background-size: 6px 1px;
    opacity: .5;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: clamp(32px, 6vw, 96px);
    align-items: end;

    @media (max-width: 820px) { grid-template-columns: 1fr; }
  }

  &__lede {
    font-size: clamp(19px, 2vw, 26px);
    line-height: 1.4;
    max-width: 100%;
  }

  &__highlight { font-weight: 600; box-shadow: inset 0 -.35em 0 color-mix(in srgb, var(--accent) 35%, transparent); }
}

.eyebrow {
  @include label(500 12px/1.4 var(--mono), .1em);
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  &__dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 0 var(--accent);
    animation: pulse 2s infinite;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 32px;
  margin: 0;

  &__item { border-top: 1px solid var(--line); padding-top: 12px; }
  &__value { font: clamp(40px, 5vw, 64px)/1 var(--display); }
  &__label { @include label(12px/1.3 var(--mono)); margin: 4px 0 0; color: var(--ink-soft); }
}

// ---------- MARQUEE ----------
.marquee {
  overflow: hidden;
  background: var(--accent);
  color: #1a0d07;
  padding: 14px 0;
  transform: rotate(-1.2deg);
  margin: 0 -10px;

  &__track {
    @include label(clamp(28px, 3.6vw, 44px)/1 var(--display), .03em);
    display: flex;
    width: max-content;
    gap: 28px;
    align-items: center;
    animation: marquee var(--marquee-speed) linear infinite;
  }

  &__sep { font-style: normal; font-size: .6em; }
}
@keyframes marquee { to { transform: translateX(-50%); } }

// ---------- SECTIONS ----------
.section {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(72px, 10vw, 140px) var(--gutter);

  &--ink,
  &--paper {
    max-width: none;
    padding-inline: max(var(--gutter), calc((100vw - var(--max)) / 2 + var(--gutter)));
  }
  &--ink { background: var(--ink); color: var(--on-ink); }
  &--paper { background: var(--paper-2); }

  &__head {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px 24px;
    margin-bottom: clamp(40px, 6vw, 72px);
    align-items: baseline;
  }

  &__num { font: 500 13px/1 var(--mono); color: var(--accent); }

  &__title {
    font: clamp(56px, 9vw, 128px)/.9 var(--display);
    text-transform: uppercase;
  }

  &__intro {
    grid-column: 2;
    max-width: 52ch;
    color: var(--ink-soft);
    font-size: 18px;
  }
  &--ink &__intro { color: var(--on-ink-soft); }
}

// ---------- WORK: three kinds ----------
.kind {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: center;
  padding-block: clamp(48px, 7vw, 96px);
  border-top: 1px solid var(--line);

  &--flip { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); }
  &--flip &__copy { order: 2; }

  @media (max-width: 900px) {
    &, &--flip { grid-template-columns: 1fr; }
    &--flip &__copy { order: 0; }
  }

  &__index {
    @include label(500 12px/1 var(--mono), .1em);
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--ink-soft);
    margin-bottom: 18px;
  }

  &__letter {
    display: grid;
    place-items: center;
    width: 30px; height: 30px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 13px;
  }

  &__title {
    font: clamp(48px, 6vw, 88px)/.88 var(--display);
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  &__text,
  &__aside { color: var(--ink-soft); max-width: 46ch; }

  &__aside {
    margin-top: 14px;
    padding-left: 14px;
    border-left: 3px solid var(--accent);
    font-style: italic;
  }

  &__hint { margin-top: 22px; font: 500 13px/1.4 var(--mono); color: var(--accent); }

  &__facts { display: flex; gap: 28px; margin-top: 24px; }
  &__fact { @include label(12px/1.3 var(--mono), .06em); color: var(--ink-soft); }
  &__fact-num { display: block; font: 40px/1 var(--display); color: var(--ink); letter-spacing: 0; }
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;

  &__item {
    font: 12px/1 var(--mono);
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 99px;
  }
}

// shared demo chrome
.demo {
  min-width: 0;
  padding: clamp(12px, 2vw, 20px);
  border-radius: calc(var(--radius) + 6px);
  background: var(--paper-2);
  border: 1px solid var(--line);

  &--code {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    gap: 16px;

    @media (max-width: 1100px) { grid-template-columns: 1fr; }
  }

  &__bar { display: flex; flex-wrap: wrap; gap: 8px; justify-content: space-between; margin-bottom: 16px; }
  &__foot { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 14px; min-height: 20px; flex-wrap: wrap; }

  &__log {
    font: 12px/1.4 var(--mono);
    color: var(--ink-soft);

    &::before { content: '> '; color: var(--accent); }
  }
}

.seg {
  display: inline-flex;
  flex-wrap: wrap;
  padding: 3px;
  border-radius: 99px;
  background: var(--paper);
  border: 1px solid var(--line);

  &__btn {
    @include pill-button;

    &:hover { background: color-mix(in srgb, var(--ink) 8%, transparent); }
    &[aria-pressed='true'] { background: var(--ink); color: var(--paper); }

    // A leaderboard scaled down to phone width is unreadable, so don't offer it there
    &[data-size='728x90'] {
      @media (max-width: 620px) { display: none; }
    }
  }

  &--small &__btn { padding: 7px 10px; }
}

.btn {
  @include pill-button;
  border: 1px solid var(--line);
  background: var(--paper);

  &:hover,
  &[aria-pressed='true'] { background: var(--accent); border-color: var(--accent); color: #fff; }
}

// banner stage
.ad-viewport {
  position: relative;
  width: 100%;
  height: 520px;

  &__ad { transition: width .5s $ease, height .5s $ease, left .5s $ease, top .5s $ease; box-shadow: 0 30px 50px -28px #0007; }
}

.ad-dots {
  display: flex;
  gap: 6px;

  &__dot {
    width: 22px; height: 6px;
    padding: 0;
    border: 0;
    border-radius: 99px;
    background: color-mix(in srgb, var(--ink) 18%, transparent);
    cursor: pointer;
    transition: background .3s, width .3s;

    &.is-on { background: var(--accent); width: 36px; }
  }
}

// code viewer: always dark, like an editor
.code {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: var(--radius);
  overflow: hidden;
  background: #0f1a1b;
  color: #d6dedd;
  box-shadow: 0 30px 60px -30px #0008;

  &__tabs { display: flex; overflow-x: auto; background: #0a1213; scrollbar-width: none; }

  &__tab {
    flex: none;
    padding: 11px 14px;
    border: 0;
    border-right: 1px solid #ffffff0d;
    background: transparent;
    color: #7f8f8e;
    font: 12px/1 var(--mono);
    cursor: pointer;

    &[aria-selected='true'] { background: #0f1a1b; color: #fff; box-shadow: inset 0 2px 0 var(--accent); }
  }

  &__live { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-right: 7px; animation: pulse 2s infinite; }

  &__body {
    display: flex;
    height: 380px;
    overflow: auto;

    @media (max-width: 820px) {
      height: 280px;
    }
  }

  &__gutter {
    position: sticky;
    left: 0;
    margin: 0;
    padding: 16px 12px 16px 14px;
    font: 12.5px/1.6 var(--mono);
    text-align: right;
    color: #3f5354;
    background: #0f1a1b;
    user-select: none;
  }

  &__source {
    padding: 16px 20px 16px 0;

    &.is-flash { animation: code-flash .9s ease; }
  }

  &__foot { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 9px 14px; background: #0a1213; color: #7f8f8e; font: 11px/1.3 var(--mono); }
}
@keyframes code-flash { 0% { background: color-mix(in srgb, var(--accent) 25%, transparent); } 100% { background: transparent; } }

// Highlighted source, used by the code viewer and the mail's source view
.source { margin: 0; font: 12.5px/1.6 var(--mono); tab-size: 2; white-space: pre; color: #d6dedd; }

.token {
  &--comment { color: #62797a; font-style: italic; }
  &--string { color: #a5d6a7; }
  &--keyword { color: #ff9e7a; }
  &--number { color: #f5c26b; }
  &--var { color: #8ecbff; }
  &--prop { color: #c7b4ff; }
}

.remix {
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__title { font: 30px/1 var(--display); text-transform: uppercase; }
  &__row { display: grid; gap: 8px; }

  &__label {
    @include label(500 12px/1.3 var(--mono), .06em);
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }

  &__value { color: var(--accent); }
  &__range { width: 100%; accent-color: var(--accent); }
  &__reset { align-self: flex-start; }

  &__toast {
    min-height: 1.4em;
    font: 500 13px/1.4 var(--mono);
    color: var(--accent);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity .3s, transform .3s;

    &.is-on { opacity: 1; transform: none; }
  }
}

.swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &__item {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 2px solid var(--paper);
    box-shadow: 0 0 0 1px var(--line);
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;

    &:hover { transform: scale(1.12); }
    &[aria-pressed='true'] { box-shadow: 0 0 0 2px var(--ink); }
  }
}

// DEFINED thumbnails
.thumbs {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding-top: clamp(40px, 5vw, 64px);
  border-top: 1px solid var(--line);

  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }

  &__label { @include label(500 12px/1 var(--mono), .1em); grid-column: 1 / -1; color: var(--ink-soft); }
  &__item { display: grid; gap: 4px; text-decoration: none; }

  &__img {
    aspect-ratio: 16 / 10;
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: var(--radius);
    border: 1px solid var(--line);
    margin-bottom: 8px;
    transition: transform .5s $ease;
  }
  &__item:hover &__img { transform: translateY(-6px) rotate(-1deg); }

  &__name { font: 24px/1 var(--display); text-transform: uppercase; }
  &__meta { font: 11px/1.3 var(--mono); color: var(--ink-soft); }
}

// ---------- LAB ----------
.lab {
  border-top: 1px solid var(--line);

  &__row {
    display: grid;
    grid-template-columns: 1.1fr 1.6fr auto;
    gap: 16px;
    align-items: baseline;
    padding: 22px 4px;
    border-bottom: 1px solid var(--line);
    transition: padding .35s $ease-soft, color .2s;
    cursor: default;

    &:hover { padding-left: 20px; color: var(--accent); }
    @media (max-width: 720px) { grid-template-columns: 1fr auto; }
  }

  &__name { font: clamp(30px, 3.4vw, 44px)/1 var(--display); text-transform: uppercase; }

  &__what {
    color: var(--ink-soft);

    @media (max-width: 720px) { grid-column: 1 / -1; grid-row: 2; }
  }

  &__tech { @include label(12px/1 var(--mono), .06em); color: var(--ink-soft); }
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
  transition: transform .3s $ease-soft;

  &.is-on { transform: translate(-50%, -50%) scale(1); }
  @media (hover: none) { display: none; }
}

// ---------- ABOUT ----------
.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(32px, 4vw, 64px);

  @media (max-width: 960px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }

  &__col--story {
    @media (max-width: 960px) { grid-column: 1 / -1; }
  }

  &__label {
    font: 44px/1 var(--display);
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px dotted var(--ink);
  }

  &__off { margin-top: 24px; color: var(--ink-soft); }
}

.bars {
  display: grid;
  gap: 8px;

  &__item {
    @include label(20px/1.1 var(--display), .03em);
    position: relative;
    padding: 6px 10px;
    border-radius: 6px;
    background: color-mix(in srgb, var(--ink) 8%, transparent);
    color: #fff;
    isolation: isolate;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0 auto 0 0;
      width: var(--w);
      background: var(--c, var(--ink));
      border-radius: 6px;
      z-index: -1;
      transform-origin: left;
      transform: scaleX(0);
      transition: transform 1.1s $ease-soft;
    }

    // Stagger the bars filling up, 50ms apart
    @for $i from 2 through 9 {
      &:nth-child(#{$i})::before { transition-delay: ($i - 1) * .05s; }
    }

    &--dead { text-decoration: line-through; text-decoration-thickness: 2px; }
  }

  .is-visible &__item::before { transform: scaleX(1); }

  &__note { font: 10px/1 var(--mono); margin-left: 6px; text-decoration: none; opacity: .8; }

  &--now &__item {
    color: var(--paper);

    &::before { background: var(--ink); }
    &:first-child::before { background: var(--accent); }
  }
}

.timeline {
  display: grid;
  gap: 0;

  &__item {
    display: grid;
    grid-template-columns: 84px 1fr;
    gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid var(--line);

    &:nth-last-child(-n+2) { font-weight: 600; }
  }

  &__time { font: 12px/1.6 var(--mono); color: var(--accent); }
}

// ---------- CONTACT ----------
.contact {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(80px, 12vw, 160px) var(--gutter) clamp(56px, 8vw, 96px);

  &__big {
    display: inline-flex;
    align-items: flex-start;
    gap: .08em;
    margin: 20px 0 clamp(40px, 6vw, 72px);
    font: clamp(80px, 16vw, 240px)/.85 var(--display);
    text-transform: uppercase;
    text-decoration: none;
    transition: color .25s;

    &:hover { color: var(--accent); }
  }

  &__arrow { font-size: .45em; color: var(--accent); transition: transform .3s; }
  &__big:hover &__arrow { transform: translate(8px, -8px); }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
    border-top: 1px solid var(--line);
  }

  &__item {
    padding: 20px 0;
    border-bottom: 1px solid var(--line);
    display: grid;
    gap: 4px;
    min-width: 0;
  }

  &__label { @include label(12px/1 var(--mono)); color: var(--ink-soft); }

  &__link {
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    overflow-wrap: anywhere;

    &:hover { color: var(--accent); }
  }
}

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

// ---------- WOBBLE ----------
// Holds the SVG filter. Not display: none, or browsers drop the filter.
.fx { position: absolute; width: 0; height: 0; overflow: hidden; }

// Only filter while the slider is above 0: at 0 the type is crisp and costs nothing
.is-wobbly {
  .hero__hello, .hero__name, .section__title, .kind__title, .kind__fact-num, .stats__value, .contact__big { filter: url(#wobble); }
}

// ---------- REVEAL ----------
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .8s ease, transform .8s $ease-soft;

  &.is-visible { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
  .bars__item::before { transform: none; }
}
`,W=`import { highlight } from './highlight.js'
import mainSrc from './main.js?raw'
// import bannerSrc from './banner.js?raw'
// import bannerScssSrc from './banner.scss?raw'
// import mailSrc from './mail.js?raw'
import styleSrc from './style.scss?raw'
import siteSrc from './site.js?raw'

const DEFAULTS = { accent: '#ff5a1f', radius: 14, marquee: 45, wobble: 4, font: 'bebas' }

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
  --wobble: \${t.wobble}; /* feDisplacementMap scale */
  --display: \${FONTS[t.font].css};
}\`

const root = document.querySelector('[data-site]')

if (root) {
  const tokens = { ...DEFAULTS }
  const html = document.documentElement
  const code = root.querySelector('[data-code]')
  const gutter = root.querySelector('.code__gutter')
  const stats = root.querySelector('[data-code-stats]')
  const tabsEl = root.querySelector('.code__tabs')
  const toast = root.querySelector('[data-toast]')
  const wobbleMap = document.querySelector('[data-wobble-map]')

  // Reduced motion: keep the distortion, stop the boiling
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('[data-wobble-anim]')?.remove()
  }

  const files = [
    { name: 'tokens.css', lang: 'css', src: () => tokensSrc(tokens), live: true },
    { name: 'main.js', lang: 'js', src: () => mainSrc },
    // { name: 'banner.js', lang: 'js', src: () => bannerSrc },
    // { name: 'banner.scss', lang: 'scss', src: () => bannerScssSrc },
    // { name: 'mail.js', lang: 'js', src: () => mailSrc },
    { name: 'site.js', lang: 'js', src: () => siteSrc, note: 'this viewer' },
    { name: 'style.scss', lang: 'scss', src: () => styleSrc },
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
    tab.className = 'code__tab'
    tab.setAttribute('role', 'tab')
    tab.innerHTML = file.live ? \`<i class="code__live"></i>\${file.name}\` : file.name
    if (file.note) tab.title = file.note
    tab.addEventListener('click', () => select(file))
    tabsEl.append(tab)
    return tab
  })

  const select = (file) => {
    active = file
    tabs.forEach((t, i) => t.setAttribute('aria-selected', files[i] === file))
    render()
    root.querySelector('.code__body').scrollTop = 0
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
    html.style.setProperty('--wobble', tokens.wobble)
    wobbleMap.setAttribute('scale', tokens.wobble)
    html.classList.toggle('is-wobbly', tokens.wobble > 0)
    root.querySelector('[data-out="radius"]').textContent = \`\${tokens.radius}px\`
    root.querySelector('[data-out="marquee"]').textContent = \`\${tokens.marquee}s\`
    root.querySelector('[data-out="wobble"]').textContent = tokens.wobble
    swatches.forEach((s) => s.setAttribute('aria-pressed', s.dataset.color === tokens.accent))
    root.querySelectorAll('[data-font]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.font === tokens.font))
    if (key && active !== files[0]) select(files[0])
    else render(Boolean(key))
  }

  const swatches = SWATCHES.map(([color, name]) => {
    const s = document.createElement('button')
    s.type = 'button'
    s.className = 'swatches__item'
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
      if (input.dataset.token === 'wobble') say(tokens.wobble >= 18 ? 'Hand-lettered, after Friday drinks.' : '')
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
`,L={accent:"#ff5a1f",radius:14,marquee:45,wobble:4,font:"bebas"},G=[["#ff5a1f","Signal orange"],["#4a8bc9","Photoshop blue"],["#f07f22","Illustrator orange"],["#b52f73","InDesign pink"],["#e0262a","Flash red, RIP"],["#5b6aa8","PHP purple"]],T={bebas:{css:"'Bebas Neue', Impact, sans-serif",toast:""},serif:{css:"Georgia, 'Times New Roman', serif",toast:"Very editorial. Very Outlook, too."},comic:{css:"'Comic Sans MS', 'Comic Neue', cursive",toast:"You asked for this."}},X=n=>`/* Live: edited from the remix panel */
:root {
  --accent: ${n.accent};
  --radius: ${n.radius}px;
  --marquee-speed: ${n.marquee}s;
  --wobble: ${n.wobble}; /* feDisplacementMap scale */
  --display: ${T[n.font].css};
}`,c=document.querySelector("[data-site]");if(c){const n={...L},s=document.documentElement,p=c.querySelector("[data-code]"),b=c.querySelector(".code__gutter"),a=c.querySelector("[data-code-stats]"),r=c.querySelector(".code__tabs"),i=c.querySelector("[data-toast]"),o=document.querySelector("[data-wobble-map]");matchMedia("(prefers-reduced-motion: reduce)").matches&&document.querySelector("[data-wobble-anim]")?.remove();const f=[{name:"tokens.css",lang:"css",src:()=>X(n),live:!0},{name:"main.js",lang:"js",src:()=>Y},{name:"site.js",lang:"js",src:()=>W,note:"this viewer"},{name:"style.scss",lang:"scss",src:()=>U}];let u=f[0];const _=e=>e.split(`
`).length,k=f.slice(1).reduce((e,t)=>e+_(t.src()),0);c.querySelector("[data-code-total]").textContent=`${k} lines · 0 frameworks`;const w=e=>{const t=u.src();p.innerHTML=I(t,u.lang),b.textContent=Array.from({length:_(t)},(d,D)=>D+1).join(`
`),a.textContent=`${u.name} · ${_(t)} lines · ${(new Blob([t]).size/1024).toFixed(1)} kB`,e&&(p.parentElement.classList.remove("is-flash"),p.offsetWidth,p.parentElement.classList.add("is-flash"))},q=f.map(e=>{const t=document.createElement("button");return t.type="button",t.className="code__tab",t.setAttribute("role","tab"),t.innerHTML=e.live?`<i class="code__live"></i>${e.name}`:e.name,e.note&&(t.title=e.note),t.addEventListener("click",()=>y(e)),r.append(t),t}),y=e=>{u=e,q.forEach((t,d)=>t.setAttribute("aria-selected",f[d]===e)),w(),c.querySelector(".code__body").scrollTop=0},g=e=>{i.textContent=e,i.classList.toggle("is-on",!!e)},h=e=>{s.style.setProperty("--accent",n.accent),s.style.setProperty("--radius",`${n.radius}px`),s.style.setProperty("--marquee-speed",`${n.marquee}s`),s.style.setProperty("--display",T[n.font].css),s.style.setProperty("--wobble",n.wobble),o.setAttribute("scale",n.wobble),s.classList.toggle("is-wobbly",n.wobble>0),c.querySelector('[data-out="radius"]').textContent=`${n.radius}px`,c.querySelector('[data-out="marquee"]').textContent=`${n.marquee}s`,c.querySelector('[data-out="wobble"]').textContent=n.wobble,l.forEach(t=>t.setAttribute("aria-pressed",t.dataset.color===n.accent)),c.querySelectorAll("[data-font]").forEach(t=>t.setAttribute("aria-pressed",t.dataset.font===n.font)),e&&u!==f[0]?y(f[0]):w(!!e)},l=G.map(([e,t])=>{const d=document.createElement("button");return d.type="button",d.className="swatches__item",d.dataset.color=e,d.style.background=e,d.title=t,d.setAttribute("aria-label",t),d.addEventListener("click",()=>{n.accent=e,g(t==="Flash red, RIP"?"Flash red. A moment of silence, please.":`${t} it is.`),h("accent")}),c.querySelector("[data-swatches]").append(d),d});c.querySelectorAll("input[data-token]").forEach(e=>{e.addEventListener("input",()=>{n[e.dataset.token]=Number(e.value),e.dataset.token==="marquee"&&g(n.marquee<12?"Brands at warp speed.":""),e.dataset.token==="radius"&&g(n.radius===0?"Very Outlook 2016 of you.":""),e.dataset.token==="wobble"&&g(n.wobble>=18?"Hand-lettered, after Friday drinks.":""),h(e.dataset.token)})}),c.querySelectorAll("[data-font]").forEach(e=>{e.addEventListener("click",()=>{n.font=e.dataset.font,g(T[n.font].toast),h("font")})}),c.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(n,L),c.querySelectorAll("input[data-token]").forEach(e=>e.value=L[e.dataset.token]),g("Back to factory settings."),h("reset")}),y(f[0]),h()}const K=["Amazon","Belfius","bpost","Center Parcs","Child Focus","Danone","KIA","Mazda","MediaMarkt","Nationale Loterij","NN","Pioneer","Q8","Randstad","Rode Kruis","Škoda","Telenet","Toyota","Vlaamse Overheid"],Q=document.querySelector("[data-clients]"),N=K.map(n=>`<span class="marquee__item">${n}</span><i class="marquee__sep">✦</i>`).join("");Q.innerHTML=N+N;const Z=document.querySelectorAll("[data-clock]"),O=()=>{const n=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Brussels"}).format(new Date);Z.forEach(s=>s.textContent=n)};O();setInterval(O,3e4);document.querySelector("[data-year]").textContent=new Date().getFullYear();const B=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),B.unobserve(s.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(n=>B.observe(n));const v=document.createElement("div");v.className="lab-cursor";document.body.append(v);let F=0,M=0,$=0,C=0;const P=()=>{$+=(F-$)*.18,C+=(M-C)*.18,v.style.left=`${$}px`,v.style.top=`${C}px`,requestAnimationFrame(P)};P();window.addEventListener("pointermove",n=>{F=n.clientX,M=n.clientY});document.querySelectorAll(".lab__row").forEach(n=>{n.addEventListener("pointerenter",()=>{v.textContent=n.querySelector(".lab__tech").textContent,v.classList.add("is-on")}),n.addEventListener("pointerleave",()=>v.classList.remove("is-on"))});
