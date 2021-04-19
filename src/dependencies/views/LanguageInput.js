import React from 'react'

function LanguageInput({name, value, onChange}) {
    
    const options = (obj, i) => {
        return (
            <optgroup key={i} label={obj.country}>
              {
                obj.data.map((item, j) => (
                  <option value={item} key={j}>{item}</option>                  
                ))
              }
            </optgroup>
        );
    }
    return (
        <div className="jpc">
            <div className="content-center-middle">
            <select name={name} value={value} onChange={onChange}>
            {
                data.map((obj, i) => {return options(obj, i)})
            }
            </select>
            </div>
        </div>
    )
}

export default LanguageInput

const data = [
                {
                    country: "Afghanistan",
                    data: ["Pashtu", " Dari"," Hazaragi"]
                },
                {
                    country: "Albania",
                    data: ["Tosk "," Greek"]
                },
                {
                    country: "Algeria",
                    data: ["Arabic"," French", " Berber "]
                },
                {
                    country: "Angola",
                    data: ["Portuguese"," Bantu "]
                }
            ]