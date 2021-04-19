import React, { useState, useEffect } from 'react';
import  ReactLoading from 'react-loading';

function RigidLoading({active = false, content, type, useDefault = false}) {
    const[className, setClassName] = useState("hide slide-down");

    useEffect(() => {
        if (active && className !== "show slide-up") {
            setClassName("show slide-up");
        }
        else if (!active && className !== "hide slide-down") {
            setClassName("hide slide-down");
        }
    }, [active, className]);

    return (
        <div className="rigid-loading jpc">
            {
                (!useDefault)?
                <div className={"content-center-middle cover-bg " + className}>
                {content || <ReactLoading type={type || "spinningBubbles"} width="5%" height="5%" color="#08075C" /> }
                </div>                
                :
                <div className={"content-center-middle cover-bg " + className}>
                <ReactLoading type={type || "spinningBubbles"} width="5%" height="5%" color="#08075C" /> {content} 
                </div>
            }
        </div>
    )
}

export default RigidLoading
