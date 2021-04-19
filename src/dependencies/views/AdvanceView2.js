import React, { Component } from 'react'
import { GoArrowLeft, GoPlus } from 'react-icons/go';

export class AdvanceView2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             children: this.props.children, title: this.props.title, current: 0, views: [], TitlePartner: null, TitleBar: null, anim: "slide-right"
        }
    }

    componentDidUpdate(props) {
        if (this.props.title !== props.title) {
            this.setState({title: this.props.title});
        }
    }
    

    handleViewSwitch = () => {
        if (this.state.current === 0) {
            this.setState({current: 1});
        } else {
            this.setState({current: 0});       
        }
        this.setState({anim: "slide-right"});
    }
    
    render() {
        if (this.state.anim !== "slide-left") {
            setTimeout(() => {
                this.setState({anim: "slide-left"});            
            }, 200);        
        }

        if (this.state.views.length < 2) {
            this.state.children.forEach(element => {
                if (element.type.name === "View") {
                    this.setState(state => {return {views: state.views.concat(element)}});
                }
                else this.setState({[element.type.name]: element});
                });
        }

        
        return (
            <div className="jpc advance-view">
                {this.state.TitleBar}
                <div>
                    <div className="container">
                        <div className="four-one">
                            <div className="title-container">
                                <span className="title">{this.state.title} </span>
                                {
                                    this.props.unitary === undefined?
                                    <span className={this.state.current === 0? "right icon" : "icon"}>
                                        {
                                            (this.state.current === 0)?
                                                <GoPlus onClick={this.handleViewSwitch} title="Click to show form" />
                                            :
                                                <GoArrowLeft onClick={this.handleViewSwitch} title="Click to go back to list"/>
                                        }
                                    </span> : null
                                }
                            </div>
                        </div>
                        <div className="one-four">
                            <div>
                                { this.state.TitlePartner }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"children simple-anim " + this.state.anim}>
                    { this.state.views[this.state.current] }
                </div>
            </div>
        )
    }
}

export default AdvanceView2

export function View({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export function TitlePartner({children}) {
    return(
        <div>
            {children}
        </div>
    )
}

export function TitleBar({children}) {
    return(
        <div>
            {children}
        </div>
    )
}
export function SinglePage(params) {
    
}