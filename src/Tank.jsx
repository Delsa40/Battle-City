import React, { useEffect, useState } from "react";

const Tank = () => {
  const [position, setPosition] = useState({ top: 550, left: 550 });
  const [rotation, setRotation] = useState(0);
  const [displayBullet, setDisplayBullet] = useState("none");
  const [bulletMoving, setBulletMoving] = useState(0);

  const tankSize = 50;
  const step = 10;
  let newRotation = rotation;

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
            newRotation = 0;
            break;
          case "ArrowDown":
            newTop = Math.min(prev.top + step, maxHeight);
            newRotation = 180;
            break;
          case "ArrowLeft":
            newLeft = Math.max(prev.left - step, 0);
            newRotation = 270;
            break;
          case "ArrowRight":
            newLeft = Math.min(prev.left + step, maxWidth);
            newRotation = 90;
            break;
          default:
            return prev;
        }

        setRotation(newRotation);
        return { top: newTop, left: newLeft };
      });

      if(event.code === "Space"){
        setDisplayBullet("block");
        setBulletMoving();
      }
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
        borderRadius: "5px",
        boxSizing: "border-box",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div id="contenedor" style={{

        display: "flex",
        justifyContent: "space-between",

      }}>
        <div className="separadorCanion" style={{

          width: "20px",
          height: "10px",
          backgroundColor: "#141414",

        }}>

        </div>
        <div className="separadorCanion" style={{

          width: "20px",
          height: "10px",
          backgroundColor: "#141414",

        }}>

        </div>
      </div>

      <div id="bullet" style={{

        display: displayBullet,
        position: "absolute",
        top: "0px",
        left: "20px",
        width: "10px",
        height: "10px",
        backgroundColor: "#fff",

      }}>

      </div>
    </div>
  );
};

export default Tank;