import React, { Component } from 'react';

class AutoCloseableInfo extends Component {

    constructor(props){
        super(props);
        this.state = {message: ""};
        this.time = this.props.close !== undefined? parseInt(this.props.close):3000;
        this.hpRef = React.createRef();
    }

    handleMouseEnter = ()=>{
        window.clearTimeout(this.watch);
    }

    handleMouseOut = ()=>{
        this.hide();
    }

    show = ()=>{
        if(this.props.info !== "" && this.props.info !== null && this.props.info !== undefined){   
            this.hpRef.current.style = "bottom: 15px; opacity: 1;";
            this.hide();
         }
    }

    hide = ()=>{


        this.watch = window.setTimeout(()=>{

            this.hpRef.current.style.opacity = "0";

            setTimeout(()=>{

                this.hpRef.current.style.bottom = "-150px";
                this.props.onChange();
            }, 1000);

        }, this.time);

    }

    componentDidMount(){
        if(this.props.onChange === undefined)throw new Error("AutoCloseableInfo: onChange attribute not found!!")
        this.show();
    }
    componentDidUpdate(){
        this.show();
    }
    render() {
        return (
            <div id="HPnotify" ref = {this.hpRef}>

                <div id="HPFtext" 
                onMouseEnter={this.handleMouseEnter} 
                onMouseOut= {this.handleMouseOut}
                >
                {this.props.info}
                </div>

            </div>
        );
    }
}

export default AutoCloseableInfo;
