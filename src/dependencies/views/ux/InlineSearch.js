import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'

function InlineSearch({onChange, name, value, src = [<FiSearch title="Search" />,  <MdClose title="Close" />], width = "200px", className, placeholder = "Search"}) {
    const [isSearching, setSearching] = useState(false);

    const handleClick = () => {
        setSearching(prev => {return !prev});
    }

    return (
        <div className={"jpc inline-search " + className}>
            <div>
            {
                isSearching?
                <>
                    <input placeholder={placeholder} onChange={onChange} name={name} value={value} style={{width: width}} />
                    <span onClick={handleClick}>{src[1]}</span>
                </>
                :
                <span onClick={handleClick}>{src[0]}</span>
            }
            </div>
        </div>
    )
}

export default InlineSearch