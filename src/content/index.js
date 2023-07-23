console.info('chrome-ext template-react-js content script')

function getHighlightedText() {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var text = range.toString();
  console.log(text)
  return text.substring(range.startOffset, range.endOffset);
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // Add message listeners
    if (request["type"] == 'GET_SELECTED') {
      const highlightedText = getHighlightedText()
      sendResponse(highlightedText);
    }
    return true; // this make sure sendResponse will work asynchronously
  }
);

export { }
