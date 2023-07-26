// Importing the CSS file for styling the Button component.

import "./button.css";

export const Button = ({ children }) => {
  return (
    <button type={"button"} className="btn">
      {children}
    </button>
  );
};
