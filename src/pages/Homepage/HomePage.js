import { Button } from "../../components/Button/Button";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="main-container">
      <Tooltip position="top" text="Top Tooltip">
        <Button> Top Tooltip </Button>
      </Tooltip>
      <Tooltip position="bottom" text="Bottom Tooltip">
        <Button> Bottom Tooltip </Button>
      </Tooltip>
      <Tooltip position="left" text="Left Tooltip">
        <Button> Left Tooltip </Button>
      </Tooltip>
      <Tooltip position="right" text="Right Tooltip">
        <Button> Right Tooltip </Button>
      </Tooltip>
    </div>
  );
};
