import React, { useState, useEffect } from 'react'
import { GoArrowLeft, GoPlus } from 'react-icons/go';
import './AdvanceView.css';

function AdvanceView({children, title, changeView, unitary}) {
    const[views] = useState([]);
    const[tp, setTp] = useState(null);
    const[tb, setTb] = useState(null);


    const [current, setCurrent] = useState( changeView || 0);
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
        children.forEach(element => {
            if (element.type.name === "View") {
                views.push(element);
            }
            else if(element.type.name === "TitlePartner") setTp(element);
            else if(element.type.name === "TitleBar") setTb(element);
        });
        console.log(views)
    }, [title, u_title, views, children]);
    
    return (
        <div className="jpc advance-view">
            {tb}
            <div>
                <div className="container">
                    <div className="four-one">
                        <div className="title-container">
                            <span className="title">{title} </span>
                            {
                                unitary === undefined?
                                <span className={current === 0? "right icon" : "icon"}>
                                    {
                                        (current === 0)?
                                            <GoPlus onClick={handleViewSwitch} title="Click to show form" />
                                        :
                                            <GoArrowLeft onClick={handleViewSwitch} title="Click to go back to list"/>
                                    }
                                </span> : null
                            }
                        </div>
                    </div>
                    <div className="one-four">
                        <div>
                            { tp }
                        </div>
                    </div>
                </div>
            </div>
            <div className={"children simple-anim " + anim}>
                { views[current] }
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

export function TitleBar({children}) {
    return(
        <div>
            {children}
        </div>
    )
}
export function SingleProduct(params) {
    
}