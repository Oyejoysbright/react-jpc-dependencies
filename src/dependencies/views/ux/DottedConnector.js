import React from 'react'

function DottedConnector({transform, type, position = "fixed", top = "50vh", right, bottom, left, location = Array, width, height, opacity = 0.3, zIndex = -10}) {

    switch (type) {
        case Type.Big:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/dotted-connectors-100.png")'}}>
                </div>
            );
        case Type.Medium:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "75px", height: height || "75px", backgroundImage: 'url("/joysbright/dotted-connectors-75.png")'}}>
                </div>
            );
        case Type.Small:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "50px", height: height || "50px", backgroundImage: 'url("/joysbright/dotted-connectors-50.png")'}}>
                </div>
            );
        case Type.ExtraSmall:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "25px", height: height || "25px", backgroundImage: 'url("/joysbright/dotted-connectors-25.png")'}}>
                </div>
            );
        default:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/dotted-connectors.png")'}}>
                </div>
            )
    }
}

export default DottedConnector

export const Type = {
    Big: "big",
    Medium: "medium",
    Small: "small",
    ExtraSmall: "xSmall"
}
