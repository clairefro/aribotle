import { useState } from "react";
import { shh } from '../../../lib/shh/shh'
import { mask } from '../../../lib/shh/mask'

const ApiKeyControls = ({ setApiKey, apiKey }) => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState(apiKey || "")

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleSave = () => {
    setApiKey(shh.e(input))
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="api-key-controls">

      <button onClick={handleOpen}>ApiKey settings</button>
      {open && (
        <div>
          {apiKey && (<p>Current: {mask(shh.d(apiKey))}</p>)}
          < input onChange={handleInputChange} placeholder="Paste your API Key" type="text" />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div >
  )
}

export default ApiKeyControls;
