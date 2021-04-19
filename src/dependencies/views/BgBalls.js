import React from 'react';

function BgBalls() {
    
    return(
        <React.Fragment>
            <div className="ball-bg blue" style={styles.ballBlue}></div>
            <div className="ball-bg red" style={styles.ballRed}></div>
        </React.Fragment>
    );
}

export default BgBalls;

const styles = {
    ballBlue: {
        width:"600px",
        height: "600px",
        borderRadius: "50%",
        backgroundColor: "#dee5f73a",
        position: "fixed",
        right:"-5%",
        top:-"55%"
    },
    ballRed: {
        width:"600px",
        height: "600px",
        borderRadius: "50%",
        position: "fixed",
        right: "-25%",
        top: "-20%",
        backgroundColor: "#f7e3de3a",
    }
}
