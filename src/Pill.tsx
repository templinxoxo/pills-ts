import React, { useReducer } from "react";
import "./Pill.css";

interface Props {
  term: string;
  breakLine?: boolean;
}
interface State {
  headingMode: boolean;
}
const initValue = {
  headingMode: false
} 
const reducer = (state: State) => ({headingMode: !state.headingMode})

const HEADING_CLASS = "headingMode";
const Pill: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initValue);
  
  const className = `pill ${state.headingMode ? HEADING_CLASS : ""}`.trim();
  return (
    <>
      {props.breakLine ? <br /> : null}
      <div className={className} onClick={() => dispatch()}>
        <span className="heading">H</span>
        {props.term}
      </div>
    </>
  );
};

export default Pill;
