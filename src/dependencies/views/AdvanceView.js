import React, { useState, useEffect } from 'react'
import { GoArrowLeft, GoPlus } from 'react-icons/go';
import './AdvanceView.css';

function AdvanceView({children, color, title, changeView, subtitle = [], disabled}) {


    const [current, setCurrent] = useState(changeView || 0);
    const [u_title, setU_title] = useState(title);
    const [anim, setAnim] = useState("slide-right");

    const handleViewSwitch = () => {
        if (current === 0) {
            setCurrent(1);        
        } else {
            setCurrent(0);     
        }
        setAnim("slide-right");
    }
 
    if (anim !== "slide-left") {
        setTimeout(() => {
            setAnim("slide-left");            
        }, 200);        
    }

    useEffect(() => {
        if (u_title.toString() !== title.toString()) {
            setU_title(title);
        }
    }, [title, u_title]);
    
    return (
        <div className="jpc advance-view">
            <div className="container">
                <div className={"four-one"}>
                    <div className="title-container">
                        <span className="title">{title} </span>
                        { disabled === undefined || disabled === false ?
                        <span onClick={handleViewSwitch} style={color? {backgroundColor: color} : null} className={current === 0? "right icon" : "icon"}>
                            {
                                (current === 0)?
                                    <GoPlus title="Click to show form" />
                                :
                                    <GoArrowLeft  title="Click to go back to list"/>
                            }
                        </span> : null
                        }
                    </div>
                </div>
                <div className={"one-four"}>
                    <div>
                        {
                            (children.length > 2)? children[0] : null
                        }
                    </div>
                </div>
            </div>
                <h3>  
                {
                    (subtitle.length > 2)? subtitle[current+1] : subtitle[current]
                }
                </h3>
            <div className={"children simple-anim " + anim}>
                {
                    (children.length > 2)? children[current+1] : children[current]
                }
            </div>
        </div>
    )
}

export default AdvanceView

export function View({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export function TitlePartner({children}) {
    return(
        <div>
            {children}
        </div>
    )
}

export function SinglePageView({children, title, subtitle = ""}) {

    const [u_title, setU_title] = useState(title);
    const [anim, setAnim] = useState("slide-right");

    if (anim !== "slide-left") {
        setTimeout(() => {
            setAnim("slide-left");    
        }, 200);      
    }

    useEffect(() => {
        if (u_title.toString() !== title.toString()) {
            setU_title(title);
        }
    }, [title, u_title]);
    
    return (
        <div className="jpc advance-view">
            <div className="container">
                <div className={"four-one"}>
                    <div className="title-container">
                        <span className="title">{title} </span>
                    </div>
                </div>
                <div className={"one-four"}>
                    <div>
                        {
                            (children.length > 1)? children[0] : null
                        }
                    </div>
                </div>
            </div>
            <h3>{subtitle}</h3>
            <div className={"children simple-anim " + anim}>
                {
                    (children.length > 1)? children[1] : children[0]
                }
            </div>
        </div>
    )
}