import React, { Component } from 'react';
import ImageField from './../UI/ImageField';
import ButtonLoader from './../UI/ButtonLoader';

class AddField extends Component {

    constructor(props){
        super(props);
        this.state = {extraFieldname:"phone", extraFields: [], extraCount: 0, result: ""}
        /**
         * create an empty field to receive all field values..
         */
        this.fields = {};
    }

    
    /**
     * metthod called by the addphone label.
     * it creates new and unique state properties by incrementing and 
     * appending extraCount to new property name, and add new name into
     * an array. on setState, app re-renders with new properties in the state object to create 
     * extra fields.
     */
    addFileds = ()=>{
        
        this.setState(state => {
            // increment extraCount
            let count = state.extraCount+1;
            // create new property name
            let name = state.extraFieldname+count;
            //update state obj.
            return {[name]: "", extraFields: state.extraFields.concat(name), extraCount: count}
        })
        
    }

    handleChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        /**
         * add and updates only fields value not equal to extraField.
         * extrafields would be included inside onHandleSubmit with comma seperation.
         */
        if(!name.includes(this.state.extraFieldname)){
            this.fields[name] = value;
        }
        this.setState({[name]:value});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        //call methods to add extra fields to this.fields
        let fields = this.getAllFields();
        this.setState({result: JSON.stringify(fields)});
        //sendToServer(url, fields);
    }

    getAllFields = ()=>{
        let fieldValues = "";
        let field = this.state.extraFieldname;
        /**
         * convert object to array and fetch only prop with extrafieldname
         * append it to variable fieldValues with comma seperation.
         * note: seperation technique should be made complex if ur field value would take comma 
         * ordinarily e.g.. if a user types under the phone field 070,080,090. since comma is used here
         * ur seperation should take another char or modes of 3-4 chars to alley confusion at the backend
         */
        Object.entries(this.state).forEach(([k, v]) => {
            if(k.includes(field) && v !== ""){
                fieldValues +=`${v},`;
            }
        });
        //remove the last comma
        fieldValues = fieldValues.substring(0, fieldValues.length-1);
        //append extra properties to the properties in this.fields
        let newField = Object.assign(this.fields, {[field]: fieldValues});
        return newField;
    }
    render() {
      
        return (
            <div className="cards">
            <h4>Simple Extra Fields Form</h4>
            <form className="form-block" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <ImageField onChange={this.handleChange} name="name" value={this.state.name} placeholder="name" />

            <label>Email</label>
            <ImageField onChange={this.handleChange} type="email" name="email" value={this.state.email} placeholder="name" />

            <label>Phones</label>
            <ImageField type="number" onChange={this.handleChange} name="phone" value={this.state.phone} placeholder={this.state.extraFieldname} />

            <div className="form-extra-fields">

                <div className="form-extras">
                    {
                        /**
                         * upon redering properties key in the exreafields array creates extra fields
                         * take note of class names and tags for design purposes.
                         */
                        this.state.extraFields.map((name, i) => (
                        <ImageField type="number" onChange={this.handleChange} key={i} name={name} value={this.state.name} placeholder={this.state.extraFieldname} />
                    ))}
                </div>

                <span onClick={this.addFileds} className="form-add-field" >add phone</span>
            </div>
            <div>{this.state.result}</div>
            <br></br>
            <ButtonLoader active={false}>Submit</ButtonLoader>
                
        </form>
    
            </div>
           );
    }
}

export default AddField;