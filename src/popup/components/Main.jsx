import { useState } from 'react';
import icon from '../../assets/logo.png';

const Main = () => {
  const [highlightedText, setHighlightedText] = useState("");

  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "GET_SELECTED" }, function (response) {
        setHighlightedText(response)
      });
    });
  };


  return (
    <div>
      <p>Hello, philosopher!</p>
      <img src={icon} alt="extension icon" />
      <div>
        <h1>Highlighted Text</h1>
        <button onClick={handleClick}>Get highlight</button>
        <p>{highlightedText}</p>
      </div>
    </div >
  )
}

export default Main;
