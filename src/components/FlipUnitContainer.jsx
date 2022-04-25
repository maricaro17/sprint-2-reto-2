import React from "react";
import AnimatedCard from "./AnimatedCard";
import StaticCard from "./StaticCard";

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  /* digito actual y digito anterior */
  let currentDigit = digit;
  let previousDigit = digit + 1;

  if (unit !== "hours") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // shuffle animations
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className="flipUnitContainer">
      <StaticCard position="upperCard" digit={currentDigit} />
      <StaticCard position="lowerCard" digit={previousDigit} />
      <AnimatedCard animation={animation1} digit={digit1}/>
      <AnimatedCard animation={animation2} digit={digit2}/>
      <p className="label">{unit}</p>
    </div>
  );
};

export default FlipUnitContainer;
