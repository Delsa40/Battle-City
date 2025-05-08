import React from "react";

function Block({position_top , position_left}) {

    return(
        <div id="block" style={{

            position: "absolute",
            top: position_top,
            left: position_left,
            margin: "0",
            width: "50px",
            height: "50px",
            backgroundColor: "brown",

        }}>
        </div>
    )
}

export default Block;