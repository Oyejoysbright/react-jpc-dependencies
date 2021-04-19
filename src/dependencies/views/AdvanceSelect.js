import React from 'react'
import './AdvanceSelect.css';
import { JArrayObject, JContent } from '../services/Jpc';
import { MdClear } from 'react-icons/md';

function AdvanceSelect({label, ref, className, on, placeholder, src, onChange, name, value, children, id, data, dataKey, src2, readOnly}) {
    
let classname = className === undefined ? "label-field" : `${className} label-field`;

//For the icon
var icon = null;
if(typeof src === "string"){
    icon = <img src={src} alt="input-img" />;
}else{
    icon = src;
}

var icon2 = null;
if(typeof src2 === "string"){
    icon2 = <img src={src2} alt="img" />;
}else{
    icon2 = src2;
}

let response = {
    target: {
        name: name,
        value: null
    }
}

const handleChange = (e) => {
    let value = e.target.value.split(",");
    if (JContent.equalsIgnoreCase(dataKey, "id")) {
        value[0] = parseInt(value[0]);
    }
    if (JArrayObject.find.getBoolean(data, value[0], dataKey)) {
        e.target.value = value[1];
        response.target.value = value[0];
        onChange(response);
    }
}

const onClear = (e) => {
        e.target.parentElement.firstElementChild.value = "";
        onChange(response);
}

var tag = null;

if (value === "" || undefined) {
    tag = <input list={id[0]} name={name} ref={ref} id={id[1] || name} onChange={handleChange} placeholder={placeholder} autoComplete="off" readOnly={readOnly} />
} else {
    tag = <input list={id[0]} name={name} ref={ref} id={id[1] || name} value={value} onChange={handleChange} placeholder={placeholder} autoComplete="off" readOnly={readOnly} />
}

    return (
        <div className={classname}>
        <label><span>{on !== undefined ? "*" : ""}</span>{label}</label>
            <div className="adv-content">
                <div>
                    {icon}
                    {tag}
                    {children}
                    <MdClear title="Clear content" onClick={onClear} />
                </div>
                {icon2}
            </div>
        </div>
    )
}

export default AdvanceSelect


                        