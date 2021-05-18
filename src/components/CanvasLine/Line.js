import React, { useEffect, useRef } from "react";

export const Line = ({ left, right }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    const line = context.createLinearGradient(20, 0, 80, 0);
    if (left) {
      line.addColorStop(1, "#D6D2D5");
      line.addColorStop(0, "#F0F9FB");
    }
    if (right) {
      line.addColorStop(0, "#D6D2D5");
      line.addColorStop(1, "#F0F9FB");
    }
    context.fillStyle = line;
    context.fillRect(0, 0, 100, 2);
  }, []);

  return <canvas ref={canvasRef} width="100" height="2"></canvas>;
  
};
