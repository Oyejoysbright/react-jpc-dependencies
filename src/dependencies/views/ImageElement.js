import React, { useEffect, useState } from 'react';

function ImageElement(props) {
    

    const [classProp, setClassProp] = useState({icon: "", classname: "img-btn", style: {}});
    const elementonClick = (e)=>{
        const ele = (e.target.className.includes("img-btn") === true)?e.target: e.target.parentNode;
        if(props.onClick !== undefined){
            props.onClick(ele, props);
        }
    }

    useEffect(()=>{
       let icon = (props.icon !== undefined)?props.icon:"";
       let classname = (props.className !== undefined)?`img-btn ${props.className}`:"img-btn";
       let style = (props.style !== undefined)?props.style:{};

        setClassProp({icon: icon, classname:classname, style: style});
    },[props.icon, props.className, props.style]);

    
    return(

        <div className={classProp.classname} style={classProp.style} onClick={elementonClick} >
            <img src={classProp.icon} alt=""/>
            <span>{props.children}</span>
        </div>
    );
}

export default ImageElement;