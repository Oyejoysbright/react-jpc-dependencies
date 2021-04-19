import React from 'react'

function EducationSystemInput({onChange, name, value}) {
    
    const options = (obj, i) => {
        let data = [];
        for (const key in obj.data) {
          data.push(key);
        }
        return (
            <optgroup key={i} label={obj.country}>
              {
                data.map((item, j) => (
                  <option value={obj.data[item]} key={i}>{item + " -> " + obj.data[item]}</option>                  
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

export default EducationSystemInput

const data = [
    {
        "country": "Canada", 
        data: {
                "Alberte":               [6,3,3],
                "Monitoba":              [5,4,4],
                "british":               [8,3,2],
                "Northwest Territories": [6,3,3],
                "Nunavut":               [6,3,3],
                "New/Nouveau-Brunswick": [9,6,3,4,4],
                "Terre Newfounded Labrador": [4,3,3,3],
                "Nova Scotia":               [7,3,3],
                "Ontario":                   [6,4],
                "Prince Edward Island":      [6,3,3],
                "Quebec / Québec":           [6,5],
                "Saskatchewan":              [6,4,3],
                "Yukon":                     [7,5]
            }
    },
    {
        "country": "Central African Republic",
        "data": {
            "Default":  [3,6,4,3,3,3]
        }
    }
]