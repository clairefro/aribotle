import { useState, useEffect } from 'react';
import iconNeutral from '../../assets/logo.png';
import iconAngry from '../../assets/aribotle-angry.png';
import iconPleased from '../../assets/aribotle-pleased.png';
import ApiKeyControls from './ApiKey/ApiKeyControls';
import FallacyCheck from './FallacyCheck/FallacyCheck';
import { shh } from '../../lib/shh/shh'
import { getStorageValue, setStorageValue } from '../../lib/chrome/storage'
import constants from '../../lib/constants'

const { API_KEY_KEY } = constants

const Main = () => {
  const [highlightedText, setHighlightedText] = useState("");
  const [apiKey, setApiKey] = useState(null);
  const [mood, setMood] = useState(null)

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

  const iconImg = () => {
    if (!mood) {
      return iconNeutral
    } else if (mood === 'angry') {
      return iconAngry
    } else if (mood === 'pleased') {
      return iconPleased
    }
    return iconNeutral
  }

  return (
    <div>
      <h1>Aribotle</h1>
      <img src={iconImg()} alt="aribotle" />
      <div>
        {highlightedText?.length ?
          <>
            <p>"{highlightedText}"</p>
            <FallacyCheck apiKey={apiKey} prompt={highlightedText} setMood={setMood} />
          </>
          :
          <p><em>Highlight text in the webpage and come back!</em></p>}

      </div>

      <ApiKeyControls apiKey={apiKey} setApiKey={setApiKey} />
    </div >
  )
}

export default Main;
