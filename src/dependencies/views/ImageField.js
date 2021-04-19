import React from 'react';
import PasswordField from './PasswordField';

function ImageField({onChange, src, onBlur, id, className, name, type, data, placeholder, readOnly, required, tag, children,defaultValue, value}) {
    const handleChange =(e)=>{
        onChange(e);
    }
    const handleBlur =(e)=>{
        if(onBlur !== undefined){
            onBlur(e);
        }
    }
    var objRep = null;

    if(typeof src === "string"){
        objRep = <img src={src} alt="input-img" />;
    }else{
        objRep = src;
    }

    var mainTag = null;
    switch (tag) {
        case "i":
            mainTag = <input type={type} 
            id={id}
            className={className}
            placeholder={placeholder} 
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange} />
            break;
        case "s":
            mainTag = <select 
            required={required}
            id={id}
            className={className} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange}>{children}</select>
            break;
        case "t":
            mainTag = <textarea 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name} 
            value={value}
            defaultValue={defaultValue}
            data-type={data}
            readOnly={readOnly}
            onBlur = {handleBlur}
            onChange={handleChange} />
            break;
        case "p":
            mainTag = <PasswordField 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name}
            onBlur = {handleBlur}
            defaultValue={defaultValue}
            readOnly={readOnly}
            data-type={data}
            onChange={handleChange} />
            break;
        default:
            mainTag = <input type={type} 
            placeholder={placeholder} 
            id={id}
            className={className}
            required={required} 
            name={name} 
            data-type={data}
            value={value}
            readOnly={readOnly}
            onBlur = {handleBlur}
            defaultValue={defaultValue}
            onChange={handleChange} />
            
            break;
    }
    
    return(
        <div className="img-form">
            {objRep}
            {mainTag}
        </div>
    );
}

export default ImageField;