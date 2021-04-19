import React from 'react'

function ImageView({imageWidth, children, style, imageStyle, src, alt}) {

    return (
        <div  style={{...styles.container, ...style}}>
            {
                typeof src === "string"?
                    <img width={imageWidth} style={{...imageStyle, ...styles.image}} src={src} alt={alt || "alt"} />
                : src
            }
            {children}
        </div>
    )
}

export default ImageView

const styles = {
    container: {
        display: "flex",    
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        borderRadius: "100%",
        marginBottom: "5px"
    }
}