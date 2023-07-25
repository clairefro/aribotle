
const SHOW_LAST = 4
const MASK_SYMBOL = "*"

const mask = (text) => {
  const len = text.length - SHOW_LAST;
  let str = text.split('');
  for (var i = 0; i < len; i++) {
    str[i] = MASK_SYMBOL;
  }
  str = str.join('');
  return str;
}

export { mask }
