const ProgressBar = ({ fraction }) => {
  const percent = fraction * 100

  return (
    <div className="progress-bar">
      <div className="progress-bar-indicator"
        style={{
          width: percent + "%",
        }}>
        <span>
          {percent}%
        </span>
      </div >
    </div>

  )
}

export default ProgressBar;
