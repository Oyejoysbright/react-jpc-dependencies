import React, { Component} from 'react';
import './progressbar.css';

/**
 * 
 */
class ProgressBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value: this.props.percentage,
             myStyle: "",
             myStylePro: "",
             display: "progress-display-none",
             msg: this.props.msg,
             active: this.props.active || false, // true or false
        }
      
        this.initialState = this.state;
    }


    reset = () =>{
       this.setState(this.initialState);
    }

    componentDidMount(){
        if(this.state.active.toString() === "true"){
            // 
            this.setState(this.initialState)
            this.timeout = setInterval(() => {
                this.setState(state =>(
                    {value: state.value + 1}
                ));
            }, 100);
        }

        let msg = this.props.msg
        console.warn(msg)
        if(msg === "" || msg === undefined || msg === null ){
            this.setState({
                msg: "Finished"
            });            
        }

        // let reset = this.props.reset
        // if(reset )

        let display = this.props.display
        if(display === true || display === "true"){
            this.setState({display: ""})
        }
    }

    componentDidUpdate(props){
        
        if(this.state.value >= 100){
            clearInterval(this.timeout);
            // setting value back to zero
            this.setState({
                value : (this.state.msg) + " " + this.state.value
            })
        } else if (this.state.value >= 100 && this.state.value !== 100 ){
            this.setState({
                value: 0
            })
        }
         
    // handling the background
        
    if(this.state.value >= 0 && this.state.value < 25 && this.state.myStyle !== "style-one" ){
        return(
            
            this.setState({
                myStyle: 'style-one'
            })
        );
    } 
    else if(this.state.value >= 25 && this.state.value < 50 && this.state.myStyle !== 'style-two' ) {
        return(
            
            this.setState({
                myStyle: 'style-two'
            })
        );
    }
    else if(this.state.value >= 50 && this.state.value < 75 && this.state.myStyle !== 'style-three' ) {
        return(
            
            this.setState({
                myStyle: 'style-three'
            })
        );
    }
    else if(this.state.value >= 75 && this.state.value < 100 && this.state.myStyle !== 'style-five' ) {
        return(
            this.setState({
                myStyle: 'style-five'
            })
        );
    }     

    if (this.props.percent !== props.percent) {
        var percent  = this.props.percent;
        this.timeout = setInterval(() => {
            this.setState(state =>{
                if (state.value <= percent) {
                    return {value: state.value + 1}
                }
            });
        }, percent - this.state.value);

        if (percent === 100) {
            setTimeout(() => {
                this.setState({display: false});
            }, 200);
        }
    }

    if (this.props.display !== props.display) {
        this.setState({display: this.props.display});
    }
    }




    render() {
        return (
            <div className={"progress " + this.state.display }>
                <div className={this.state.myStyle} 
                style={{width: this.state.value +"%"}}></div>
                <div><em>{this.state.value + "%"}</em></div>
            </div>
        )
    }
}


export default ProgressBar
