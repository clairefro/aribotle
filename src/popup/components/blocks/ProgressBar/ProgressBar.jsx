import { rand } from "../../../../lib/utils";

const ProgressBar = ({ fraction }) => {
  const percent = fraction * 100

  return (
    <div className="progress-bar">
      <div className="progress-bar-indicator"
        style={{
          width: percent + "%",
          backgroundColor: percent > 30 ? `rgba(255, 0, 0, 0.4)` : `rgba(255, 255, 0, 0.4)`,
          animation: `progress-bar-animation ${rand(800, 1200)}ms linear 1`
        }}>

      </div >
      <span className="progress-bar-parcent-label">
        {percent}%
      </span>
    </div>

  )
}

export default ProgressBar;
