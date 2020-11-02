import React, { useState } from "react";
import Pill from "./Pill";

interface Props {
  terms: string[];
}
interface State {
  term: string;
  key: number;
  breakLine: boolean;
}

const Pills: React.FC<Props> = (props) => {
  const [pills, setPills] = useState<State[]>(() =>
    props.terms.map((term: string, key: number) => Object.assign({ term, key }))
  );

  return (
    <div>
      {pills.map((pill) => (
        <Pill {...pill} />
      ))}
    </div>
  );
};

export default Pills;
