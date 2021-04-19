import React, { useEffect, useState } from 'react'
import './Notice.css';

function Notice({message, children, type, effect, effectProperty, noEffect}) {
    const [effectClassName, setEffectClassName] = useState("");
    const [blink, setBlink] = useState(noEffect || "fade-in");
    const txtColor = (type === "danger")? "red": (type === "info")? "blue": (type === "success")?"green": "";

    useEffect(() => {
        setTimeout(() => {
            const cName = (effect === undefined || effect === "")?"static":effect;
            setEffectClassName(cName);        
        }, 500);
        if (blink === "fade-in") {
            setTimeout(() => {
                setBlink("fade-out");
            }, 3000);
        }
        else if(blink === "fade-out") {
            setTimeout(() => {
                setBlink("fade-in");
            }, 1500);
        }
    }, [blink, effect]);

    return (
        <div className={effectClassName + " notice " + blink} style={effectProperty}>
            <em style={{"color": txtColor}}>
                {message || children}
            </em>
        </div>
    )
}

export default Notice
