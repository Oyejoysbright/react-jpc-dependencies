import React, { Component } from 'react';
import './CounterPlate.css';

export class CounterPlate extends Component {
    render() {
        return (
            this.props.type === "success"?
                <div className="d-plate">
                    <div className="d-plate-label">
                        <p><b>{this.props.count}</b> <br/>{this.props.label}</p>
                    </div>
                    <div className="d-plate-icon">{this.props.icon}</div>
                </div>
            :
            this.props.type === "warning"?
                <div className="d-plate-w">
                    <div className="d-plate-label">
                        <p><b>{this.props.count}</b> <br/>{this.props.label}</p>
                    </div>
                    <div className="d-plate-icon-w">{this.props.icon}</div>
                </div>
            : null
        )
    }
}

export default CounterPlate
