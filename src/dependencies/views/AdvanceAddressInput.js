import React, { Component } from 'react'
import { JArrayObject } from '../services/Jpc';

export class AdvanceAddressInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            itemData: ["", ""], tags: []
        }
    }

    
    option = (item, i) => {

        let data = []
        for (const key in item.data) {
            data.push(key);
        }
        return <optgroup label={item.country} key={i}>
                    {
                        data.map((opt, i) => (
                            <option value={[item.country, opt]} key={i}> {item.country} -&gt; {opt}</option>
                        ))
                    }         
                </optgroup>
    }

    getTag = (country = "", name = "") => {
        let fieldName = country+name;
        if (name.includes("Code")) {
            return <input type="number" name={fieldName} value={this.state[fieldName] || 0} onChange={this.handleChange} />
        }
        else if (name.includes("Number")){
            return <input type="number" name={fieldName} value={this.state[fieldName] || 0} onChange={this.handleChange} />
        }
        else return <input type="text" name={fieldName} value={this.state[fieldName] || ""} onChange={this.handleChange} />
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "itemData") {
            value = value.split(",");
            this.setState({itemData: value});
    
            if ((value[0] && value[1]) !== "") {
                let obj = JArrayObject.find.getObject(data, value[0], "country");
                let selected = obj.data[value[1]];
                let response = [];
                selected.forEach(element => {
                    response.push(this.getTag(value[0],element))
                });
                this.setState({tags: response});
            }
        } else {
            this.setState({[name]: value});
            console.log(this.state[name], value)
        }

    }


    render() {
        return (
            <div>
                <select name="itemData" value={this.state.itemData} onChange={this.handleChange}>
                    <option value={["", ""]} >Select</option>
                {
                    data.map((obj, i) => {return this.option(obj, i)})
                }
                </select>
                {
                    this.state.tags.map((opt, i) => (
                        <React.Fragment key={i}>
                            {opt}
                        </React.Fragment>
                    ))
                }
            </div>
        )
    }
}

export default AdvanceAddressInput



const data = [
                {
                    country: "Liechtenstein",
                    data: {
                            individual: ["ContactName", "houseNumber", "postalCodeNumber"],
                            company : ["CompanyName" , "ContactName" , "HouseNumber" , "postalCodeNumber"]
                        }
                },
                {
                    country : "Andorra",
                    data : {
                            general: ["ContactName",  "houseNumber",  "postalCodeNumber"]
                        }
                }
            ]    
