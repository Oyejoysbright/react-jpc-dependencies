import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export class ProgressBarUsage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             percent: 10
        }
    }
    

    handleClick = () => {
        this.setState({percent: 50})
        this.forceUpdate();
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            percent: e.target.value
        })
    }
    render() {
        return (
            <div>
                <center>
                    <h1>Progress Bar</h1>
                    <ProgressBar percent={this.state.percent} display="true" />
                    <button onClick={this.handleClick}>send</button>
                    <tr/>
                    <input onChange={this.handleChange} type="number" placeholder="Supply digit" name="pct"/>
                </center>
            </div>
        )
    }
}

export default ProgressBarUsage
