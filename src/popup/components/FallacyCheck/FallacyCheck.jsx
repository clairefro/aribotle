import { useEffect, useState } from "react";
import { openaiClient } from "../../../lib/api/openai";
import ProgressBar from "../blocks/ProgressBar/ProgressBar";
import { isValidResponse } from "../../../lib/validation/isValidResponse";

const FallacyCheck = ({ apiKey, prompt }) => {
  const [result, setResult] = useState("")
  const [fetching, setFetching] = useState(false)

  const handleClick = async () => {
    try {
      setFetching(true)
      const res = await openaiClient.chat(apiKey, prompt)
      if (res && isValidResponse(res)) {
        const resJson = JSON.parse(res)
        setResult(resJson)
      } else {
        setResult('INVALID')
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
      <div>
        {result === 'INVALID' ?
          <p>Invalid result</p> :
          (
            result?.fallacy_found ? result.list.map((f, i) => (
              <>
                <p>{f.label}</p>
                <ProgressBar key={i} fraction={f.score} />

              </>
            )) : null)}
      </div>
      {result && <textarea name="" id="" cols="30" rows="10" value={result ? JSON.stringify(result, null, 2) : ""}></textarea>}


      <button onClick={handleClick} disabled={fetching}>{fetching ? "Wait" : "Scrutinize"}</button>
    </div >
  )
}

export default FallacyCheck;
