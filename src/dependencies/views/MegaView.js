import React, { Component } from 'react'
import './MegaView.css';
import { retrieveSingleData } from "../services/Jpc";

export class MegaView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             getAddress : this.props.getAddress,
             id : this.props.id,
             header : this.props.header,
             specialKey: this.props.specialKey,
             name : this.props.name,
             dbData :[],
        }
    }

    componentDidMount() {
        this.retrieveData();
    }
    retrieveData = () => {
        retrieveSingleData(this.state.getAddress, this.state.id,
                    (data) => {
                        for (const key in data) {
                            this.state.specialKey.forEach(element => {
                                if (element === key) {
                                    data[key] = data[key].id
                                }
                            })
                        }
                        this.setState({dbData: [data]});
                        console.log(data);
                    },
                    () => {

                    });
    }
    handleClose = () => {
        this.props.setView(false);
    }
    
    getKeys = (data) => {
        var dataKey = [];
            for (const key in data[0]) {
                dataKey.push(key);
            }
            return dataKey;  
    }

    render() {
        if (this.props.getAddress==="" || this.props.getAddress === undefined){

            throw new Error("getAddress is mandatory \n getAddress=' '")
        }

        if (this.props.id==="" || this.props.id === undefined){

            throw new Error("Id is mandatory \n id=' '")
        }
        if (this.props.header==="" || this.props.header === undefined){

            throw new Error("Header is mandatory \n header=' '")
        }
        if (this.props.name==="" || this.props.name === undefined){

            throw new Error("Name is mandatory \n  name=' '")
        }


        return (
            <div className="mega-view">
                <div className ="container">

                    <div className="two">
                        <div >
                            {
                            this.state.header.map((item,i)=>(
                                <div key ={i} className="list-item">{item.toUpperCase()}</div>
                            ))
                            }
                        </div>
                    </div>
                    <div className="two">
                        {
                            this.state.dbData.map((item, i) => (
                                <div key={i} className="">
                                    {
                                        this.getKeys(this.state.dbData).map((key,i) => (
                                            <div key={i} className="list-item">
                                                {
                                                    (key === "picture" || key === "photo" || key === "image" )?
                                                        <img src={item[key]} width="50px" height="50px" className="picture" alt="" />
                                                    :
                                                        <>
                                                            {item[key]}
                                                        </>
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                    <button onClick={this.handleClose}>Close</button>     
            </div>
        )
    }
}

export default MegaView
