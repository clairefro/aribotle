import { useState, useEffect } from 'react';
import icon from '../../assets/logo.png';
import ApiKeyControls from './ApiKey/ApiKeyControls';
import { shh } from '../../lib/shh'
import { getStorageValue, setStorageValue } from '../../lib/chrome/storage'
import constants from '../../lib/constants'

const { API_KEY_KEY } = constants

const Main = () => {
  const [highlightedText, setHighlightedText] = useState("");
  const [apiKey, setApiKey] = useState(null);

  const syncStorage = async () => {
    const s = await getStorageValue(API_KEY_KEY)
    if (s[API_KEY_KEY]) {
      setApiKey(shh.d(s[API_KEY_KEY]))
    }
  }

  /** START mount */
  useEffect(() => {
    syncStorage()
  }, [])

  useEffect(() => {
    // get highlighted text from content script via message
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "GET_SELECTED" }, function (response) {
        setHighlightedText(response)
      });
    });
  }, []);
  /** END mount */

  useEffect(() => {
    if (apiKey) {
      setStorageValue(API_KEY_KEY, shh.e(apiKey))
    }
  }, [apiKey])



  return (
    <div>
      <p>Hello, philosopher!</p>
      <img src={icon} alt="extension icon" />
      <div>
        <h1>Highlighted Text</h1>
        {highlightedText?.length ? <p>"{highlightedText}"</p> : <p>Highlight text in the webpage to start</p>}

      </div>
      <ApiKeyControls apiKey={apiKey} setApiKey={setApiKey} />
    </div >
  )
}

export default Main;
