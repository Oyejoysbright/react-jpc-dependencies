import React, { Component } from 'react';
import './ZeroContainer.css';

/**
 * It shows the placeholder attribute when data is empty
 * 
 * It takes [data] attribute in string, array or object
 * 
 * It also takes [placeholder] attribute in string only
 */
export class ZeroContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount() {
        if(this.props.placeholder === "" || this.props.placeholder === undefined){
            throw new Error("This component require 'placeholder' prop and cannot be empty");
        }

        if(this.props.data === undefined){
            throw new Error("This component require 'data' prop");
        }

    }
    render() {
        var type = typeof this.props.placeholder;
        var isEmptyValue;
        if (type === "string") {
            isEmptyValue = <h1 className="zero-container-main">{this.props.placeholder}</h1>;
        } else {
            isEmptyValue = this.props.placeholder;
        }
        return (this.props.data === "" || this.props.data === null || this.props.data === undefined || this.props.data.length === 0)? isEmptyValue : this.props.children;
        // return (
        //     <span>
        //         {
        //             (this.props.data === "" || this.props.data === null || this.props.data === undefined || this.props.data.length === 0)?
        //                 isEmptyValue
        //             :
        //                 this.props.children

        //         }
        //     </span>
        // )
    }
}

export default ZeroContainer
