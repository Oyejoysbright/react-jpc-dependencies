import React from 'react'

function DateFormat({onChange, name, value}) {
    
    const dateFormat = (obj, i) => {
        let data = [];
        for (const key in obj.data) {
          data.push(obj.data[key]);
        }
        return (
            <optgroup key={i} label={obj.country}>
              {
                data.map((item, j) => (
                  <option key={j} value={item}>{item}</option>                  
                ))
              }
            </optgroup>
        );
    }

    const handleChange = (e) => {
      onChange(e);
    }

    
    return (
            <select name={name} onChange={handleChange} value={value}>
              <option value="" label="select" />
            {
                data.map((obj, i) => {return dateFormat(obj, i)})
            }
            </select>
    )
}

export default DateFormat

const data = [
  {
    "country": "Albania",
    "data": {"short":"yyyy-MM-dd", "long:" : "yyyy-MMMM-dd"}
  },
  {
    "country": "United Arab Emirates",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Argentina",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Australia",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"} 
  },
  {
    "country": "Austria",
"data": {"short": "d.MM.yyyy","long" : "dd.MMMM.yyyy"}
},
  {
    "country": "Belgium",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Bulgaria",
    "data": {"short":"yyyy-MM-d", "long:" : "yyyy-MMMM-dd"}
  },
  {
    "country": "Bahrain",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Bosnia and Herzegovina",
    "data": {"short":"yyyy-MM-dd", "long:" : "yyyy-MMMM-dd"}
  },
  {
    "country": "Belarus",
    "data": {"short":"d.M.yyyy", "long:" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Bolivia",
    "data": {"short":"d-MM-yyyy", "long:" : "dd-MMMM-yyyy"}
  },
  {
    "country": "Brazil",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Canada",
    "data": {"short":"yyyy-MM-dd", "long:" : "yyyy-MMMM-dd"}
  },
  {
    "country": "Canada",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
   },
  {
    "country": "Switzerland",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Chile",
    "data": {"short":"dd-MM-yyyy", "long:" : "dd-MMMM-yyyy"}
  },
  {
    "country": "China",
    "data": {"short":"yyyy-M-d", "long:" : "yyyy-MMMM-dd"}
  },
  {
    "country": "Colombia",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Costa Rica",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Cyprus",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Czech Republic",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Germany",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Denmark",
    "data": {"short": "dd-MM-yyyy","long" : "dd-MMMM-yyyy"}
  },
  {
    "country": "Dominican Republic",
    "data": {"short": "MM/dd/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "Algeria",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Ecuador",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Egypt",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Spain",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Spain",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Estonia",
    "data": {"short": "d.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Finland",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "France",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "United Kingdom",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Greece",
    "data": {"short": "d/M/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Guatemala",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Hong Kong",
    "data": {"short": "yyyy年M月d日","long" : "yyyy年M月d日"}
  },
  {
    "country": "Honduras",
    "data": {"short": "MM-dd-yyyy","long" : "MMMM-dd-yyyy"}
  },
  {
    "country": "Croatia",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Hungary",
    "data": {"short": "yyyy.MM.dd","long" : "yyyy.MMMM.dd"}
  },
  {
    "country": "Indonesia",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "India",
    "data": {"short": "३/६/१२","long" : "३/६/१२"}
  },
  {
    "country": "India",
    "data": {"short": "d/M/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Ireland",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Ireland",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Iraq",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Iceland",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Israel",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Italy",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Jordan",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Japan",
    "data": {"short": "yyyy/MM/dd","long" : "yyyy/MMMM/dd"}
  },
  {
    "country": "Japan",
    "data": {"short": "H24.MM.dd","long" : "H24.MM.dd"}
  },
  {
    "country": "South Korea",
    "data": {"short": "yyyy.M.d","long" : "yyyy.MMMM.d"}
  },
  {
    "country": "Kuwait",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Lebanon",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Libya",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Lithuania",
    "data": {"short": "yyyy.M.d","long" : "yyyy.MMMM.dd"}
  },
  {
    "country": "Luxembourg",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Latvia",
    "data": {"short": "yyyy.d.M","long" : "yyyy.dd.MMMM"}
  },
  {
    "country": "Morocco",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Mexico",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Macedonia",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Malta",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Malta",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Montenegro",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Malaysia",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Nicaragua",
    "data": {"short": "MM-dd-yyyy","long" : "MMMM-dd-yyyy"}
  },
  {
    "country": "Netherlands",
    "data": {"short": "d-M-yyyy","long" : "dd-MMMM-yyyy"}
  },
  {
    "country": "Norway",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Norway",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "New Zealand",
    "data": {"short": "d/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Oman",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Panama",
    "data": {"short": "MM/dd/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "Peru",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Philippines",
    "data": {"short": "M/d/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "Poland",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Puerto Rico",
    "data": {"short": "MM-dd-yyyy","long" : "MMMM-dd-yyyy"}
  },
  {
    "country": "Portugal",
    "data": {"short": "dd-MM-yyyy","long" : "dd-MMMM-yyyy"}
  },
  {
    "country": "Paraguay",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Qatar",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Romania",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Russia",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Saudi Arabia",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Serbia and Montenegro",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Sudan",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Singapore",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Singapore",
    "data": {"short": "M/d/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "El Salvador",
    "data": {"short": "MM-dd-yyyy","long" : "MMMM-dd-yyyy"}
  },
  {
    "country": "Serbia",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Slovakia",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Slovenia",
    "data": {"short": "d.M.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Sweden",
    "data": {"short": "yyyy/MM/dd","long" : "yyyy/MMMM/dd"}
  },
  {
    "country": "Syria",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Thailand",
    "data": {"short": "d/M/2555","long" : "dd/MMMM/2555"}
  },
  {
    "country": "Thailand",
    "data": {"short":  "๓/๖/๒๕๕๕","long" :  "๓/๖/๒๕๕๕"}
  },
  {
    "country": "Tunisia",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Turkey",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Taiwan",
    "data": {"short": "yyyy/M/d","long" : "yyyy/MMMM/dd"}
  },
  {
    "country": "Ukraine",
    "data": {"short": "dd.MM.yyyy","long" : "dd.MMMM.yyyy"}
  },
  {
    "country": "Uruguay",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "United States",
    "data": {"short": "M/d/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "United States",
    "data": {"short": "M/d/yyyy","long" : "MMMM/dd/yyyy"}
  },
  {
    "country": "Venezuela",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Vietnam",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "Yemen",
    "data": {"short": "dd/MM/yyyy","long" : "dd/MMMM/yyyy"}
  },
  {
    "country": "South Africa",
    "data": {"short": "yyyy/MM/dd","long" : "yyyy/MMMM/dd"}
  }
 ];