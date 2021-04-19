import React from 'react'
import { HP } from '../../script/HP'
import { containerChildrenPadding } from '../layout_settings'

export default function LayoutContainer({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div style={HP.combineStyles(custom, style)}>
            <div className="container">
                    {children}
            </div>
        </div>
    )
}
