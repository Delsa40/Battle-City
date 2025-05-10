import React from "react";

function Enemy(){

    return(
        <div
      style={{
        position: "absolute",
        top: "400px",
        left: "400px",
        width: "50px",
        height: "50px",
        backgroundColor: "lightgrey",
        borderRadius: "5px",
        boxSizing: "border-box",
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

    </div>
    )

}

export default Enemy;