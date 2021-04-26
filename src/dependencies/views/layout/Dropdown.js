import React from 'react'

function Dropdown({title, content, children, className, titleClassName, dropdownClassName, src, minWidth = "200px"}) {
    return (
        <div className={"jpc dropdown "+className}>
            <span className={titleClassName}>{title}{src}</span>
            <div className={dropdownClassName} style={{minWidth: minWidth}}>{content || children}</div>
        </div>
    )
}

export default Dropdown