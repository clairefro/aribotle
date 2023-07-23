console.info('chrome-ext template-react-js background script')

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Handle the message here.
  console.log('background script received message')
  console.log({ message })
});

export { }
