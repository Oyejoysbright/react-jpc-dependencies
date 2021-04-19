import React, { Component } from 'react';

class FootAlert extends Component {

    constructor(props){
        super(props);
        this.state = {message: ""};
        this.time = 3000;
        this.hpRef = React.createRef();
    }

    handleMouseEnter = ()=>{
        window.clearTimeout(this.watch);
    }

    handleMouseOut = ()=>{
        this.hide();
    }

    show = ()=>{
        if(this.props.text !== ""){
            this.setMessage(this.props.text);
            this.hpRef.current.style = "bottom: 15px; opacity: 1;";
            this.hide();
        }
    }

    setMessage =(message)=>{
        this.setState({message: message});
    }

    hide = ()=>{
        this.watch = window.setTimeout(()=>{

            this.hpRef.current.style.opacity = "0";

            setTimeout(()=>{

                this.hpRef.current.style.bottom = "150px";

            }, 100);

        }, this.time);

    }

    render() {
        return (
            <div className="HPnotify" ref = {this.hpRef}>
                <div className="HPFtext" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseOut= {this.handleMouseOut}
                >
                {this.props.text}
                </div>
            </div>
        );
    }
}

export default FootAlert;
