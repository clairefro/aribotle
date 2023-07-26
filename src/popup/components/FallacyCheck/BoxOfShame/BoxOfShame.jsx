import ProgressBar from "../../blocks/ProgressBar/ProgressBar";
import fallacies from "../../../../lib/fallacies/fallacies";
import Tooltip from "../../blocks/Tooltip";

const getDescription = (fallacy) => {
  return fallacies.filter(f => f.name === fallacy)[0]?.description || "?"
}

const BoxOfShame = ({ list }) => {
  return (
    <div className="box-of-shame section">
      {list.map((f, i) => (
        <div key={i} className="fallacy">
          <div className="fallacy-name-container">
            <span className="fallacy-name">{f.label}</span>
            <Tooltip>
              <p>{getDescription(f.label)}</p>
            </Tooltip>
          </div>
          <ProgressBar key={i} fraction={f.score} />
        </div>
      ))}
    </div >
  )
}

export default BoxOfShame;
