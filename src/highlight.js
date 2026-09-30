// Tiny tokenizer-based highlighter for the code demos. Not a parser, just enough colour.
const RULES = {
  js: [
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")|\b(import|from|const|let|function|return|if|else|for|of|new|async|await|export|default|true|false|null|this|break)\b|\b(\d+(?:\.\d+)?)\b/g,
    ['c', 's', 'k', 'n'],
  ],
  css: [
    /(\/\*[\s\S]*?\*\/)|('[^'\n]*'|"[^"\n]*")|(#[0-9a-fA-F]{3,8}\b)|(--[\w-]+)|(@[\w-]+)|([\w-]+)(?=\s*:[^:{};]*;)|(\b\d*\.?\d+(?:px|rem|em|%|s|ms|deg|vw|vh|fr|ch|cqmin|cqh|cqw)?)/g,
    ['c', 's', 'n', 'v', 'k', 'p', 'n'],
  ],
  html: [
    /(<!--[\s\S]*?-->|<!\[endif\]-->)|(<\/?[\w:]+|\/?>)|([\w:-]+)(?==)|("[^"]*")/g,
    ['c', 'k', 'p', 's'],
  ],
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function highlight(src, lang) {
  const [re, classes] = RULES[lang]
  let out = ''
  let last = 0
  for (const m of src.matchAll(re)) {
    const group = m.slice(1).findIndex((g) => g !== undefined)
    out += esc(src.slice(last, m.index))
    out += `<span class="t-${classes[group]}">${esc(m[0])}</span>`
    last = m.index + m[0].length
  }
  return out + esc(src.slice(last))
}
