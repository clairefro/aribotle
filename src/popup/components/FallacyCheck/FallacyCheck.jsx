import { useState } from "react";
import { openaiClient } from "../../../lib/api/openai";
import { isValidResponse } from "../../../lib/validation/isValidResponse";
import BoxOfShame from "./BoxOfShame/BoxOfShame";

const INVALID = "INVALID"

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
        setResult(INVALID)
      }
    } catch (e) {
      alert(e.message)
      console.log(JSON.stringify(e))
    } finally {
      setFetching(false)
    }
  }

  const renderStatus = () => {
    if (!result) return

    const isInvalid = result === INVALID

    if (isInvalid) {
      return (
        <h2 className="fallacy-status-invalid">Uh oh... I don't know</h2>
      )
    } else if (result.fallacy_found) {
      return (
        <h2 className="fallacy-status-found">FALLACY!!!!</h2>
      )
    }
    return (
      <h2 className="fallacy-status-none">No logical fallacies detected</h2>
    )
  }

  return (
    <div>
      <div>
        {renderStatus()}
        {result?.fallacy_found ?
          <BoxOfShame list={result.list} />
          : null
        }
      </div>
      <button
        className="button-cta"
        onClick={handleClick}
        disabled={fetching}>
        {fetching ? "Wait" : "Scrutinize"}
      </button>
    </div >
  )
}

export default FallacyCheck;
