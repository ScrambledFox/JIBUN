import React from "react";

const Bubble = ({
  x,
  y,
  size,
  opacity = 0.1,
}: {
  x: number;
  y: number;
  size: number;
  opacity?: number;
}) => {
  return (
    <div
      className="absolute rounded-full bg-slate-950 hover:scale-105 transition-all duration-500 ease-in-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${y}px`,
        left: `${x}px`,
        opacity: opacity,
      }}
    />
  );
};

const Bubbles = () => {
  return (
    <div className="absolute">
      <Bubble x={-500} y={-400} size={900} opacity={0.1} />
      <Bubble x={700} y={100} size={600} />
      <Bubble x={300} y={300} size={200} />
      <Bubble x={375} y={450} size={100} />
    </div>
  );
};

export default Bubbles;
