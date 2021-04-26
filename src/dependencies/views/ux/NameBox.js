import React from 'react'

function NameBox({title = "name", subtitle = "subtitle", className, position = "fixed", top = "50vh", transform, right, bottom, left, location = Array, width, height, opacity = 0.3, zIndex = -10}) {
    return (
        <div className={className + " jpc name-box"} style={{position: position, transform: transform, opacity: opacity, zIndex: zIndex, top: top || location[0], right: right || location[1], bottom: bottom || location[2], left: left || location[3], width: width || "100px", height: height || "100px"}}>
            <div>
                {title}                
            </div>
            <div>
                {subtitle}                
            </div>
        </div>
    )
}

export default NameBox
