const ProgressBar = ({ fraction }) => {
  const percent = fraction * 100

  return (
    <div className="progress-bar">
      <div className="progress-bar-indicator"
        style={{
          width: percent + "%",
          backgroundColor: percent > 30 ? `rgba(255, 0, 0, 0.4)` : `rgba(255, 255, 0, 0.4)`
        }}>
        <span>
          {percent}%
        </span>
      </div >
    </div>

  )
}

export default ProgressBar;
