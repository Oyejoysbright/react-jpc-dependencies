import React, { useEffect } from 'react';

function LoadingBar({show}){

    useEffect(()=>{
        if(show === undefined){
            throw new Error("LoaderError: props.show is undefined.");
        }
    });

    return (
        
        <div className="loading-bar" style={{opacity: show===true || show === 1?1:0}}>
            <div></div>
        </div>
    );
}

export default LoadingBar;