import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Dropdown from './layout/Dropdown';

function NavLink({className, style, children}) {
    return (
        <nav className={"jpc nav " + className} style={style}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavLink

export function NLink({className, hoverClassName, style, children, sub, src = <MdArrowDropDown />, width = "250px"}) {
    const [isHover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(prev => {return !prev});
    }

    const getDropDown = () => {
        if(Array.isArray(sub)) {
            return <Dropdown src={src} title={children} minWidth={width}>
                    {
                        sub.map((obj, i) => (<NLink key={i} sub={obj.sub} className="nav-link" ><Link to={obj.to}>{obj.label}</Link></NLink>))
                    }
                </Dropdown>;
        }
        else return null;
    }

    return (
        <li className={className + isHover? hoverClassName : null} onMouseLeave={handleMouseOver} onMouseEnter={handleMouseOver} style={style}>
            {
                Array.isArray(sub)? getDropDown() : children
            }
            
        </li>
    )
}

export function SubLink() {
    return (
        <> </>
    )
}