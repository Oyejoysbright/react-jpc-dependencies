import React, { useState, useEffect } from 'react';

function Switch(props) {
    
    var left = (props.xs !== undefined)?["2.5px", "20px"]:["5px", "40px"];
    var classname = (props.xs !== undefined)? "HPradio HPradio-xs": "HPradio";
    const defaultStyle = {backgroundColor: "#eef0ee", left: left[0]};
    // const activeStyle = {backgroundColor: "#ddffdd", left: left[1]};
    const activeStyle = {backgroundColor: "#0a066f", left: left[1]};
    const vals = props.values !== undefined? props.values: ["yes", "no"];

    const [state, setState] = useState(false);
    const [style, setStyle] = useState(defaultStyle);
    const [value, setValue] = useState(vals[1]);


    const onSwitch =()=>{
        var pState = state;
        setState(state => {

            pState = !state;
            
            return pState;

            });

        if(!state){
            setStyle(activeStyle);
            setValue(vals[0]);
        }else{
            setStyle(defaultStyle);
            setValue(vals[1]);
        }
        
    }

    useEffect(()=>{
        props.onClick(state);
    });

    return(
       
            <>
                <div 
                className={classname} 
                style={{backgroundColor: style.backgroundColor}} 
                id={props.id}>
                    <div onClick={onSwitch} style={{left: style.left}}></div>
                    
                </div>
                <span className="HpradioText">{props.values !== undefined? value: ""}</span>
            </>    
      
    );
}
export default Switch;