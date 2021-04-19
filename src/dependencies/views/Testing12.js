import React, { Component } from 'react'
import { JArrayObject } from '../services/Jpc'

export class Testing12 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.data = [
            {name: "aaaa", id: 1},
            {name: "pok", id: 5},
            {name: "kaf", id: 3}
        ]
    }


    componentDidMount() {
       console.log(this.data.sort(JArrayObject.customSort("id", "desc")));
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Testing12
