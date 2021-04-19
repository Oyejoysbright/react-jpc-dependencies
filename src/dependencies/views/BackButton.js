import React, { Component } from 'react'
import './BackButton.css';

export class BackButton extends Component {
    onClick = (e) => {
        this.props.onClick(e);
    }
    render() {
        return (
            <div className="container">
                <div className="two">
                   <h3>{this.props.current}</h3> 
                </div>
                <div className="two">
            <div className="back-btn-container">
                <button className={"back-btn-btn"+(this.props.src !== undefined)?" back-btn-no-effect":""} onClick={this.onClick} title="Take a step backward">
                    {
                        (this.props.src !== undefined)?
                            this.props.src
                        :
                            "Back"
                    }
                </button>
            </div>
                </div>
            </div>
        )
    }
}

export default BackButton
