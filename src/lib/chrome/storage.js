async function setStorageValue(key, val) {
  await chrome.storage.sync.set({ [key]: val });
}

async function getStorageValue(key) {
  const result = await chrome.storage.sync.get([key]);
  return result
}

export { setStorageValue, getStorageValue }
