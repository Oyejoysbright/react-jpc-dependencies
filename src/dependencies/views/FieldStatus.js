import React, { useEffect } from 'react'
import { MdCheckCircle, MdError } from 'react-icons/md';
import { GiLoad } from 'react-icons/gi';

function FieldStatus({status}) {

    var tag = null;
    switch (status) {
        case "fail":
            tag = <span><MdError className="jpc-error" /> </span>
            break;
        case "success":
            tag = <span><MdCheckCircle className="jpc-success" /></span>
            break;
        case "waiting":
            tag = <span><GiLoad className="jpc-waiting" /> </span>
            break;
        default:
            break;
    }

    useEffect(() => {
        if (status === "error") {
            let next = document.getElementById("fieldStatus").nextElementSibling;
            console.log(next)
            next.className("jpc-field-error");           
       }
    }, [status])

    return (
        <div className="t-right" id="fieldStatus">
            {tag}
        </div>
    )
}

export default FieldStatus
