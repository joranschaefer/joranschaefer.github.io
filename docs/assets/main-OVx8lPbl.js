import"./modulepreload-polyfill-B5Qt9EMX.js";const R=document.documentElement,N=document.querySelector("[data-boot]");if(N&&R.classList.contains("is-booting")){R.dataset.boot="running";const n=N.querySelector("[data-boot-log]"),i=document.createElement("span");i.className="boot__cursor";const p="cb467d1a073f44cf4c66088a0151cef28298ccea19040edff18845fea48ee68d",d=matchMedia("(prefers-reduced-motion: reduce)").matches,o=(c,b)=>`<span class="boot__${c}">${b}</span>`,y=o("green","➜"),r=Math.round(performance.now()),w=[[`${o("green","joran@schaefer")} ${o("magenta","MINGW64")} ${o("yellow","~/Herd/joranschaefer.github.io")} ${o("cyan","(main)")}`,0],["$ sudo npm run dev",250,!0]],h=[["",0],[o("dim","> schaeferj@1.0.1 dev"),0],[o("dim","> vite"),450],["",0],[`  ${o("green",`${o("strong","VITE")} v7.3.6`)}  ${o("dim","ready in")} ${o("strong",r)} ms`,200],["",0],[`  ${y}  ${o("strong","Local")}:   ${o("cyan",`http://localhost:${o("strong","5173")}/`)}`,60],[`  ${y}  ${o("strong","Network")}: ${o("dim","use")} ${o("strong","--host")} ${o("dim","to expose")}`,60],[`  ${y}  ${o("dim","press")} ${o("strong","h + enter")} ${o("dim","to show help")}`,600],["",0],[o("dim","[vite] connecting..."),350],[o("dim","[vite] connected."),400]];let t=d;const S=c=>t?Promise.resolve():new Promise(b=>setTimeout(b,c)),a=[...document.body.children].filter(c=>c!==N&&c.tagName!=="SCRIPT");a.forEach(c=>c.inert=!0);const g=c=>{n.insertAdjacentHTML("beforeend",`${c}
`),n.append(i)},m=async c=>{const b=document.createElement("span");n.append(b,i);for(const x of c){if(t){b.textContent=c;break}b.textContent+=x,await S(26)}b.after(`
`)},f=async c=>{for(const[b,x,l]of c)l?await m(b):g(b),await S(x)},u=async c=>{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(c));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")},E=async c=>!window.crypto?.subtle||await u(c)===p,C=()=>new Promise(c=>{const b=document.createElement("label");b.className="boot__prompt",b.textContent="[sudo] Please enter the password: ";const x=document.createElement("input");x.className="boot__input",x.type="password",x.autocomplete="off",x.spellcheck=!1,x.setAttribute("aria-label","Wachtwoord"),b.append(x),i.remove(),n.append(b),x.focus();const l=()=>x.focus();N.addEventListener("pointerup",l),x.addEventListener("keydown",async v=>{if(v.key==="Enter"){if(v.preventDefault(),x.disabled=!0,N.removeEventListener("pointerup",l),b.after(`
`),await E(x.value))return c();s++,s%3?g("Sorry, try again."):g(`sudo: 3 incorrect password attempts
${o("dim",`♪ ${e[(s/3-1)%e.length]}`)}`),c(C())}})}),e=["Never gonna give you up.","Never gonna let you down.","Never gonna run around and desert you."];let s=0;const A=()=>{try{sessionStorage.setItem("unlocked","1")}catch{}a.forEach(c=>c.inert=!1),N.classList.add("is-off"),setTimeout(()=>R.classList.remove("is-booting"),d?0:750)},k=async()=>{await f(w),await C(),t=d,await f(h),A()},B=c=>{c.target.closest?.(".boot__prompt, .boot__link")||(t=!0)};window.addEventListener("keydown",B),N.addEventListener("pointerdown",B),k()}const X=520,L=document.querySelector("[data-banner]");if(L){const n=L.querySelector(".ad-viewport__ad"),i=L.querySelector(".ad-viewport"),p=L.querySelector("[data-log]");let d=[300,600];const o=()=>{const[r,w]=d,h=i.clientWidth,t=Math.min(1,h/r,X/w);n.style.transform=`scale(${t})`,n.style.left=`${(h-r*t)/2}px`,n.style.top=`${(X-w*t)/2}px`};L.querySelectorAll("[data-size]").forEach(r=>{r.addEventListener("click",()=>{L.querySelectorAll("[data-size]").forEach(w=>w.setAttribute("aria-pressed",w===r)),d=r.dataset.size.split("x").map(Number),n.style.width=`${d[0]}px`,n.style.height=`${d[1]}px`,p.textContent=`served as ${r.dataset.size}`,o()})}),L.querySelector("[data-replay]").addEventListener("click",()=>{n.contentWindow?.postMessage({cmd:"replay"},location.origin)}),window.addEventListener("message",r=>{r.source===n.contentWindow&&(r.data.banner&&(p.textContent=r.data.banner),r.data.clickTag&&(p.textContent=`window.open(clickTag) → ${r.data.clickTag}`,setTimeout(()=>document.querySelector("#contact").scrollIntoView({behavior:"smooth"}),700)))}),new ResizeObserver(o).observe(i),o();const y=new IntersectionObserver(([r])=>{r.isIntersecting&&(n.src=n.dataset.src,y.disconnect())},{threshold:.4});y.observe(L)}const on={js:[/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")|\b(import|from|const|let|function|return|if|else|for|of|new|async|await|export|default|true|false|null|this|break)\b|\b(\d+(?:\.\d+)?)\b/g,["comment","string","keyword","number"]],css:[/(\/\*[\s\S]*?\*\/)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,["comment","string","number","var","keyword","prop","number"]],scss:[/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+|\$[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,["comment","string","number","var","keyword","prop","number"]],html:[/(<!--[\s\S]*?-->|<!\[endif\]-->)|(<\/?[\w:]+|\/?>)|([\w:-]+)(?==)|("[^"]*")/g,["comment","keyword","prop","string"]]},H=n=>n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function M(n,i){const[p,d]=on[i];let o="",y=0;for(const r of n.matchAll(p)){const w=r.slice(1).findIndex(h=>h!==void 0);o+=H(n.slice(y,r.index)),o+=`<span class="token token--${d[w]}">${H(r[0])}</span>`,y=r.index+r[0].length}return o+H(n.slice(y))}const j=`<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml"
xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
lang="nl-BE" xml:lang="nl-BE">
<head>
  <title>Cv · Joran Schaefer, creative developer</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex"/>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no"/>
  <meta name="color-scheme" content="light dark"/>
  <meta name="supported-color-schemes" content="light dark"/>

  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Instrument+Sans:wght@400;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet"/>
  <!--<![endif]-->

<style>

/* BOILERPLATE STYLES */
#outlook a{padding:0;}
.ReadMsgBody{width:100%;} .ExternalClass{width:100%;}
.ExternalClass, .ExternalClass span, .ExternalClass td, .ExternalClass div {line-height: 100%;}
body, table, td, a{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;}
table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;}
img {-ms-interpolation-mode:bicubic; display: block; border:0; height:auto; line-height:100%; outline:none; text-decoration:none;}
body {height:100% !important; margin:0 !important; padding:0 !important; width:100% !important;}
a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; }

/* MAIN STYLES */
td {
  font-family: 'Instrument Sans', Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #17292b;
}

a {color: #17292b;}

.btn:hover {
  opacity: .9 !important;
}

@media only screen and (max-width: 600px) {
  .container {
    width: 100% !important;
  }
  .none {
    display: none !important;
    visibility: hidden !important;
  }
  .block, .fullwidth {
    width: 100% !important;
    max-width: 100% !important;
  }
  .block-inner {
    width: 90% !important;
  }

  .mb-pt-0 { padding-top: 0 !important; }
  .mb-pb-12 { padding-bottom: 12px !important; }
  .mb-pb-28 { padding-bottom: 28px !important; }
  .mb-py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }

  .mb__comp--hero {
    font-size: 68px !important;
    line-height: 58px !important;
  }
  .mb__comp--hero-bg { background-image: radial-gradient(circle at 100% 0, #17292b 0 40px, transparent 41px) !important; }
  .mb__comp--date { width: 84px !important; font-size: 22px !important; }
  .mb__comp--tile { display: block !important; width: 100% !important; box-sizing: border-box; }
  .mb__comp--gap { display: block !important; width: 100% !important; height: 8px !important; }
  .mb__comp--cta-title { font-size: 38px !important; line-height: 36px !important; }
}

@media (prefers-color-scheme: dark) {
  .inbox, .inbox__wrap { background: #101a1b !important; }
  .email { background: #182627 !important; }
  .email__line { border-color: #34403f !important; }
  .email__rule { background: #eae6dc !important; }
  .email__card-title, .email__text { color: #eae6dc !important; }
  .email__card { background: #101a1b !important; }
  .email__card-text, .email__muted { color: #9aa6a5 !important; }
  .email__track { background: #2d3535 !important; }
  .email__chip { color: #eae6dc !important; background: #101a1b !important; border-color: #101a1b !important; }
  .email__tier--ink { background: #eae6dc !important; color: #101a1b !important; }
  .email__tier--soft { background: #2d3535 !important; color: #eae6dc !important; }
  .email__cta { background-color: #eae6dc !important; }
  .email__cta-title { color: #101a1b !important; }
  .email__foot { background-color: #182627 !important; border-color: #34403f !important; }
}

[data-ogsc] .inbox, [data-ogsc] .inbox__wrap { background: #101a1b !important; }
[data-ogsc] .email { background: #182627 !important; }
[data-ogsc] .email__line { border-color: #34403f !important; }
[data-ogsc] .email__rule { background: #eae6dc !important; }
[data-ogsc] .email__card-title, [data-ogsc] .email__text { color: #eae6dc !important; }
[data-ogsc] .email__card { background: #101a1b !important; }
[data-ogsc] .email__card-text, [data-ogsc] .email__muted { color: #9aa6a5 !important; }
[data-ogsc] .email__track { background: #2d3535 !important; }
[data-ogsc] .email__chip { color: #eae6dc !important; background: #101a1b !important; border-color: #101a1b !important; }
[data-ogsc] .email__tier--ink { background: #eae6dc !important; color: #101a1b !important; }
[data-ogsc] .email__tier--soft { background: #2d3535 !important; color: #eae6dc !important; }
[data-ogsc] .email__cta { background-color: #eae6dc !important; }
[data-ogsc] .email__cta-title { color: #101a1b !important; }
[data-ogsc] .email__foot { background-color: #182627 !important; border-color: #34403f !important; }
</style>

<!--[if mso]>
<style>
  * { font-family: Arial, Helvetica, sans-serif !important; }
  .email__logo { font-size: 26px !important; font-weight: bold !important; }
  .email__title { font-size: 56px !important; line-height: 56px !important; font-weight: bold !important; }
  .email__heading { font-size: 22px !important; line-height: 26px !important; font-weight: bold !important; }
  .email__year { font-size: 18px !important; line-height: 22px !important; font-weight: bold !important; }
  .email__tier { font-size: 14px !important; font-weight: bold !important; }
  .email__cta-title { font-size: 30px !important; line-height: 34px !important; font-weight: bold !important; }
</style>
<![endif]-->

<!--[if gte mso 9]><xml>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
 </o:OfficeDocumentSettings>
</xml><![endif]-->

</head>

<body bgcolor="#f2efe8" class="inbox">
  <div style="display:none;font-size:1px;color:#f2efe8;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Such wow, much amaze, very skill
  </div>
  <!-- PREHEADER: DO NOT TOUCH PLIS :3 -->
  <div style="display: none; max-height: 0px; overflow: hidden">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>

  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f2efe8" class="inbox__wrap">
    <tr>
      <td align="center" style="padding: 0 0 24px;" class="inbox__pad">

        <table width="560" border="0" cellspacing="0" cellpadding="0" align="center" class="container">
          <tbody>
            <tr>
              <td align="center" style="font-size: 12px; line-height: 18px; color: #4d5a5b; padding: 10px 0;"><a href="https://joranschaefer.github.io/src/mail/mail.html" style="color: #4d5a5b; text-decoration: underline;">Klik hier</a> als je deze e-mail niet kan lezen.</td>
            </tr>
          </tbody>
        </table>

        <table width="560" border="0" cellspacing="0" cellpadding="0" align="center" class="container email" bgcolor="#ffffff">
          <tr>
            <td>

              <!-- HERO -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td class="email__hero mb__comp--hero-bg" bgcolor="#ff5a1f" style="padding: 24px 0 36px; background-color: #ff5a1f; background-image: radial-gradient(circle at 88% 34%, #17292b 0 52px, transparent 53px);">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td class="email__logo" style="padding-bottom: 40px; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">&lt;/JS<span style="color: #f2efe8;">.</span>&gt;</td>
                        </tr>
                        <tr>
                          <td class="email__title mb__comp--hero" style="padding-bottom: 16px; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 104px; line-height: 88px; color: #17292b; mso-line-height-rule: exactly;">Joran<br/> Schaefer</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- PROFILE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 40px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td colspan="2" style="padding-bottom: 4px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Over mij<span style="color: #ff5a1f;">.</span></td>
                                <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/01</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <!-- Details -->
                        <tr>
                          <td width="112" valign="top" class="email__muted" style="padding: 12px 0; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">Naam</td>
                          <td valign="top" class="email__text" style="padding: 12px 0; font-size: 15px; line-height: 20px; color: #17292b;">Joran Schaefer</td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__muted email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">Geboren</td>
                          <td valign="top" class="email__text email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-size: 15px; line-height: 20px; color: #17292b;">11 april 1994, Wilrijk</td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__muted email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">Woonplaats</td>
                          <td valign="top" class="email__text email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-size: 15px; line-height: 20px; color: #17292b;">Kontich, België</td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__muted email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">Rijbewijs</td>
                          <td valign="top" class="email__text email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-size: 15px; line-height: 20px; color: #17292b;">[B]</td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__muted email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">E-mail</td>
                          <td valign="top" class="email__text email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-size: 15px; line-height: 20px; color: #17292b;"><a class="email__text" href="mailto:joran.schaefer@gmail.com" style="color: #17292b; text-decoration: underline;">joran.schaefer@gmail.com</a></td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__muted email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 20px; letter-spacing: 1px; text-transform: uppercase; color: #4d5a5b;">Gsm</td>
                          <td valign="top" class="email__text email__line" style="padding: 12px 0; border-top: 1px solid #dcdfdf; font-size: 15px; line-height: 20px; color: #17292b;"><a class="email__text" href="tel:+32470928716" style="color: #17292b; text-decoration: none;">+32 470 92 87 16</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- EXPERIENCE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 40px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td colspan="2" style="padding-bottom: 4px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Ervaring<span style="color: #ff5a1f;">.</span></td>
                                <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/02</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__year mb__comp--date" style="padding: 14px 0; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">2015</td>
                          <td valign="top" style="padding: 14px 0;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">Stagiair</p>
                            <p class="email__muted" style="margin: 0; font-size: 13.5px; line-height: 20px; color: #4d5a5b;">These Days · Antwerpen</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__line email__year mb__comp--date" style="padding: 14px 0; border-top: 1px solid #dcdfdf; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">2015 - nu</td>
                          <td valign="top" class="email__line" style="padding: 14px 0; border-top: 1px solid #dcdfdf;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">Creative developer</p>
                            <p class="email__muted" style="margin: 0; font-size: 13.5px; line-height: 20px; color: #4d5a5b;">VML (These Days) · Antwerpen</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__line email__year mb__comp--date" style="padding: 14px 0; border-top: 1px solid #dcdfdf; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">Weekends</td>
                          <td valign="top" class="email__line" style="padding: 14px 0; border-top: 1px solid #dcdfdf;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">Parttime cardetailer</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- EDUCATION -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 32px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td colspan="2" style="padding-bottom: 4px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Opleiding<span style="color: #ff5a1f;">.</span></td>
                                <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/03</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__year mb__comp--date" style="padding: 14px 0; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">2006–11</td>
                          <td valign="top" style="padding: 14px 0;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">Grafische Technieken</p>
                            <p class="email__muted" style="margin: 0; font-size: 13.5px; line-height: 20px; color: #4d5a5b;">TSM Mechelen</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__line email__year mb__comp--date" style="padding: 14px 0; border-top: 1px solid #dcdfdf; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">2010–12</td>
                          <td valign="top" class="email__line" style="padding: 14px 0; border-top: 1px solid #dcdfdf;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">Publiciteits vormgeving</p>
                            <p class="email__muted" style="margin: 0; font-size: 13.5px; line-height: 20px; color: #4d5a5b;">TSM Mechelen</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="112" valign="top" class="email__line email__year mb__comp--date" style="padding: 14px 0; border-top: 1px solid #dcdfdf; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 28px; line-height: 26px; color: #ff5a1f; mso-line-height-rule: exactly;">2013–15</td>
                          <td valign="top" class="email__line" style="padding: 14px 0; border-top: 1px solid #dcdfdf;">
                            <p class="email__text" style="margin: 0; font-size: 17px; line-height: 22px; font-weight: 600; color: #17292b;">SENSE Web Development</p>
                            <p class="email__muted" style="margin: 0; font-size: 13.5px; line-height: 20px; color: #4d5a5b;">St. Maria Antwerpen</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- HARD SKILLS -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 32px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td style="padding-bottom: 14px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Hard skills<span style="color: #ff5a1f;">.</span></td>
                                <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/04</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td class="email__card" bgcolor="#f2efe8" style="padding: 20px; border-radius: 20px;">
                            <table width="216" border="0" cellspacing="0" cellpadding="0" align="left" class="block" style="float: left; width: 100%; max-width: 216px;">
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">HTML mail development</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="95%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">Creative display ads</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="95%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">HTML &amp; CSS / SCSS</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="92%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">JavaScript · GSAP</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="86%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td class="mb-pb-12">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">Photoshop · Illustrator · Figma</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="85%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                            </table>
                            <!--[if mso]></td><td style="padding: 18px 18px 18px 0;" bgcolor="#f2efe8"><![endif]-->
                            <table width="216" border="0" cellspacing="0" cellpadding="0" align="right" class="block" style="float: right; width: 100%; max-width: 216px;">
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">PHP · Laravel · Symphony</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="62%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">Node.js · Vue · React</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="58%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                              <tr><td style="padding-bottom: 12px;">
                                <p class="email__text" style="margin: 0 0 4px; font-size: 13px; line-height: 18px; color: #17292b;">Three.js / WebGL</p>
                                <table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="55%" height="8" bgcolor="#ff5a1f" style="height: 8px; border-radius: 99px 0 0 99px; font-size: 0; line-height: 0;">&nbsp;</td><td height="8" bgcolor="#e8e3d8" class="email__track" style="height: 8px; border-radius: 0 99px 99px 0; font-size: 0; line-height: 0;">&nbsp;</td></tr></table>
                              </td></tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- SOFT SKILLS & LANGUAGES -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 40px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td>
                            <table width="246" border="0" cellspacing="0" cellpadding="0" align="left" class="block mb-pb-28" style="float: left; width: 100%; max-width: 246px;">
                              <tr>
                                <td style="padding-bottom: 14px;">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Soft skills<span style="color: #ff5a1f;">.</span></td>
                                      <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                      <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/05</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-family: 'JetBrains Mono', Courier, monospace; font-size: 12px; line-height: 12px;">
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:TEAMPLAYER:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:PROBLEEMOPLOSSEND:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:SOCIAAL:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:COMMUNICATIEF:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:LEERGIERIG:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:PROACTIEF:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:VERANTWOORDELIJK:.</span>
                                  <span class="email__chip" style="display: inline-block; margin: 0 2px 6px 0; padding: 6px 10px; background: #f2efe8; border: 1px solid #f2efe8; border-radius: 99px; color: #17292b;">.:FLEXIBEL:.</span>
                                </td>
                              </tr>
                            </table>

                            <!--[if mso]></td><td><![endif]-->

                            <!-- LANG -->
                            <table width="246" border="0" cellspacing="0" cellpadding="0" align="right" class="block" style="float: right; width: 100%; max-width: 246px;">
                              <tr>
                                <td colspan="2" style="padding-bottom: 14px;">
                                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                      <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Talen<span style="color: #ff5a1f;">.</span></td>
                                      <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                      <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/06</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td class="email__text" style="padding-bottom: 8px; font-size: 14px; line-height: 20px; font-weight: 600; color: #17292b;">&lt;/Nederlands&gt;</td>
                                <td width="76" style="padding-bottom: 8px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 20px; line-height: 28px; letter-spacing: 1px; color: #17292b; mso-line-height-rule: exactly;">PRO</td></tr></table></td>
                              </tr>
                              <tr>
                                <td class="email__text" style="padding-bottom: 8px; font-size: 14px; line-height: 20px; font-weight: 600; color: #17292b;">&lt;/Engels&gt;</td>
                                <td width="76" style="padding-bottom: 8px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 20px; line-height: 28px; letter-spacing: 1px; color: #17292b; mso-line-height-rule: exactly;">6-7</td></tr></table></td>
                              </tr>
                              <tr>
                                <td class="email__text" style="padding-bottom: 8px; font-size: 14px; line-height: 20px; font-weight: 600; color: #17292b;">&lt;/Frans&gt;</td>
                                <td width="76" style="padding-bottom: 8px;"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 20px; line-height: 28px; letter-spacing: 1px; color: #17292b; mso-line-height-rule: exactly;">NOOB</td></tr></table></td>
                              </tr>
                              <tr>
                                <td class="email__text" style="font-size: 14px; line-height: 20px; font-weight: 600; color: #17292b;">&lt;/L33tSp3ak&gt;</td>
                                <td width="76"><table border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 20px; line-height: 28px; letter-spacing: 1px; color: #17292b; mso-line-height-rule: exactly;">1337</td></tr></table></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- HOBBY'S -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td style="padding: 40px 0 0;">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tbody>
                        <tr>
                          <td colspan="7" style="padding-bottom: 14px;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="email__text email__heading" style="padding-right: 12px; white-space: nowrap; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 34px; line-height: 34px; color: #17292b; mso-line-height-rule: exactly;">Hobby's<span style="color: #ff5a1f;">.</span></td>
                                <td width="100%" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td height="1" bgcolor="#17292b" class="email__rule" style="height: 1px; font-size: 0; line-height: 0;">&nbsp;</td></tr></table></td>
                                <td style="padding-left: 12px; white-space: nowrap; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 34px; color: #ff5a1f;">/07</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td width="23.5%" class="email__card email__text mb__comp--tile" bgcolor="#f2efe8" style="padding: 12px 14px; border-radius: 14px; font-size: 13px; line-height: 18px; font-weight: 600; color: #17292b;" align="center"><span style="font-size: 22px; line-height: 30px;">🎮</span> <br class="none"/>Computer & Gaming</td>
                          <td width="2%" class="mb__comp--gap" style="font-size: 0; line-height: 0;">&nbsp;</td>
                          <td width="23.5%" class="email__card email__text mb__comp--tile" bgcolor="#f2efe8" style="padding: 12px 14px; border-radius: 14px; font-size: 13px; line-height: 18px; font-weight: 600; color: #17292b;" align="center"><span style="font-size: 22px; line-height: 30px;">🚗</span> <br class="none"/>Oldtimers</td>
                          <td width="2%" class="mb__comp--gap" style="font-size: 0; line-height: 0;">&nbsp;</td>
                          <td width="23.5%" class="email__card email__text mb__comp--tile" bgcolor="#f2efe8" style="padding: 12px 14px; border-radius: 14px; font-size: 13px; line-height: 18px; font-weight: 600; color: #17292b;" align="center"><span style="font-size: 22px; line-height: 30px;">🧽</span> <br class="none"/>Cardetailing</td>
                          <td width="2%" class="mb__comp--gap" style="font-size: 0; line-height: 0;">&nbsp;</td>
                          <td width="23.5%" class="email__card email__text mb__comp--tile" bgcolor="#f2efe8" style="padding: 12px 14px; border-radius: 14px; font-size: 13px; line-height: 18px; font-weight: 600; color: #17292b;" align="center"><span style="font-size: 22px; line-height: 30px;">🎧</span> <br class="none"/>Muziek</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                <tr>
                  <td height="48" style="height: 48px; font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
                <tr>
                  <td class="email__cta" align="center" bgcolor="#17292b" style="padding: 48px 0 44px; background-color: #17292b; background-image: radial-gradient(circle at 0 100%, #ff5a1f 0 64px, transparent 65px);">
                    <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                      <tr>
                        <td align="center" style="padding-bottom: 8px; font-family: 'JetBrains Mono', Courier, monospace; font-size: 11px; line-height: 14px; letter-spacing: 2px; text-transform: uppercase; color: #ff5a1f;">Nog altijd aan het lezen?</td>
                      </tr>
                      <tr>
                        <td align="center" class="email__cta-title mb__comp--cta-title" style="padding-bottom: 24px; font-family: 'Bebas Neue', Impact, Arial, sans-serif; font-size: 52px; line-height: 48px; color: #f2efe8; mso-line-height-rule: exactly;">Klinkt dit als iemand<br/> voor jouw team<span style="color: #ff5a1f;">?</span></td>
                      </tr>
                      <tr>
                        <td align="center">
                          <!-- Button -->
                          <table border="0" cellspacing="0" cellpadding="0" align="center">
                            <tr>
                              <td align="center">
                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                  href="mailto:joran.schaefer@gmail.com"
                                  style="height:48px;v-text-anchor:middle;width:200px;"
                                  arcsize="50%" fillcolor="#ff5a1f" stroke="f">
                                  <center style="color:#ffffff;font-family:Arial,sans-serif;
                                    font-size:16px;font-weight:bold;">Laten we babbelen</center>
                                </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-- -->
                                <a class="btn email__btn" href="mailto:joran.schaefer@gmail.com?subject=Even%20babbelen" target="_blank"
                                  style="background:#ff5a1f;border-radius:99px;color:#ffffff;
                                  display:inline-block;font-family:'Instrument Sans',Arial,sans-serif;
                                  font-size:16px;font-weight:600;line-height:48px;width:200px;
                                  text-align:center;text-decoration:none;">Laten we babbelen</a>
                                <!--<![endif]-->
                              </td>
                            </tr>
                          </table>
                          <!-- /Button -->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- FOOTER -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#17292b">
                <tbody>
                  <tr>
                    <td class="email__foot" bgcolor="#17292b" style="padding: 22px 0 25px; border-top: 1px solid #344344;">
                      <table width="504" border="0" cellspacing="0" cellpadding="0" align="center" class="block-inner">
                        <tbody>
                          <tr>
                            <td align="left" style="font-size: 11px; line-height: 20px; color: #a9b5b4;">
                              <p style="margin: 0 0 8px;">Krijg je liever geen cv's meer in je inbox? Dan kan je <a href="https://joranschaefer.github.io/#contact" style="color: #f2efe8;">hier uitschrijven</a>.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,rn=".inbox,.inbox__wrap,.email,.email__card,.email__chip{transition:background .3s,color .3s,border-radius .3s}[data-client=outlook] .inbox,[data-client=outlook] .inbox__wrap{background:#f3f2f1!important}[data-client=outlook] .email *{border-radius:0!important;background-image:none!important}[data-client=outlook] .email__cta{padding-bottom:44px!important}[data-client=outlook] .email .email__btn{border-radius:99px!important}.email__logo,.email__hero,.email__card,.email__cta{position:relative}.mail-pin{position:absolute;z-index:2;top:6px;right:6px;padding:4px 8px;border-radius:4px!important;background:#0f6cbd;color:#fff;font:500 10.5px/1.2 JetBrains Mono,monospace!important;letter-spacing:0;text-transform:none;white-space:nowrap;pointer-events:none;opacity:0;transform:translateY(-6px) scale(.9);transition:opacity .3s,transform .4s cubic-bezier(.2,.8,.2,1)}[data-client=outlook] .mail-pin{opacity:1;transform:none}.mail-pin--logo{top:26px;left:76px;right:auto}[data-client=outlook] .mail-pin--card{transition-delay:.1s}.mail-pin--good{inset:auto 50% 8px auto;transform:translate(50%,6px) scale(.9);background:#1e8e3e}[data-client=outlook] .mail-pin--good{transform:translate(50%);transition-delay:.2s}",ln=()=>{const n=j.slice(j.indexOf("<!--[if mso]>"));return n.slice(n.indexOf("<style>")+7,n.indexOf("</style>"))},sn=[[".email__logo","Web font → Arial fallback","logo"],[".email__hero","Gradient → solid bgcolor"],[".email__card","border-radius → square","card"],[".email__cta","Still round: <v:roundrect>","good"]],dn=()=>{const n=j.indexOf("<style>")+7,i=j.indexOf("</style>",n);return M(j.slice(0,n),"html")+M(j.slice(n,i),"css")+M(j.slice(i),"html")},G=j.split(`
`),cn=G.findIndex(n=>n.includes("<v:roundrect"))+1,pn={gmail:"Gmail",outlook:"Outlook 2016",dark:"Apple Mail · Dark mode"},z=document.querySelector("[data-mail]");if(z){const n=z.querySelector("[data-app]"),i=z.querySelector(".mail__canvas"),p=z.querySelector(".mail__frame"),d=z.querySelector(".mail__source"),o=z.querySelector("[data-source]");z.querySelector("[data-mail-code]").innerHTML=dn(),z.querySelector(".mail__gutter").textContent=G.map((a,g)=>g+1).join(`
`);const y=(a,g)=>{z.querySelectorAll(`[data-${a}]`).forEach(m=>{m.tagName==="BUTTON"&&m.setAttribute("aria-pressed",m.dataset[a]===g)})};let r,w=[];const h=()=>{const a=p.contentDocument,g=a.createElement("style");g.textContent=rn,r=a.createElement("style"),r.textContent=ln(),a.head.append(g,r),w=[...a.styleSheets].flatMap(m=>{try{return[...m.cssRules]}catch{return[]}}).filter(m=>m.media?.mediaText.includes("prefers-color-scheme")),sn.forEach(([m,f,u])=>{const E=a.createElement("em");E.className=u?`mail-pin mail-pin--${u}`:"mail-pin",E.textContent=f,a.querySelector(m).append(E)}),a.addEventListener("click",m=>{const f=m.target.closest("a");f&&(m.preventDefault(),f.href.startsWith("mailto:")?window.location.href=f.href:f.hash==="#contact"?document.querySelector("#contact").scrollIntoView({behavior:"smooth"}):window.open(f.href,"_blank","noopener"))}),t()},t=()=>{const a=p.contentDocument;if(!r||!a?.body)return;const g=z.dataset.client,m=g==="dark";a.documentElement.dataset.client=g,a.documentElement.toggleAttribute("data-ogsc",m),w.forEach(f=>f.media.mediaText=m?"all":"not all"),p.style.colorScheme=m?"dark":"light",r.media=g==="outlook"?"all":"not all"};p.addEventListener("load",h),p.contentDocument?.readyState==="complete"&&p.contentDocument.querySelector(".email")&&h();const S=a=>{z.dataset.client=a,y("client",a),n.textContent=pn[a],t()};z.querySelectorAll("button[data-client]").forEach(a=>a.addEventListener("click",()=>S(a.dataset.client))),z.querySelectorAll("button[data-device]").forEach(a=>a.addEventListener("click",()=>{z.dataset.device=a.dataset.device,y("device",a.dataset.device)})),o.addEventListener("click",()=>{const a=d.hidden;d.hidden=!a,i.hidden=a,o.setAttribute("aria-pressed",a),a&&(d.scrollTop=d.scrollHeight*((cn-6)/G.length))}),S("gmail")}const mn=`import './style.scss'
import './boot.js'
import './banner.js'
import './mail.js'
import './site.js'
import './portrait.js'
import clients from './data/clients.json'

// Client marquee
const track = document.querySelector('[data-clients]')
const row = clients.map((name) => \`<span class="marquee__item">\${name}</span><i class="marquee__sep">✦</i>\`).join('')
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
`,gn=`$ease: cubic-bezier(.2, .8, .2, 1);
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

@mixin label($font, $spacing: .08em) {
  font: $font;
  text-transform: uppercase;
  letter-spacing: $spacing;
}

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

// overflow-x: clip stops sideways scroll without making a scroll container. Never add overflow to body
// as well: body would become the scroll container and the sticky nav would stop sticking
html { scroll-behavior: smooth; scroll-padding-top: 80px; overflow-x: clip; }

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font: 400 17px/1.55 var(--sans);
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; }
img { display: block; max-width: 100%; }
h1, h2, h3 { margin: 0; font-weight: 400; }
p { margin: 0; }
ul, ol { list-style: none; margin: 0; padding: 0; }

::selection { background: var(--accent); color: #fff; }


// ---------- BOOT ----------

.boot {
  position: fixed;
  inset: 0;
  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--gutter);
  background:
    radial-gradient(ellipse at center, #0b1312, #040708);
  color: #d6dedd;
  font: 14px/1.7 var(--mono);
  cursor: pointer;

  .is-booting & { display: flex; }
  // Access granted: a short glitch, then a scanline redraws the page from top to bottom (750 ms, see boot.js)
  &.is-off {
    animation:
      boot-glitch .3s steps(1) both,
      boot-wipe .45s .3s steps(18) forwards;
  }

  // The redraw beam, riding the top edge of what's left of the terminal
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2px;
    background: #7fd88f;
    box-shadow: 0 0 14px 2px rgb(127 216 143 / .6);
    opacity: 0;
    pointer-events: none;
  }
  &.is-off::after { animation: boot-beam .45s .3s steps(18) forwards; }
  &.is-off &__log { animation: boot-rgb .3s steps(1) both; }

  @media (max-width: 620px) { font-size: 12px; }

  &__log { margin: 0; white-space: pre-wrap; font: inherit; }
  &__green { color: #7fd88f; }
  &__magenta { color: #c792ea; }
  &__yellow { color: #f5c26b; }
  &__cyan { color: #7fd6e8; }
  &__dim { color: #62797a; }
  &__strong { color: #fff; font-weight: 500; }

  &__cursor {
    display: inline-block;
    width: .6em;
    height: 1.1em;
    vertical-align: text-bottom;
    background: currentColor;
    animation: boot-blink 1s steps(1) infinite;
  }

  &__input {
    width: 20ch;
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
    color: inherit;
    font: inherit;
    caret-color: #7fd88f;
  }

  &__skip { margin: 0; color: #62797a; font-size: 12px; }
  &__link { color: #d6dedd; text-underline-offset: .2em; }
}

.is-booting { overflow: hidden; }

@keyframes boot-blink { 50% { opacity: 0; } }

// Strips of the terminal jump sideways and the page flickers through the gaps
@keyframes boot-glitch {
  0% { transform: translateX(-1.5%); clip-path: inset(0 0 58% 0); }
  15% { transform: translateX(2%); clip-path: inset(22% 0 30% 0); }
  30% { transform: translateX(-.8%); clip-path: inset(0 0 12% 0); }
  45% { transform: translateX(1.2%); clip-path: inset(46% 0 0 0); }
  60% { transform: none; clip-path: inset(0 0 40% 0); }
  75%, 100% { transform: none; clip-path: inset(0); }
}

// Red and cyan copies of the text pull apart, like the portrait's glitch
@keyframes boot-rgb {
  0%, 45% { text-shadow: -3px 0 #ff2a55, 3px 0 #22e6ff; }
  25%, 60% { text-shadow: 4px 0 #ff2a55, -2px 0 #22e6ff; }
  75%, 100% { text-shadow: none; }
}

@keyframes boot-wipe {
  from { clip-path: inset(0); }
  to { clip-path: inset(100% 0 0 0); }
}

@keyframes boot-beam {
  from { top: 0; opacity: 1; }
  to { top: 100%; opacity: 1; }
}

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
// The band is tilted and sticks out 10px on both sides so no corner shows. The outer element clips that
// sideways only: without it, mobile browsers widen the whole page to fit the band and zoom out
.marquee {
  overflow-x: clip;
  transform: translateY(50%);

  &__band {
    overflow: hidden;
    background: var(--accent);
    color: #1a0d07;
    padding: 14px 0;
    transform: rotate(-1.2deg);
    margin: 0 -10px;
  }

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

    &--flush { margin-bottom: 0; }
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


// ---------- WORK ----------
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

.ad-viewport {
  position: relative;
  width: 100%;
  height: 520px;

  &__ad {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border: 0;
    background: #ff5a1f;
    transform-origin: 0 0;
    transition: width .5s $ease, height .5s $ease, left .5s $ease, top .5s $ease;
    box-shadow: 0 30px 50px -28px #0007;
  }
}

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
    cursor: none;

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

  &__intro {
    display: grid;
    grid-template-columns: 1fr minmax(220px, 400px);
    gap: clamp(32px, 4vw, 64px);
    align-items: end;
    margin-bottom: clamp(40px, 6vw, 72px);

    @media (max-width: 860px) { grid-template-columns: 1fr; }
  }

  &__portrait {
    position: relative;
    margin: 0;

    @media (max-width: 860px) { width: 100%; }
  }

  &__photo {
    display: block;
    width: 100%;
    height: auto;
    image-rendering: pixelated;
  }
  &__portrait.is-live &__photo { visibility: hidden; }

  &__canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    cursor: crosshair;
  }

  &__hud {
    position: absolute;
    left: 0;
    bottom: 12px;
    padding: 7px 10px;
    border-radius: 4px;
    background: var(--ink);
    color: var(--paper);
    font: 500 12px/1 var(--mono);
    opacity: 0;
    transition: opacity .25s;

    &.is-on { opacity: 1; }
  }

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

// ---------- PRESS ----------
.press {
  border-top: 1px solid var(--line);

  &__item {
    display: grid;
    grid-template-columns: 80px 1fr minmax(180px, auto);
    gap: 12px 24px;
    align-items: baseline;
    padding: 28px 4px;
    border-bottom: 1px solid var(--line);

    @media (max-width: 720px) { grid-template-columns: 1fr; }
  }

  &__year { font: 500 13px/1.6 var(--mono); color: var(--accent); }

  &__title { font: clamp(30px, 3.4vw, 44px)/1 var(--display); text-transform: uppercase; }

  &__brand {
    display: block;
    margin-bottom: 8px;
    @include label(12px/1 var(--mono), .06em);
    color: var(--ink-soft);
  }

  &__text { margin-top: 10px; max-width: 60ch; color: var(--ink-soft); }

  &__meta {
    display: grid;
    gap: 10px;
    justify-items: end;

    @media (max-width: 720px) { justify-items: start; }
  }

  &__credit { @include label(12px/1.3 var(--mono), .06em); }

  &__links { display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end; }

  &__link {
    @include pill-button;
    border: 1px solid var(--line);
    text-decoration: none;
    white-space: nowrap;

    &:hover { background: var(--accent); border-color: var(--accent); color: #fff; }
  }
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
.fx { position: absolute; width: 0; height: 0; overflow: hidden; }

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
`,bn=`import { highlight } from './highlight.js'
import mainSrc from './main.js?raw'
import styleSrc from './style.scss?raw'
import siteSrc from './site.js?raw'

const DEFAULTS = { accent: '#ff5a1f', radius: 14, marquee: 45, wobble: 4, font: 'bebas' }

// [colour, name, toast]
const SWATCHES = [
  ['#ff5a1f', 'Orange Box', 'Orange Box. Terug naar de factory settings.'],
  ['#a335ee', 'Epic loot', 'Net geen legendary, but still. Gz!'],
  ['#0078d7', 'Blue screen of death', ':( Je pagina heeft een probleem gevonden en moet opnieuw opstarten.'],
  ['#306230', 'Game Boy', 'Game Boy-groen. Eerst even in de cartridge blazen.'],
  ['#ff2a6d', 'Synthwave', 'Synthwave. Zonnebril op, het is 1986.'],
  ['#e0262a', 'Low HP', 'Low HP! Heal me plz...'],
]

const FONTS = {
  bebas: { css: "'Bebas Neue', Impact, sans-serif", toast: '' },
  serif: { css: "Georgia, 'Times New Roman', serif", toast: '' },
  comic: { css: "'Comic Sans MS', 'Comic Neue', cursive", toast: '' },
}

const tokensSrc = (t) => \`
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

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('[data-wobble-anim]')?.remove()
  }

  const files = [
    { name: 'tokens.css', lang: 'css', src: () => tokensSrc(tokens), live: true },
    { name: 'main.js', lang: 'js', src: () => mainSrc },
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

  const swatches = SWATCHES.map(([color, name, toastText]) => {
    const s = document.createElement('button')
    s.type = 'button'
    s.className = 'swatches__item'
    s.dataset.color = color
    s.style.background = color
    s.title = name
    s.setAttribute('aria-label', name)
    s.addEventListener('click', () => {
      tokens.accent = color
      say(toastText)
      apply('accent')
    })
    root.querySelector('[data-swatches]').append(s)
    return s
  })

  root.querySelectorAll('input[data-token]').forEach((input) => {
    input.addEventListener('input', () => {
      tokens[input.dataset.token] = Number(input.value)
      if (input.dataset.token === 'marquee') say(tokens.marquee < 12 ? 'I am speed.' : '')
      if (input.dataset.token === 'radius') say(tokens.radius === 0 ? 'Heel Outlook 2016 van jou.' : '')
      if (input.dataset.token === 'wobble') say(tokens.wobble >= 18 ? 'Handgeletterd, na de vrijdagdrink.' : '')
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
    say('Terug naar de fabrieksinstellingen.')
    apply('reset')
  })

  select(files[0])
  apply()
}
`,D={accent:"#ff5a1f",radius:14,marquee:45,wobble:4,font:"bebas"},fn=[["#ff5a1f","Orange Box","Orange Box. Terug naar de factory settings."],["#a335ee","Epic loot","Net geen legendary, but still. Gz!"],["#0078d7","Blue screen of death",":( Je pagina heeft een probleem gevonden en moet opnieuw opstarten."],["#306230","Game Boy","Game Boy-groen. Eerst even in de cartridge blazen."],["#ff2a6d","Synthwave","Synthwave. Zonnebril op, het is 1986."],["#e0262a","Low HP","Low HP! Heal me plz..."]],K={bebas:{css:"'Bebas Neue', Impact, sans-serif",toast:""},serif:{css:"Georgia, 'Times New Roman', serif",toast:""},comic:{css:"'Comic Sans MS', 'Comic Neue', cursive",toast:""}},xn=n=>`
:root {
  --accent: ${n.accent};
  --radius: ${n.radius}px;
  --marquee-speed: ${n.marquee}s;
  --wobble: ${n.wobble}; /* feDisplacementMap scale */
  --display: ${K[n.font].css};
}`,_=document.querySelector("[data-site]");if(_){const n={...D},i=document.documentElement,p=_.querySelector("[data-code]"),d=_.querySelector(".code__gutter"),o=_.querySelector("[data-code-stats]"),y=_.querySelector(".code__tabs"),r=_.querySelector("[data-toast]"),w=document.querySelector("[data-wobble-map]");matchMedia("(prefers-reduced-motion: reduce)").matches&&document.querySelector("[data-wobble-anim]")?.remove();const h=[{name:"tokens.css",lang:"css",src:()=>xn(n),live:!0},{name:"main.js",lang:"js",src:()=>mn},{name:"site.js",lang:"js",src:()=>bn,note:"this viewer"},{name:"style.scss",lang:"scss",src:()=>gn}];let t=h[0];const S=e=>e.split(`
`).length,a=h.slice(1).reduce((e,s)=>e+S(s.src()),0);_.querySelector("[data-code-total]").textContent=`${a} lines · 0 frameworks`;const g=e=>{const s=t.src();p.innerHTML=M(s,t.lang),d.textContent=Array.from({length:S(s)},(A,k)=>k+1).join(`
`),o.textContent=`${t.name} · ${S(s)} lines · ${(new Blob([s]).size/1024).toFixed(1)} kB`,e&&(p.parentElement.classList.remove("is-flash"),p.offsetWidth,p.parentElement.classList.add("is-flash"))},m=h.map(e=>{const s=document.createElement("button");return s.type="button",s.className="code__tab",s.setAttribute("role","tab"),s.innerHTML=e.live?`<i class="code__live"></i>${e.name}`:e.name,e.note&&(s.title=e.note),s.addEventListener("click",()=>f(e)),y.append(s),s}),f=e=>{t=e,m.forEach((s,A)=>s.setAttribute("aria-selected",h[A]===e)),g(),_.querySelector(".code__body").scrollTop=0},u=e=>{r.textContent=e,r.classList.toggle("is-on",!!e)},E=e=>{i.style.setProperty("--accent",n.accent),i.style.setProperty("--radius",`${n.radius}px`),i.style.setProperty("--marquee-speed",`${n.marquee}s`),i.style.setProperty("--display",K[n.font].css),i.style.setProperty("--wobble",n.wobble),w.setAttribute("scale",n.wobble),i.classList.toggle("is-wobbly",n.wobble>0),_.querySelector('[data-out="radius"]').textContent=`${n.radius}px`,_.querySelector('[data-out="marquee"]').textContent=`${n.marquee}s`,_.querySelector('[data-out="wobble"]').textContent=n.wobble,C.forEach(s=>s.setAttribute("aria-pressed",s.dataset.color===n.accent)),_.querySelectorAll("[data-font]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.font===n.font)),e&&t!==h[0]?f(h[0]):g(!!e)},C=fn.map(([e,s,A])=>{const k=document.createElement("button");return k.type="button",k.className="swatches__item",k.dataset.color=e,k.style.background=e,k.title=s,k.setAttribute("aria-label",s),k.addEventListener("click",()=>{n.accent=e,u(A),E("accent")}),_.querySelector("[data-swatches]").append(k),k});_.querySelectorAll("input[data-token]").forEach(e=>{e.addEventListener("input",()=>{n[e.dataset.token]=Number(e.value),e.dataset.token==="marquee"&&u(n.marquee<12?"I am speed.":""),e.dataset.token==="radius"&&u(n.radius===0?"Heel Outlook 2016 van jou.":""),e.dataset.token==="wobble"&&u(n.wobble>=18?"Handgeletterd, na de vrijdagdrink.":""),E(e.dataset.token)})}),_.querySelectorAll("[data-font]").forEach(e=>{e.addEventListener("click",()=>{n.font=e.dataset.font,u(K[n.font].toast),E("font")})}),_.querySelector("[data-reset]").addEventListener("click",()=>{Object.assign(n,D),_.querySelectorAll("input[data-token]").forEach(e=>e.value=D[e.dataset.token]),u("Terug naar de fabrieksinstellingen."),E("reset")}),f(h[0]),E()}const q=document.querySelector("[data-portrait]"),hn=matchMedia("(prefers-reduced-motion: reduce)").matches;if(q&&!hn){const n=q.querySelector(".about__photo"),i=q.querySelector("[data-hud]"),p=document.createElement("canvas");p.className="about__canvas",p.setAttribute("aria-hidden","true");const d=p.getContext("2d"),o=document.createElement("canvas"),y=o.getContext("2d"),r=[6,12,24,48,96],w=300,h=["#ff2a55","#22e6ff"];let t=0,S=[],a=!1,g=!1,m=!1;const f=l=>new Promise(v=>setTimeout(v,l)),u=(l,v)=>l+Math.random()*(v-l),E=l=>{const v=document.createElement("canvas");v.width=v.height=t;const $=v.getContext("2d");return $.drawImage(n,0,0,t,t),$.globalCompositeOperation="source-in",$.fillStyle=l,$.fillRect(0,0,t,t),v},C=()=>{const l=Math.min(window.devicePixelRatio||1,2);t=Math.round(q.clientWidth*l),p.width=p.height=t,d.imageSmoothingEnabled=!1,S=h.map(E)},e=()=>{d.clearRect(0,0,t,t),d.drawImage(n,0,0,t,t)},s=l=>{o.width=o.height=l,y.drawImage(n,0,0,l,l),d.clearRect(0,0,t,t),d.drawImage(o,0,0,t,t)},A=l=>{l&&(i.textContent=l),i.classList.toggle("is-on",!!l)},k=async()=>{a=!0;for(const[l,v]of r.entries())s(v),A(`server@localhost:~$ loading ${100/r.length*(l+1)}%`),await f(w);e(),A("server@localhost:~$ Joran successfully loaded"),a=!1,await f(2400),a||A("")},B=()=>{const l=t*.025,v=n.naturalWidth/t;d.clearRect(0,0,t,t),d.globalAlpha=.75,d.drawImage(S[0],-u(l*.3,l),0),d.drawImage(S[1],u(l*.3,l),0),d.globalAlpha=1,d.drawImage(n,0,0,t,t);for(let $=0;$<5;$++){const O=u(0,t),P=u(t*.01,t*.06);d.clearRect(0,O,t,P),d.drawImage(n,0,O*v,n.naturalWidth,P*v,u(-l*2,l*2),O,t,P)}},c=async()=>{if(!(a||!m)){a=!0;for(let l=0;l<6;l++)B(),await f(u(40,90));e(),a=!1}};n.after(p),q.classList.add("is-live");const b=async()=>{m=!0;try{await n.decode()}catch{q.classList.remove("is-live");return}C(),k()};new IntersectionObserver(([l])=>{g=l.isIntersecting,g&&!m&&b()},{threshold:.4}).observe(q);const x=()=>{g&&c(),setTimeout(x,u(4e3,9e3))};setTimeout(x,6e3),q.addEventListener("pointerenter",c),q.addEventListener("pointerdown",c),new ResizeObserver(()=>{!t||a||(C(),e())}).observe(q)}const un=["Amazon","Belfius","bpost","Center Parcs","Child Focus","Danone","DATS24","KIA","Mazda","MediaMarkt","Nationale Loterij","NN","Pioneer","Q8","Randstad","Rode Kruis","Škoda","Telenet","Toyota","Vlaamse Overheid"],U=document.querySelector("[data-clients]"),Y=un.map(n=>`<span class="marquee__item">${n}</span><i class="marquee__sep">✦</i>`).join("");U.innerHTML=Y+Y;const V=U.closest(".marquee"),Q=n=>U.getAnimations().forEach(i=>i.updatePlaybackRate(n));V.addEventListener("pointerenter",()=>Q(.5));V.addEventListener("pointerleave",()=>Q(1));const yn=document.querySelectorAll("[data-clock]"),Z=()=>{const n=new Intl.DateTimeFormat("nl-BE",{hour:"2-digit",minute:"2-digit",timeZone:"Europe/Brussels"}).format(new Date);yn.forEach(i=>i.textContent=n)};Z();setInterval(Z,3e4);document.querySelector("[data-year]").textContent=new Date().getFullYear();const nn=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),nn.unobserve(i.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(n=>nn.observe(n));const I=document.createElement("div");I.className="lab-cursor";document.body.append(I);let en=0,tn=0,F=0,J=0;const an=()=>{F+=(en-F)*.18,J+=(tn-J)*.18,I.style.left=`${F}px`,I.style.top=`${J}px`,requestAnimationFrame(an)};an();window.addEventListener("pointermove",n=>{en=n.clientX,tn=n.clientY});document.querySelectorAll(".lab__row").forEach(n=>{n.addEventListener("pointerenter",()=>{I.textContent=n.querySelector(".lab__tech").textContent,I.classList.add("is-on")}),n.addEventListener("pointerleave",()=>I.classList.remove("is-on"))});console.log("%cNever gonna give you up, never gonna let you down.","font: 600 14px monospace; color: #ff5a1f");console.log("↑ ↑ ↓ ↓ ← → ← → B A");const W=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"];let T=0;window.addEventListener("keydown",n=>{const i=n.key.toLowerCase();T=i===W[T]?T+1:+(i===W[0]),!(T<W.length)&&(T=0,window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank","noopener"))});
