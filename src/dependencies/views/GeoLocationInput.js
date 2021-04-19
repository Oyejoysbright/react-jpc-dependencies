import React from 'react'
import { useState } from 'react'
import { JArray } from '../services/Jpc';

function GeoLocationInput({target = "college", getGPS, onChange}) {
    const list = ["college", "secondary", "university", "primary"];
    if (!JArray.find.getBoolean(list, target)) {
        throw new Error("Your target is not available. Kindly choose among [college, secondary, university, primary]");
    }
    const view = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"/></svg>

    const [geo, setGeo] = useState("");

    const handleChange = (e) => {
        setGeo(e.target.value);
        if (onChange !== undefined) {
            onChange(e);
        }

        const longLat = 0;
        if (getGPS !== undefined) {
            getGPS(longLat);
        }
    }

    return (
                    <div className="jpc"> 
                    <div className="content-center-middle">
                        <select name="geo" value={geo} onChange={handleChange}>
                            <option value="">Select</option>
                        {
                            data[target].map((opt, i) => (
                            <option value={opt.data.url} key={i}>{opt.school}</option>
                            ))
                        }
                        </select>
                        {geo !== "" ? <a href={geo} target="_blank" rel="noopener noreferral">{view}</a> : null}
                        
                    </div>
                    </div>
    )
}

export default GeoLocationInput


const data = {
    college: [
                {
                    school: "Thomas Adewumi International College Oko",
                    data: {
                            loc: [8.1448807,5.1612517],
                            url : "https://www.google.com/maps/place/Thomas+Adewumi+International+College+Oko/@8.1448807,5.1612517,17z/data=!3m1!4b1!4m5!3m4!1s0x104823caad5b0689:0x21f22d4d3744adcc!8m2!3d8.1448807!4d5.1634404?hl=en" 
                    }
                },
                {
                    school: "University of Ilorin",
                    data:{
                        loc: [8.4928414,4.5962225],
                        url : "https://www.google.com/maps/place/University+of+Ilorin/@8.4928414,4.5940338,17z/data=!3m1!4b1!4m5!3m4!1s0x103652c2a85b742f:0xbf3011af9f61d6ca!8m2!3d8.4928414!4d4.5962225?hl=en"
                    }
                },
            ],
    university: [
                    
                ],
    secondary: []
}