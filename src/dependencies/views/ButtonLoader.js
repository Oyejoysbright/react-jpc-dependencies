import React, { Component } from 'react';

class ButtonLoader extends Component {
    animType;
    constructor(props) {
        super(props);
        this.state = {showAnim:false};
        this.style = {paddingLeft: this.props.rtl !== undefined ? 2 : 0, paddingRight: this.props.rtl === undefined ? 2 : 0}
        this.btnClicked = this.btnClicked.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }
    static getDerivedStateFromProps(props){
        let active =props.active !== undefined?props.active:false;
        return {showAnim: active}
    }

    btnClicked(e){
        if(this.props.active !== undefined && this.props.active ===true){
           this.btnState(e);

        }else if(this.props.active === undefined){
            this.btnState2(e);
        }
        
    }

    btnState(e){
            
        if(this.props.onClick !== undefined){            
                     
            this.props.onClick(e);

        }
    }

    btnState2(e){
        this.toggleState();
        if(this.props.onClick !== undefined){            
            
            var offAnim = ()=>{
                this.toggleState();
            };
            this.props.onClick(offAnim, e);

        }
        
    }


    toggleState(){
        
        this.setState(state=>{
            return {showAnim: !state.showAnim}
        });
    }

    onRender(){

        if(this.props.src === undefined){
            this.src = "";
            this.name = this.props.children;
            this.classID = "btn-anim";
        }else{

            if(typeof this.props.src === "string"){
                this.src = <img src={this.props.src} alt="" />
            }else{
                this.src = this.props.src;
            }
            
            this.name = <span>{this.props.children}</span>
            this.classID = "img-btn btn-anim";
        }
       
        this.classID = this.props.className !== undefined?`${this.classID+" "+this.props.className}`:this.classID;
    

    }

    // style={{backgroundColor: this.props.colors[0], color: this.props.colors[1]}}
    render() {
        
        this.onRender();
        return (
            <button type={this.props.type} name={this.props.name} id = {this.props.id} className={this.classID} onClick={this.btnClicked} disabled={this.state.showAnim} 
            >                
                {this.props.rtl === undefined? this.src: ""}
                <span style = {this.style}>{this.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: this.state.showAnim?"block":"none"}}  width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="28" cy="50" fill="#687e8d" r="22">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="28;72;28" begin="-0.5s"></animate>
</circle>
<circle cx="72" cy="50" fill="#bbcedd" r="22">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="28;72;28" begin="0s"></animate>
</circle>
<circle cx="28" cy="50" fill="#687e8d" r="22">
  <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="28;72;28" begin="-0.5s"></animate>
  <animate attributeName="fillOpacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
</circle>
</svg>
{this.props.rtl !== undefined? this.src: ""}           
            </button>
        );
    }


}

export default ButtonLoader;