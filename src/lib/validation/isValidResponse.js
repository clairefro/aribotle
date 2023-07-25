const isJson = (string) => {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
}

const isValidResponse = (strRes) => {
  if (!isJson) return false
  const res = JSON.parse(strRes)
  if (
    typeof res.fallacy_found === 'boolean' &&
    (
      res.fallacy_found === false ||
      res.fallacy_found === true && typeof res.list === 'object'
    )
  ) {
    return true
  } else {
    return false
  }

}

export { isValidResponse }
