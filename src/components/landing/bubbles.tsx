"use client";

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
      className="absolute rounded-full bg-slate-950 hover:scale-105 transition-all duration-500 ease-in-out "
      style={{
        translate: `${x}% ${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
      }}
    />
  );
};

const Bubbles = () => {
  return (
    <div className="absolute pointer-events-auto">
      <Bubble x={-50} y={-50} size={900} opacity={0.1} />
      <Bubble x={30} y={30} size={400} opacity={0.1} />
      <Bubble x={200} y={50} size={200} opacity={0.1} />
      <Bubble x={200} y={30} size={600} opacity={0.1} />
      <Bubble x={-30} y={100} size={1000} opacity={0.1} />
    </div>
  );
};

export default Bubbles;
