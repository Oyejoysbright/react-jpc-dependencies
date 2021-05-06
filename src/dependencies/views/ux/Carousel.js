import React, { useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function Carousel({delay = 0, className = "", children = [], buttons = [<IoIosArrowBack />, <IoIosArrowForward />]}) {

    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(prev => {return prev-1});
    }

    const handleNext = () => {
        setCurrent(prev => {return prev+1});
    }

    return (
        <div className={className + " jpc carousel"}>
            {children.length > 1 && current > 0? <div className="prev" onClick={handlePrev}>{buttons[0]}</div> : null}
            {children.length > 1 && current <= children.length? <div className="next" onClick={handleNext} >{buttons[1]}</div> : null}
            <div>{children[current]}</div>
        </div>
    )
}

export default Carousel

export function View({children, className}){

    return(
        <div className={className}>

        </div>
    )
}