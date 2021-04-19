import React, { useState } from 'react'

function AcademicQualification({name, value, onChange}) {

    // const [state, setState] = useState({[name]: ""});

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    }

    return (
        <select name={name} value={value} onChange={handleChange}>
            <option value="">Select</option>
            <option value="phd">Doctor of Philosophy</option>
            <option value="masters">Master's Degree</option>
            <option value="degree">Bachelor Degree</option>
            <option value="hnd">Higher Diploma Degree</option>
            <option value="ond">Ordinary Diploma Degree</option>
            <option value="sss">Senior Secondary School</option>
            <option value="jss">Junior Secondary School</option>
            <option value="primary">Primary School</option>
        </select>
    )
}

export default AcademicQualification
