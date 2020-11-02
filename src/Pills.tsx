import React, { useState, useRef, useEffect } from "react";
import Pill from "./Pill";

interface Props {
  terms: string[];
}
interface PillObj {
  term: string;
  key: number;
  breakLine?: boolean;
}
interface DOMElement {
  current: HTMLDivElement | null;
}

const Pills: React.FC<Props> = (props) => {
  const [width, setWidth] = useState<number>(() => 0),
    [pills, setPills] = useState<PillObj[]>(() =>
      props.terms.map((term: string, key: number) =>
        Object.assign({ term, key })
      )
    ),
    pillsRef = useRef<HTMLDivElement>(null);

  const updateComponent = () => {
    const { current }: DOMElement = pillsRef;
    if (current) {
      const { clientWidth }: { clientWidth: number } = current,
        borders: number = 2, //pill border size
        margins: number = 10, //pill margins size
        heading: number = 20; //heading size
      let currentLineSize: number = 0,
        breakLineIndexes: number[] = [];

      Array.from(current.querySelectorAll(".pill")).forEach(
        (child: globalThis.Element, i: number) => {
          const isHeadingMode: boolean = child.className.includes(
              "headingMode"
            ),
            buffer: number = margins + borders + (!isHeadingMode ? heading : 0),
            pillSize: number = child.scrollWidth + buffer;
          currentLineSize += pillSize;

          if (currentLineSize > clientWidth) {
            currentLineSize = pillSize;
            breakLineIndexes.push(i);
          }
        }
      );
      setPills((prevState: PillObj[]) => {
        return prevState.map((pill: PillObj) => {
          pill.breakLine = breakLineIndexes.includes(pill.key);
          return pill;
        });
      });
    }
  };

  const updateWidth = () => {
    const { current }: DOMElement = pillsRef;
    if (current) {
      const { clientWidth }: { clientWidth: number } = current;
      setWidth(clientWidth);
    }
  };

  useEffect(() => {
    updateComponent();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  return (
    <div ref={pillsRef}>
      {pills.map((pill) => (
        <Pill {...pill} />
      ))}
    </div>
  );
};

export default Pills;
