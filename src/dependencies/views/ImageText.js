import React from 'react'
function ImageText({children, src, color}) {

    let classid = color !== undefined? "img-text img-text-shape": "img-text"
    return(
        <p className={classid} style={{borderLeftColor: color}}>
            <img src={src} alt="img-text" />
            <span>{children}</span>
        </p>
    );
}

export default ImageText;