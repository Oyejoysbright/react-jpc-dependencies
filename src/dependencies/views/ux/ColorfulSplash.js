import React from 'react'

function ColorfulSplash({transform, type, position = "fixed", top, right, bottom, left, location = Array, width, height, opacity = 0.3, zIndex = -10}) {
    switch (type) {
        default:
            return (
                <div style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px", backgroundImage: 'url("/joysbright/colorful-splash.png")'}}>
                </div>
            )
    }
}

export default ColorfulSplash
