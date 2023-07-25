import { useState } from "react";
import { openaiClient } from "../../../lib/api/openai";

const FallacyCheck = ({ apiKey, prompt }) => {
  const [result, setResult] = useState("")
  const [fetching, setFetching] = useState(false)

  const handleClick = async () => {
    try {
      setFetching(true)
      const res = await openaiClient.chat(apiKey, prompt)
      if (res) {
        setResult(res)
      }
    } catch (e) {
      alert(e.message)
      console.log(JSON.stringify(e))
    } finally {
      setFetching(false)
    }

  }

  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" value={result ? JSON.stringify(result, null, 2) : ""}></textarea>
      <button onClick={handleClick} disabled={fetching}>{fetching ? "Wait" : "Scrutinize"}</button>
    </div >
  )
}

export default FallacyCheck;
