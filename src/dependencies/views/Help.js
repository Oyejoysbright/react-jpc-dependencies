import React from 'react'
// import { Consumer } from './../services/Provider';
import { FaQuestionCircle } from 'react-icons/fa';

function Help({message}) {
    // if (message === undefined || message === "") {
    //     throw new Error ("Message must be passed and cannot be empty");
    // }
    const handleShowHelp = (alert) => {
        alert(message || <div>Help message goes here</div>);
    }

    return (
        // <Consumer>
        //     {
        //         ({alert}) => (
        //             <div className="t-right">
        //                 <FaQuestionCircle className="btn-like" color="gray" title="Click to get help about this page" onClick={handleShowHelp.bind(null,alert)} />
        //             </div>
        //         )
        //     }
        // </Consumer>
        <div></div>
    )
}

export default Help
