import React from 'react'
import { HP } from '../../script/HP';
import { Align } from './../layout_settings';

export default function Column({style, classname, children, hAlign=Align.left, vAlign=Align.left}) {

    let custom = {display: "flex", justifyContent: vAlign, alignItems: hAlign, flexDirection: "column"};

    return (
        <div  style={HP.combineStyles(custom, style)} className={classname}>
            {children}
        </div>
    )
}