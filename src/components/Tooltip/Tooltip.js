// Importing the useState hook from React.
import { useState } from "react";
// Importing the CSS file for styling the Tooltip component.
import "./tooltip.css";

export const Tooltip = ({
  children,
  position = "top",
  text = "Tooltip Text",
}) => {
  // Using the useState hook to manage the state of the tooltip visibility.
  const [openTooltip, setOpenTooltip] = useState(false);

  return (
    // The container div for the Tooltip component
    <div
      className="tooltip-container"
      onMouseEnter={() => setOpenTooltip(true)}
      onMouseLeave={() => setOpenTooltip(false)}
    >
      {/* Rendering the tooltip only when openTooltip state is true */}
      {openTooltip && (
        <div className={`tooltip tooltip-${position}`}>{text}</div>
      )}
      {/* Rendering the children elements inside the tooltip container */}
      {children}
    </div>
  );
};
