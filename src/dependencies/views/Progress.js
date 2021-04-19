import React, { useEffect, useState } from 'react'
import './Progress.css';

function Progress({title, id, percentage, sub}) {
    const[className, setClassName] = useState("normal");
    const[value, setValue] = useState(0);

    percentage = parseInt(percentage);
    useEffect(() => {
        setValue(percentage);
        if (percentage === 0) {
            setClassName("normal");
        }
        else if (percentage < 0 || percentage <= 25) {
            setClassName("bad");
        }
        else if (percentage > 25 && percentage <= 50) {
            setClassName("average");
        }
        else if (percentage > 50 && percentage <= 75) {
            setClassName("good");
        }
        else if (percentage > 75 && percentage <= 100) {
            setClassName("very-good");
        }
    }, [percentage]);

    return (
        <div className={"progress-container"} id={id}>
            <div>
                <div className={"loader " + className} style={{"width": value+"%"}} >
                    <span className="title">{title}</span>
                    <span className="sub">{sub || value + "%"}</span>
                </div>
                {/* <div className="content">
                    <span className="title">{title}</span>
                    <span className="sub">{sub || percentage + "%"}</span>
                </div> */}
            </div>
        </div>
    )
}
export default Progress
