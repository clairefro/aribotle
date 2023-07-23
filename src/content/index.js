console.info('chrome-ext template-react-js content script')

function getHighlightedText() {
  return window.getSelection().toString();
}

chrome.runtime.onMessage.addListener(
  function (request, _sender, sendResponse) {
    console.log({ request })
    // Add message listeners
    if (request["type"] === 'GET_SELECTED') {
      const highlightedText = getHighlightedText()
      sendResponse(highlightedText);
    }
    return true; // this make sure sendResponse will work asynchronously
  }
);

export { }
