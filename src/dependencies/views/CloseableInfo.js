import React, { Component } from 'react';

export const SUCCESS = "info-s";
export const DANGER = "info-d";
export const WARNING = "info-w";

class CloseableInfo extends Component {



    resetStyle(parent){
        parent.style.transform = "scale(1)";
        parent.style.opacity = "1";
    }
    render() {
        let classname = this.props.type !== undefined? `info ${this.props.type}`: "info";
        let ifc = this.infoConditions();

        return (
            <div className={classname} id={this.props.id} style={{display: ifc.display}}>
                <span className="out" onClick={this.handleClose}></span>
                {ifc.info}
            </div>
        );
    }

    componentDidMount(){
        if(this.props.onChange === undefined)throw new Error("CloseableInfo: onChange attribute not found!!")
    }
    infoConditions(){
        let info = this.props.children === undefined? this.props.info: this.props.children;
       return { display:   info === undefined 
                        || info === "" 
                        || info === null?"none":"block", 
                info: info}
    }
    
    handleClose = (e)=>{
        let parent = e.target.parentNode;
        

        setTimeout(()=>{
            parent.style.transform = "scale(.8)";
            setTimeout(()=>{
                parent.style.opacity = "0";
                setTimeout(()=>{
                    this.props.onChange();
                    this.resetStyle(parent);
                }, 300);
            }, 200);
        },100);
    }
}

export default CloseableInfo;