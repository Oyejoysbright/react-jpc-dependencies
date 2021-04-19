import React, { Component } from 'react';

class DialogConfirm extends Component {
    hide = ()=>{
        this.props.onHide();
    }

    confirm = ()=>{
        this.props.onConfirm();
    }

    render() {
        return (
            <ul id="HPalert">
                <li>Confirm</li>
                <li>{this.props.message}</li>
                <li>
                    <button onClick={this.confirm}>ok</button>
                    <button onClick={this.hide}>cancel</button>
                </li>
            </ul>
        );
    }
}

export default DialogConfirm;