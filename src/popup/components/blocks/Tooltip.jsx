import React, { useState } from "react";

function Tooltip({ children }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseOver = () => {
    setTooltipVisible(true);
  };

  const handleMouseOut = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        position: "relative",
      }}
    >
      <span
        style={{
          cursor: "pointer",
        }}
      >
        ⓘ
      </span>
      {tooltipVisible && (
        <div className="tooltip-modal">
          {children}
        </div>
      )
      }
    </div >
  );
}

export default Tooltip;
