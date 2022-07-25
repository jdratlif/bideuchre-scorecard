import React from "react";

interface ScoreDisplayProps {
  score: number;
  change: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, change }) => {
  const scoreColor = score >= 0 ? "text-black" : "text-red-500";
  const changeColor = change >= 0 ? "text-green-700" : "text-red-700";

  return (
    <>
      <span className={`text-4xl font-bold ${scoreColor}`}>
        {Math.abs(score)}
      </span>{" "}
      <span className={changeColor}>{Math.abs(change)}</span>
    </>
  );
};

export default ScoreDisplay;
