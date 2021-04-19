import React, { useState } from 'react';
import DatePicker from "react-datepicker";

function DateSelector({onChange, name}) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
           <DatePicker selected={startDate} onChange={date => onChange(date, name)} /> 
        </div>
    )
}

export default DateSelector