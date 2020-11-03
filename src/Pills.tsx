import React, { useState, useRef, useEffect, useCallback } from "react";
import Pill from "./Pill";

interface Props {
  terms: string[];
}
interface PillObj {
  term: string;
  key: number;
  breakLine?: boolean;
}

const borders = 2, //pill border size
  margins = 10, //pill margins size
  heading = 20; //heading size

  const getPillSize = (child: Element) => {
  const isHeadingMode = child.className.includes("headingMode"),
    buffer = margins + borders + (!isHeadingMode ? heading : 0);
  return child.scrollWidth + buffer;
};

const Pills: React.FC<Props> = (props) => {
  const [pills, setPills] = useState<PillObj[]>(() =>
      props.terms.map((term, key) => Object.assign({ term, key }))
    ),
    pillsRef = useRef<HTMLDivElement>(null);

  const updateComponent = () => {
    const { current } = pillsRef;
    if (current) {
      const { clientWidth }: { clientWidth: number } = current;
      let currentLineSize = 0,
        breakLineIndexes: number[] = [];

      Array.from(current.querySelectorAll(".pill")).forEach((child, i) => {
        const pillSize = getPillSize(child);
        currentLineSize += pillSize;

        if (currentLineSize > clientWidth) {
          currentLineSize = pillSize;
          breakLineIndexes.push(i);
        }
      });
      setPills((prevState) => {
        return prevState.map((pill) => {
          pill.breakLine = breakLineIndexes.includes(pill.key);
          return pill;
        });
      });
    }
  };

  const updateComponentCallback = useCallback(updateComponent, []);
  useEffect(() => {
    updateComponent();
    window.addEventListener("resize", updateComponentCallback);
    return () => window.removeEventListener("resize", updateComponentCallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={pillsRef}>
      {pills.map((pill) => (
        <Pill {...pill} />
      ))}
    </div>
  );
};

export default Pills;
