import React from 'react'
import './GroupField.css'

function GroupField({title, id, className, innerClassName, sub, children}) {
    return (
        <div>
            <div className={"group-field-container " + className || ""} id={id}>
                <div className={innerClassName}>
                    <span className="title">{title}</span>
                    <span className="sub">{sub}</span>
                </div>
            </div>
            {children}
        </div>
    )
}

export default GroupField
