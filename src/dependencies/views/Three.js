import React from 'react'
import { HP } from '../../script/HP'
import { containerChildrenPadding } from '../layout_settings'

export default function Three({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div className="three">
            <div style={HP.combineStyles(custom, style)}>
                {children}
            </div>
        </div>
    )
}

