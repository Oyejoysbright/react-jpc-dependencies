import React from 'react'
import { HP } from '../../script/HP'
import { containerChildrenPadding } from '../layout_settings'

export default function FourOne({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div className="four-one">
            <div style={HP.combineStyles(custom, style)}>
                {children}
            </div>
        </div>
    )
}
