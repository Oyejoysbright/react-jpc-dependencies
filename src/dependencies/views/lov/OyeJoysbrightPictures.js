import React from 'react'

function OyeJoysbrightPictures({transform, type, position = "fixed", top = "50vh", right, bottom, left, location = Array, width, height, opacity = 0.3, zIndex = -10}) {
    
    switch (type) {
        case PictureType.suite:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/jsuite.png")'}}>
                </div>
            );
        case PictureType.ashTurtle:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/ash-turtle.png")'}}>
                </div>
            );
        case PictureType.brownTurtle:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/brown-turtle.png")'}}>
                </div>
            );
        default:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/jsuite-400.png")'}}>
                </div>
            );
            break;
    }
}

export default OyeJoysbrightPictures

export const PictureType = {
    suite: "suite",
    brownTurtle: "brownTurtle",
    ashTurtle: "ashTurtle"
}