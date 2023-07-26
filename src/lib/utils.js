const rand = (min = 0, max = 100) => {
  // Generate a random number between the minimum and maximum numbers
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { rand }
