import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { SHOW_TOOLTIP, HIDE_TOOLTIP } from './tooltipActionReducers';
import './TooltipContent.css';

let dispatcher = null;

export const showToolTip = (data, evt)=> {
    let x = evt.clientX;
    evt.persist();
    evt.currentTarget.addEventListener("mouseout", ()=> {
    
        dispatcher({type: HIDE_TOOLTIP, data: [], position: [evt.clientX, evt.clientY+1]});
    })
   
    if(evt.clientX + 180 > window.innerWidth){
        
        x = evt.clientX - 180;
    }

    dispatcher({type: SHOW_TOOLTIP, data: data, position: [x , evt.clientY]});
}

const mapStateToProps = (state)=>{

    return {
        type: state.tooltip.type,
        data: state.tooltip.data,
        position: state.tooltip.position
    }
}

const mapDispatchToProps = (dispatch)=> {
    dispatcher = dispatch;
    return {};
}

const ToolTipContent = ({data = [], type = HIDE_TOOLTIP, position}) =>{

    let className = type === HIDE_TOOLTIP ? "tooltip tooltip-hide" : "tooltip";
    
    const KeyValueList = ({name = "", value= ""}) => {
        return (
            <li className="tooltip-list">
                <span className="tooltip-name" style={{marginRight: name !== ""? 4 : 0}}>
                {name !== ""? `${name}:`: ""}</span>
                <span className="tooltip-value">{value}</span>
            </li>
        );
    }


    return (
        <ul className={className}
            style={{transform: `translate(${position[0]}px, ${position[1]+5}px)`}}>
            {data.map((e, i) => <KeyValueList key={i} name={e.name} value={e.value} />)}
        </ul>
    )
}


const Tooltip = connect(mapStateToProps, mapDispatchToProps)(ToolTipContent);
export default Tooltip;
