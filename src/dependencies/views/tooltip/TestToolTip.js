import React from 'react'
import { showToolTip } from './Tooltip'
// import TooltipWrapper from './TooltipWrapper'
/* <TooltipWrapper>
                <div onClick={()=>console.log("yee")} title="dghdh" style={{color: "red"}}>
                    <span>easy tip</span>
                </div>
            </TooltipWrapper>
            <TooltipWrapper>
                <option>options</option>
            </TooltipWrapper> */
export default function TestToolTip() {

    
    return (
        <div>
            
            <div style={{height: 80}}></div>

            <div onMouseOver={showToolTip.bind(null, [{name: "Author", value: "Ayodeji"}])}>Showtool Ayodeji</div>

            <div style={{height: 80}}></div>

            <div style={{height: 80}}></div>

            <div onMouseOver={showToolTip.bind(null, [{name: "Author", value: "Peter"},
            {name: "Created On", value: "12-05-2020"},
            {name: "Created On", value: "12-05-2020"},
            {name: "Created On", value: "12-05-2020"} ])}>Showtool Peter</div>
        </div>
    )
}
