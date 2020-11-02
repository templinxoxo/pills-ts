import React, { useState } from "react";
import "./Pill.css";

interface Props {
  term: string;
  breakLine?: boolean;
}

const Pill: React.FC<Props> = (props) => {
  const HEADING_CLASS: string = "headingMode";
  const [headingMode, setHeadingMode] = useState<boolean>(() => false);

  function toggleHeading() {
    setHeadingMode((prevMode) => !prevMode);
  }

  const className: string = `pill ${headingMode ? HEADING_CLASS : ""}`.trim();
  return (
    <>
      {props.breakLine ? <br /> : null}
      <div className={className} onClick={toggleHeading}>
        <span className="heading">H</span>
        {props.term}
      </div>
    </>
  );
};

export default Pill;
