import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const availableStyleKey = {
    container: {},
    titleContainer: {},
    icon: {},
    title: {},
    children: {}

}

function TreeView({title, children, style = availableStyleKey, className, icon}) {
    
    const [state, setState] = useState({isCollapsed: false});

    const handleClick = () => {
            setState(prev => {return {...prev, isCollapsed: !prev.isCollapsed}});
    }

    return (
        <div style={{...styles.container, ...style.container}} className={className}>
            <div style={{...styles.titleContainer, ...style.titleContainer}} >
                <span style={{...styles.icon, ...style.icon}} title={state.isCollapsed?"Expand":"Collapse"} className={state.isCollapsed?"jpc-rotate-0deg":"jpc-rotate-45deg"} onClick={handleClick}>{icon || <FaArrowRight style={{...styles.icon, ...style.icon}} />}</span>
                <span style={{...styles.title, ...style.title}}>{title}</span>
            </div>
            {
                state.isCollapsed? null : <div style={{...styles.children, ...style.children}} >{children}</div>
            }
        </div>
    )
}

export default TreeView

const styles = {
    container: {
        transition: 'ease-in-out .5s'
    },
    icon: {
        width: "20px",
        height: "20px",
        cursor: 'pointer',
        transition: 'ease-in-out .3s',
    },
    titleContainer: {
        display: 'flex',
        backgroundColor: 'rgba(160, 159, 159, 0.2)',
        height: 'auto',
        lineHeight: 'auto',
        padding: '5px',
        marginBottom: '2px',
        borderRadius: '5px',
        transition: 'ease-in-out .5s'
    },
    title: {
        marginLeft: '10px',
    },
    children: {
        marginLeft: '30px',
        padding: '5px',
        backgroundColor: '#fbfbfb',
        borderRadius: '5px',
        transition: 'ease-in-out .5s'
    },

}