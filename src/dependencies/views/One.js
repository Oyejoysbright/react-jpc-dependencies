import React from 'react'
import { HP } from '../../script/HP'
import { containerChildrenPadding } from '../layout_settings'

export default function One({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div className="one">
            <div style={HP.combineStyles(custom, style)}>
                {children}
            </div>
        </div>
    )
}
