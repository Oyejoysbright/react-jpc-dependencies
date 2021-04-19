import React, { useState } from 'react'
import { JArray } from '../services/Jpc';

function ArraySelect({name, value, options = [], className, onChange}) {

    const [state, setState] = useState({
        search: "", focusClassName: "unfocused", response: {target: {name: "", value: []}}
    })

    const handleChange = (e) => {
        const val = e.target.value;
        const nam = e.target.name;

        switch (nam) {
            case "search":
                break;
            default:
                const checked = e.target.checked;
                if (checked) {
                    if (!JArray.find.getBoolean(state.response.target.value, val)) {
                        setState(prev => {
                            const response = {target: {name: name, value: prev.response.target.value.concat(val)}};
                            if (onChange) {
                                onChange(response);
                            }
                            return{...prev, response: {...response}}
                        });
                    }
                } else {
                    if (JArray.find.getBoolean(state.response.target.value, val)) {
                        setState(prev => {
                            const response = {target: {name: name, value: JArray.remove(state.response.target.value, val)}};
                            if (onChange) {
                                onChange(response);
                            }
                            return{...prev, response: {...response}}
                        });
                    }
                }
                break;
        }
    }

    const child = (item, index) => {
        return (
            <li key={index}>
                <input type="checkbox" name={item} value={item} onChange={handleChange} /> 
                <span>{item}</span>
            </li>
        )
    }

    const swapFocus = () => {
        switch (state.focusClassName) {
            case "unfocused":
                setState({...state, focusClassName: "focus"});
                break;
            case "focus":
                setState({...state, focusClassName: "unfocused"});
            default:
                break;
        }
    }

    return (
        <div className="jpc array-select">
            <ul onFocus={swapFocus} onBlur={swapFocus}>
                <li><input type="text" name="search" value={state.response.target.value} onChange={handleChange} /></li>
                <div className={"options "+ state.focusClassName} >
                {
                    options.map((item, i) => (child(item, i)))
                }
                </div>
            </ul>
        </div>
    )
}

export default ArraySelect
