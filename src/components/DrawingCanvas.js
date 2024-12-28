// src/components/DrawingCanvas.js
import React, { useRef } from "react";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    canvas.isDrawing = true;
  };

  const draw = (e) => {
    const canvas = canvasRef.current;
    if (!canvas.isDrawing) return;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    canvas.isDrawing = false;
  };

  return (
    <div className="bg-white shadow-md rounded-md p-5 w-1/2 flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        className="border border-gray-300"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      />
    </div>
  );
};

export default DrawingCanvas;
