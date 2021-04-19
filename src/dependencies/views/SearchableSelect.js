import React, { useEffect, useState } from 'react'
import { JArrayObject } from '../services/Jpc';

function SearchableSelect({name = String, value = String, dataKey= "name", data = TEST_DATA, onChange = Function}) {

    const [state, setState] = useState({
        dataList: data, focusClassName: "unfocused", [name]: ""
    });

    const handleChange = (e) => {      
        onChange(e)
    }

    const handleClick = (obj = Object) => {
        const value = obj[dataKey];
        const e = {
            target: {
                name: name,
                value: value,
                objectValue: obj
            }
        }
        setState({...state, [name]: value});
        onChange(e);
    }

    const swapFocus = () => {
        switch (state.focusClassName) {
            case "unfocused":
                setState({...state, focusClassName: "focus"});
                break;
            case "focus":
                setTimeout(() => {
                    setState(prev => {return {...prev, focusClassName: "unfocused"}});                    
                }, 300);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (state[name] === "" && data !== state.dataList) {
            setState({...state, dataList: data});
        }
        if (value !== state[name]) {
            setState(prev => {return {...prev, [name]: value, dataList: JArrayObject.search(data, value)}});
        }
        
    }, [data, state.dataList, value, state[name]]);

    return (
        <div>
            <div className="jpc searchable-select">
                <input onFocus={swapFocus} onBlur={swapFocus} name={name} value={state[name]} onChange={handleChange} />
                <ul className={"options "+ state.focusClassName}>
                    {
                        state.dataList.map((obj, index) => (<li title={obj[dataKey]} key={index} onClick={handleClick.bind(null, obj)}>{obj[dataKey]}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchableSelect

const TEST_DATA = [
    {id: 1, name: "Test 1", age: 5},
    {id: 2, name: "Test 2", age: 9},
    {id: 3, name: "Test 3", age: 15},
]