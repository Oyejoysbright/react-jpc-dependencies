import React from 'react'

function Semester({onChange, name, value, id}) {
    return (
        <select name={name} value={value} id={id} onChange={(e) => onChange(e)}>
            <option value="" label="Select" />
            <option value="first" label="First Semester" />
            <option value="second" label="Second Semester" />
            <option value="third" label="Third Semester" />
        </select>
    )
}

export default Semester
