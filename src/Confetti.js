import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectWindowSize = () => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);

    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowDimensions]);

  return (
    <>
      <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        tweenDuration={1200}
      />
    </>
  );
};

export default Confetti;
