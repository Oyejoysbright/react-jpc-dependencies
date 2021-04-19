import React from 'react'

function Header({children, className, style}) {
    return (
        <div className={"jpc layout " + className} style={style}>
            <div className="header">
                <div>{children[0]}</div>
                <div>{children[1]}</div>
            </div>
        </div>
    )
}

export default Header