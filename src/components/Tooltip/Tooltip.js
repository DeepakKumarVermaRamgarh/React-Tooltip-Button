import { useState } from "react";
import "./tooltip.css";

export const Tooltip = ({
  children,
  position = "top",
  text = "Tooltip Text",
}) => {
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setOpenTooltip(true)}
      onMouseLeave={() => setOpenTooltip(false)}
    >
      {openTooltip && (
        <div className={`tooltip ${position} `}>
          <span className={`span-${position}`}></span>
          {text}
        </div>
      )}
      {children}
    </div>
  );
};
