
const SHOW_LAST = 4
const MASK = " ... "

const mask = (text) => {
  let masked = [text.slice(0, 3), MASK, text.slice(-1 * SHOW_LAST)].join('')
  return masked;
}

export { mask }
