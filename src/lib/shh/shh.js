import wisdom from './borges'

class Shh {
  constructor(key) {
    this.pepper = btoa(key)
  }

  e(text) {
    return btoa(this.pepper + btoa(text))
  }

  d(ciphered) {
    if (!!ciphered) {
      return atob(atob(ciphered).slice(this.pepper.length,));
    }
  }
}

const shh = new Shh(wisdom)

export { Shh, shh };
