import ProgressBar from "../../blocks/ProgressBar/ProgressBar";
import fallacies from "../../../../lib/fallacies/fallacies";

const getDescription = (fallacy) => {
  return fallacies.filter(f => f.name === fallacy)[0]?.description || "?"
}

const BoxOfShame = ({ list }) => {
  return (
    <div className="box-of-shame section">
      {list.map((f, i) => (
        <div className="fallacy">
          <p className="fallacy-name" title={getDescription(f.label)}>{f.label}</p>
          <ProgressBar key={i} fraction={f.score} />
        </div>
      ))}
    </div >
  )
}

export default BoxOfShame;
