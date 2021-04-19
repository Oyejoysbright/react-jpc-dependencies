import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function Selector({values = [], name, value, onChange, className}) {

    let defValue = value === undefined ? values[0] : values.indexOf(value) >=0? value : values[0];
  
    const [inpVal, setInpVal] = useState(defValue);
    
    const handleSelect = (e) => {
        let option = e.target.id;
        setInpVal(option);

        let obj = {
            target:{
                name: name,
                value: option
            }
        }

        onChange(obj);
    }

    return (
        <div className={className}>
            <ul className="rad-selector-list">{
                values.map((list, i) => {
                    return list === inpVal ? 
                    <li key={i} className="rad-selector-active" id={list} onClick={handleSelect}>{list}</li> : 
                    <li key={i} onClick={handleSelect} id={list}>{list}</li>
                })
            }</ul>
            <input type="hidden" name={name} value={inpVal} />
        </div>
    );
}

Selector.propTypes = {
    values: PropTypes.array.isRequired
}

export default Selector;