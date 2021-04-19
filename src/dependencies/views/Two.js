import React from 'react'
import { HP } from '../../script/HP'
import { containerChildrenPadding } from '../layout_settings'

export default function Two({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div className="two">
            <div style={HP.combineStyles({custom, style})}>
                {children}
            </div>
        </div>
    )
}
