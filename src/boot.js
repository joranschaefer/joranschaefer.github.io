const html = document.documentElement
const boot = document.querySelector('[data-boot]')

if (boot && html.classList.contains('is-booting')) {
  html.dataset.boot = 'running'
  const log = boot.querySelector('[data-boot-log]')
  const cursor = document.createElement('span')
  cursor.className = 'boot__cursor'

  const HASH = 'cb467d1a073f44cf4c66088a0151cef28298ccea19040edff18845fea48ee68d' // Lil' secret, ssssst.
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches

  const paint = (tone, text) => `<span class="boot__${tone}">${text}</span>`
  const arrow = paint('green', '➜')
  const readyIn = Math.round(performance.now())

  const BEFORE = [
    [`${paint('green', 'joran@schaefer')} ${paint('magenta', 'MINGW64')} ${paint('yellow', '~/Herd/joranschaefer.github.io')} ${paint('cyan', '(main)')}`, 0],
    ['$ sudo npm run dev', 250, true],
  ]
  const AFTER = [
    ['', 0],
    [paint('dim', '> schaeferj@1.0.1 dev'), 0],
    [paint('dim', '> vite'), 450],
    ['', 0],
    [`  ${paint('green', `${paint('strong', 'VITE')} v7.3.6`)}  ${paint('dim', 'ready in')} ${paint('strong', readyIn)} ms`, 200],
    ['', 0],
    [`  ${arrow}  ${paint('strong', 'Local')}:   ${paint('cyan', `http://localhost:${paint('strong', '5173')}/`)}`, 60],
    [`  ${arrow}  ${paint('strong', 'Network')}: ${paint('dim', 'use')} ${paint('strong', '--host')} ${paint('dim', 'to expose')}`, 60],
    [`  ${arrow}  ${paint('dim', 'press')} ${paint('strong', 'h + enter')} ${paint('dim', 'to show help')}`, 600],
    ['', 0],
    [paint('dim', '[vite] connecting...'), 350],
    [paint('dim', '[vite] connected.'), 400],
  ]

  let hurry = calm
  const wait = (ms) => (hurry ? Promise.resolve() : new Promise((resolve) => setTimeout(resolve, ms)))

  const behind = [...document.body.children].filter((el) => el !== boot && el.tagName !== 'SCRIPT')
  behind.forEach((el) => (el.inert = true))

  const print = (markup) => {
    log.insertAdjacentHTML('beforeend', `${markup}\n`)
    log.append(cursor)
  }

  const type = async (text) => {
    const line = document.createElement('span')
    log.append(line, cursor)
    for (const char of text) {
      if (hurry) {
        line.textContent = text
        break
      }
      line.textContent += char
      await wait(26)
    }
    line.after('\n')
  }

  const play = async (lines) => {
    for (const [line, pause, typed] of lines) {
      if (typed) await type(line)
      else print(line)
      await wait(pause)
    }
  }

  const sha256 = async (text) => {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
    return [...new Uint8Array(bytes)].map((b) => b.toString(16).padStart(2, '0')).join('')
  }

  // crypto.subtle only exists on https and localhost. Without it, let people in rather than lock them out
  const check = async (value) => !window.crypto?.subtle || (await sha256(value)) === HASH

  const ask = () =>
    new Promise((resolve) => {
      const prompt = document.createElement('label')
      prompt.className = 'boot__prompt'
      prompt.textContent = '[sudo] Please enter the password: '
      const input = document.createElement('input')
      input.className = 'boot__input'
      input.type = 'password'
      input.autocomplete = 'off'
      input.spellcheck = false
      input.setAttribute('aria-label', 'Wachtwoord')
      prompt.append(input)
      cursor.remove()
      log.append(prompt)
      input.focus()

      const refocus = () => input.focus()
      boot.addEventListener('pointerup', refocus)

      input.addEventListener('keydown', async (e) => {
        if (e.key !== 'Enter') return
        e.preventDefault()
        input.disabled = true
        boot.removeEventListener('pointerup', refocus)
        prompt.after('\n')
        if (await check(input.value)) return resolve()
        // Every third miss, sudo gives up the way sudo does. And then gets rolled
        misses++
        if (misses % 3) print('Sorry, try again.')
        else print(`sudo: 3 incorrect password attempts\n${paint('dim', `♪ ${LYRICS[(misses / 3 - 1) % LYRICS.length]}`)}`)
        resolve(ask())
      })
    })

  const LYRICS = ['Never gonna give you up.', 'Never gonna let you down.', 'Never gonna run around and desert you.']
  let misses = 0

  const finish = () => {
    try {
      sessionStorage.setItem('unlocked', '1')
    } catch {}
    behind.forEach((el) => (el.inert = false))
    // Glitch + scanline redraw (style.scss, .boot.is-off). A timer of the same length hands the page over,
    // so it also ends when animations don't run. Reduced motion: straight to the page
    boot.classList.add('is-off')
    setTimeout(() => html.classList.remove('is-booting'), calm ? 0 : 750)
  }

  const run = async () => {
    await play(BEFORE)
    await ask()
    hurry = calm
    await play(AFTER)
    finish()
  }

  const skip = (e) => {
    if (e.target.closest?.('.boot__prompt, .boot__link')) return
    hurry = true
  }
  window.addEventListener('keydown', skip)
  boot.addEventListener('pointerdown', skip)
  run()
}
