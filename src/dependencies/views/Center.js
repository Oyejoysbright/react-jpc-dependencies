import React from 'react'
import { HP } from '../../script/HP'

export default function Center({style, children}) {

    

    return (
        <div style={HP.combineStyles(nStyle, style)}>
            {children}
        </div>
    )
}

const nStyle  = {
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
}

