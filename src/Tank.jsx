import { useEffect, useState } from "react";

const Tank = () => {
  const [position, setPosition] = useState({ top: 550, left: 550 });
  const [rotation, setRotation] = useState(0);
  const [bullets, setBullets] = useState([]);

  const tankSize = 50;
  const step = 10;

  const fireBullet = () => {
    const tankCenterX = position.left + tankSize / 2 - 5;
    const tankCenterY = position.top + tankSize / 2 - 5;
    const offset = 30;

    let bulletX = tankCenterX;
    let bulletY = tankCenterY;

    switch (rotation) {
      case 0:
        bulletY -= offset;
        break;
      case 180:
        bulletY += offset;
        break;
      case 90:
        bulletX += offset;
        break;
      case 270:
        bulletX -= offset;
        break;
      default:
        break;
    }

    const bullet = {
      id: Date.now(),
      x: bulletX,
      y: bulletY,
      angle: rotation,
    };

    setBullets((prev) => [...prev, bullet]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();

      setPosition((prev) => {
        const maxWidth = window.innerWidth - tankSize;
        const maxHeight = window.innerHeight - tankSize;

        let newTop = prev.top;
        let newLeft = prev.left;
        let newRotation = rotation;

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
          case " ":
          case "Spacebar":
          case "Space":
            fireBullet();
            break;
          default:
            return prev;
        }

        setRotation(newRotation);
        return { top: newTop, left: newLeft };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, rotation]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets
          .map((b) => {
            let dx = 0,
              dy = 0;
            switch (b.angle) {
              case 0:
                dy = -5;
                break;
              case 180:
                dy = 5;
                break;
              case 90:
                dx = 5;
                break;
              case 270:
                dx = -5;
                break;
              default:
                break;
            }

            const newX = b.x + dx;
            const newY = b.y + dy;

            const bulletSize = 10;
            if (
              newX < -bulletSize ||
              newX > window.innerWidth + bulletSize ||
              newY < -bulletSize ||
              newY > window.innerHeight + bulletSize
            ) {
              return null;
            }

            return { ...b, x: newX, y: newY };
          })
          .filter(Boolean)
          
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Tanque */}
      <div
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: tankSize,
          height: tankSize,
          backgroundColor: "yellow",
          borderRadius: "5px",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {/* Decoración del tanque */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "10px",
              backgroundColor: "#141414",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "10px",
              backgroundColor: "#141414",
            }}
          />
        </div>
      </div>

      {/* Balas */}
      {bullets.map((b) => (
        <div
          key={b.id}
          className="bullet"
          style={{
            position: "absolute",
            top: b.y,
            left: b.x,
            width: "10px",
            height: "10px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

export default Tank;
