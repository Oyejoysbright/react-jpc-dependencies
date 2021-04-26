import React from 'react'

function RadialDot({transform, type, position = "fixed", top, right, bottom, left, location = Array, width, height, opacity = 0.3, zIndex = -10}) {

    switch (type) {
        case RadialDotType.Big:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/radial-dot-100.jpg")'}}>
                </div>
            );
        case RadialDotType.Medium:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "75px", height: height || "75px", backgroundImage: 'url("/joysbright/radial-dot-75.jpg")'}}>
                </div>
            );
        case RadialDotType.Small:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "50px", height: height || "50px", backgroundImage: 'url("/joysbright/radial-dot-50.jpg")'}}>
                </div>
            );
        case RadialDotType.ExtraSmall:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "25px", height: height || "25px", backgroundImage: 'url("/joysbright/radial-dot-25.jpg")'}}>
                </div>
            );
        default:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0] || 0, right: right || location[1], bottom: bottom || location[2], left: left || location[3] || 0, width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/radial-dot-100.jpg")'}}>
                </div>
            )
    }
}

export default RadialDot

export const RadialDotType = {
    Big: "big",
    Medium: "medium",
    Small: "small",
    ExtraSmall: "xSmall"
}
