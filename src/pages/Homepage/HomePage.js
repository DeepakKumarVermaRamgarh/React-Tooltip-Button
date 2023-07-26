// Importing the Button component
import { Button } from "../../components/Button/Button";
// Importing the Tooltip component
import { Tooltip } from "../../components/Tooltip/Tooltip";
// Importing the CSS file for styling the Homepage component.
import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="main-container">
      {/* Heading displaying the title of the Tooltip Button Examples */}
      <h2>Tooltip Button Examples</h2>

      {/* Tooltip component with position "top" and text "Top Tooltip" */}
      <Tooltip position="top" text="Top Tooltip">
        <Button> Top Tooltip </Button>
      </Tooltip>

      {/* Tooltip component with position "bottom" and text "Bottom Tooltip" */}
      <Tooltip position="bottom" text="Bottom Tooltip">
        <Button> Bottom Tooltip </Button>
      </Tooltip>

      {/* Tooltip component with position "left" and text "Left Tooltip" */}
      <Tooltip position="left" text="Left Tooltip">
        <Button> Left Tooltip </Button>
      </Tooltip>

      {/* Tooltip component with position "right" and text "Right Tooltip" */}
      <Tooltip position="right" text="Right Tooltip">
        {/* Button component wrapped with the "right" positioned Tooltip */}
        <Button> Right Tooltip </Button>
      </Tooltip>
    </div>
  );
};
