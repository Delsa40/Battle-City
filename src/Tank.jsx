import React, { useEffect, useState } from "react";

const Tank = () => {
  const [position, setPosition] = useState({ top: 550, left: 550 });

  const tankSize = 50; 
  const step = 10;

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prev) => {
        const maxWidth = window.innerWidth - tankSize - 10;
        const maxHeight = window.innerHeight - tankSize - 10;

        let newTop = prev.top;
        let newLeft = prev.left;

        switch (event.key) {
          case "ArrowUp":
            newTop = Math.max(prev.top - step, 0);
            break;
          case "ArrowDown":
            newTop = Math.min(prev.top + step, maxHeight);
            break;
          case "ArrowLeft":
            newLeft = Math.max(prev.left - step, 0);
            break;
          case "ArrowRight":
            newLeft = Math.min(prev.left + step, maxWidth);
            break;
          default:
            break;
        }

        return { top: newTop, left: newLeft };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
      <div
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: tankSize,
          height: tankSize,
          backgroundColor: "yellow",
          border: "2px solid #000",
          borderRadius: "5px",
          boxSizing: "border-box",
        }}
      />
  );
};

export default Tank;