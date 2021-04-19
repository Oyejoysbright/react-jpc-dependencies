import React, { Component } from 'react';

class Loader extends Component {
    render() {
        var loader = "";
        if(this.props.isVisible){
            loader = <div className="loading-bar">
                        <div></div>
                    </div>
        }
        return (
            loader
        );
    }
}

export default Loader;