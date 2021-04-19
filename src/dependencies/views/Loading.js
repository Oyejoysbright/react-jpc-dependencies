import React from 'react'
import  ReactLoading from 'react-loading';

function Loading({type}) {
    return <ReactLoading type={type || "spinningBubbles"} width="30px" height="30px" color="#08075C" />
}

export default Loading
