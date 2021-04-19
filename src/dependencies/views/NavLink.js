import React, { useState } from 'react'

function NavLink({className, style, children}) {
    return (
        <div className={"jpc nav " + className} style={style}>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default NavLink

export function NLink({className, hoverClassName, style, children, dropdown = false}) {
    const [isHover, setHover] = useState(false);
    const handleMouseOver = () => {
        setHover(prev => {return !prev});
    }
    return (
        <li className={className + isHover? hoverClassName : null} onMouseLeave={handleMouseOver} onMouseEnter={handleMouseOver} style={style}>
            {children}
        </li>
    )
}