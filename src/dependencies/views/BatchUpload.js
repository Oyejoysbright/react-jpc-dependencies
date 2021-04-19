import React, { Component } from 'react'

export class BatchUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            percent: 0
        }
    }
    componentDidMount() {
        // this.realTime();
    }
    

    realTime = () => {
        setTimeout(() => {
            this.setState(state => {return {percent: state.percent + 1}})
        }, 500);
    }
    
    render() {
        const {percent} = this.state;
        return (
            <div>
                <h3>{percent}</h3>
                <button onClick={this.realTime}>Test</button>
            </div>
        )
    }
}

export default BatchUpload
