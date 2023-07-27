import { useState } from "react";
import { mask } from '../../../lib/shh/mask'

const ApiKeyControls = ({ setApiKey, apiKey }) => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState(apiKey || "")

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleSave = () => {
    setApiKey(input)
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="api-key-controls">
      <button onClick={handleOpen}>ApiKey settings</button>
      {open && (
        <div>
          {apiKey && (<p>Current: {mask(apiKey)}</p>)}
          < input onChange={handleInputChange} placeholder="Paste your API Key" type="text" />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div >
  )
}

export default ApiKeyControls;
