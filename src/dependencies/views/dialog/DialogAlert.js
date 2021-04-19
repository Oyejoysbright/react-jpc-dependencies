import React, { Component } from 'react';
class DialogAlert extends Component {

    
    
    closeDialogue = ()=>{
        this.props.onHide();
    }

    render() {
        return (
            <ul id="HPalert">
                <li>Alert</li>
                <li>{this.props.message}</li>
                <li><button onClick={this.closeDialogue}>ok</button></li>
            </ul>
        );
    }
}

export default DialogAlert;