import React from "react";

function TreeBlock() {

    return (

        <div style={{

            position: "absolute",
            top: "400px",
            left: "350px",
            width: "50px",
            height: "50px",
            backgroundColor: "green",
            zIndex: "100",
            maskImage: "radial-gradient(circle 50px at center, transparent 0%, black 20%)",
            webKitMaskImage: "radial-gradient(circle 100px at center, transparent 0%, black 20%)",

        }}>
        </div >

    )

};

export default TreeBlock;