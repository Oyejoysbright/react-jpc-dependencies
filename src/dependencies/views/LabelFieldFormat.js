import React from 'react'

function LabelFieldFormat({children, on, className, label, src}) {
    let classname = className === undefined ? "label-field" : `${className} label-field`;
    return (
        <div className={classname + " label-field-format joysbright"}>
            {label !== (undefined || "")?<label><span>{on !== undefined ? "*" : ""}</span>{label}</label>:null}
            <div className="label-field-format"> {children} {src} </div>
        </div>
    )
}

export default LabelFieldFormat
