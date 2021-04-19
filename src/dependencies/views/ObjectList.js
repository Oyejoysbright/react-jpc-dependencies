import React, { Component } from 'react';
import ZeroContainer from './ZeroContainer';
import './ObjectList.css';
import { Consumer } from '../services/Provider';
import ImageField from './ImageField';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import TextLimit from './TextLimit';
import { Link } from 'react-router-dom';

/**
 * @deprecated Will have no support since 2020/10/01
 */
class ObjectList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             theadList: [], actionButton: this.props.actionButton, customButtonLabel: this.props.customButtonLabel, linkLabel: this.props.linkLabel, dataList: this.props.data, total: this.props.total,
             currentPage: 0, dataPerPage: this.props.perPage, otherPages: [], currentOffset: 1
        }

        this.zeroContainerPlaceholder = <tr className="zero-placeholder"><td colSpan={this.props.title.length+1}> <h1>Data is Empty</h1></td></tr>
    }



    //Get number of columns and heading
    getThead = (data = []) => {
        var thead = [];
        for (const key in data[0]) {
            if (data[key] !== null && data[key] !== undefined) {
                thead.push(key.toUpperCase());
            }
        }
        return thead;
    }

    getKeys = (data) => {
        var dataKey = [];
            for (const key in data) {
                dataKey.push(key);
            }
            return dataKey;  
    }


    componentDidMount() {
        this.getOtherPages();
        this.firstPage();
        
    }
    
    componentDidUpdate(props) {
        if (props.data !== this.props.data) {
            this.setState({dataList: this.props.data.sort()});
        }
        if (props.data.length > this.props.data.length) {
            if(this.state.dataList !== props.data){
                this.setState({dataList: props.data.sort()});
            } 
        }  
        else {
            if(this.state.dataList !== this.props.data){
                this.setState({dataList: this.props.data.sort()});
            } 
        }   

        if (this.props.customButtonLabel !== props.customButtonLabel) {
            this.setState({customButtonLabel: this.props.customButtonLabel})
        }

        if (this.props.customButtonActive !== props.customButtonActive) {
            this.setState({customButtonActive: this.props.customButtonActive});
        }
        //Real Time Pagination        
        if (props.total !== this.props.total) {
            this.setState({total: this.props.total});
            this.getOtherPages();
        }
    }


    handleSelectChange = (confirm,item,e) => {
        if(e.target.value === "View"){
            this.props.onView(e,item);
        }
        else if(e.target.value === "Edit"){

            const callbk = () => {
                this.props.onEdit(e,item);
            }
            confirm("Proceed?", callbk);
        }
        else if(e.target.value === "Delete"){
            const callbk = () => {
                this.props.onDelete(e,item)
            }
            confirm("Delete?", callbk);
        }
    }


    firstPage = () => {
        const newPage = 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        if (this.state.currentPage > 1) {
            this.props.onChange(offset, this.state.dataPerPage);
        }
        this.setState({currentPage: newPage});              
    }
    
    prevPage = () => {
        const newPage = this.state.currentPage - 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.props.onChange(offset, this.state.dataPerPage);
        this.setState({currentPage: newPage});
    };

    lastPage = () => {
        const newPage = Math.ceil(this.state.total / this.state.dataPerPage);
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.props.onChange(offset, this.state.dataPerPage);
        this.setState({currentPage: newPage});
    };
    
    nextPage = () => {
        const newPage = this.state.currentPage + 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.props.onChange(offset, this.state.dataPerPage);
        this.setState({currentPage: newPage});

    };

    getOtherPages = () => {
        var totalPages = Math.ceil(this.props.total / this.props.perPage);
        var collate = [];
        for (let index = 2; index < totalPages; index++) {
            collate.push(index);            
        }
        this.setState({otherPages : collate});
    }

    changePage = (val) => {
        const newPage = val;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.props.onChange(offset, this.state.dataPerPage);
        this.setState({currentPage: newPage});
    }

    customBtnClicked = (row,e) => {
        this.props.onCustomButton(row,e);
    }

    linkClicked = (row, e) => {
        this.props.onLink(row, e);
    }

    handleDisplaySelectChange = (e) => {
        const offset = 5;
        this.props.onChange(offset, e.target.value);
        this.setState({dataPerPage: e.target.value});
    }

  render() {
    //   Check if data prop is supplied
        if(this.props.data === "" || this.props.data === undefined){
            throw new Error("Data prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }

    // Check if title is supplied
        if(this.props.title === "" || this.props.title === undefined){
            throw new Error("Title prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }

    // Check if an array or object exist as a child of the data
        this.props.data.forEach(element => {
            for (const key in element) {
                if (typeof element[key] === "object" && element[key] !== (undefined || null)) {
                    throw new Error("Object cannot appear as a child of <td></td> \n If you think this is a code error, contact code provider");
                }
            }
        });

    return (
        <Consumer>
        {   ({alert, confirm}) => (
                <div className="object-list">
                        <div className="table-fit">
                            <div >
                                <table>
                                    <thead>
                                        <tr className="bold">
                                            {
                                                (this.props.title !== undefined || "" || [])?
                                                    this.props.title.map((td, i) => (
                                                        <td key={i}> {td.toUpperCase()} </td>
                                                    ))
                                                :
                                                    this.getThead(this.state.dataList).map((td, i) => (
                                                        <td key={i}> {td} </td>
                                                    ))
                                            }
                                            {
                                                (this.state.actionButton === true || this.state.actionButton === undefined)?
                                                    <td> ACTION </td>
                                                :
                                                    null
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="zero-container-main">
                                        <ZeroContainer data={this.state.dataList} placeholder={this.zeroContainerPlaceholder}>
                                        {
                                            this.state.dataList.map((item, i) => (
                                                <tr key={i}>
                                                    {
                                                        this.getKeys(item).map((key, j) => (
                                                            <td key={j}> 
                                                                {
                                                                    (key.includes("picture") || key.includes("photo") || key.includes("image"))?
                                                                        <img src={item[key]} width="40px" height="40px" className="picture" alt="" />
                                                                    :
                                                                        (key === "id" )?
                                                                            <b> {i+1} </b>
                                                                        :
                                                                            (key.includes("link"))? 
                                                                                <a href={item[key]} target="_blank" rel="noopener noreferrer" >Open Link </a>
                                                                            :
                                                                                (item[key] !== undefined)?
                                                                                    (item[key] === true)? "True" :
                                                                                    (item[key] === false)? "False":
                                                                                    (item[key] === null)? "Null":

                                                                                    <p title={item[key]}>
                                                                                        <TextLimit limit={20}>
                                                                                            {item[key]}
                                                                                        </TextLimit>
                                                                                    </p>
                                                                                : ""
                                                                }
                                                            </td>
                                                        ))
                                                    }
                                                    {
                                                        (this.props.onCustomButton !== undefined)?
                                                            <td>
                                                                <button onClick={this.customBtnClicked.bind(null,item)}>
                                                                    {
                                                                        (this.state.customButtonLabel === undefined || this.state.customButtonLabel === "")? "Custom Button": this.state.customButtonLabel
                                                                    }
                                                                </button>
                                                            </td>
                                                        :
                                                            null
                                                    }
                                                    {
                                                        (this.props.onLink !== undefined)?
                                                            <td>
                                                                <Link onClick={this.linkClicked.bind(null,item)}>
                                                                    {
                                                                        (this.state.linkLabel === undefined || this.state.clinkLabel === "")? "Custom Button": this.state.linkLabel
                                                                    }
                                                                </Link>
                                                            </td>
                                                        :
                                                            null
                                                    }
                                                    {
                                                        (this.state.actionButton === true || this.state.actionButton === undefined)?
                                                            <td>
                                                                <ImageField tag="s" onChange={this.handleSelectChange.bind(null, confirm, item)}>
                                                                    <option value="">Select</option>
                                                                    {
                                                                        (this.props.onView !== undefined)?
                                                                            <option value="View" title="View this row"> View</option>
                                                                        :
                                                                            null
                                                                    }
                                                                    {
                                                                        (this.props.onEdit !== undefined)?
                                                                            <option value="Edit" title="Edit this row"> Edit</option>
                                                                        :
                                                                            null
                                                                    }
                                                                    {
                                                                        (this.props.onDelete !== undefined)?
                                                                            <option value="Delete" title="Delete this row"> Delete</option>
                                                                        :
                                                                            null
                                                                    }
                                                                </ImageField>
                                                            </td>
                                                        :
                                                            null
                                                    }
                                                </tr>
                                            ))
                                        }
                                        </ZeroContainer>
                                    </tbody>
                                </table>
                            </div>
                            <div className="container btn-div">
                                <div className="two">
                                    <div className="content-left">
                                        <button className={(this.state.currentPage === 1)?"active":""} onClick={this.firstPage.bind(null)} disabled={(this.state.currentPage !== 1)? false: true}> <GoChevronLeft /> </button>
                                        {
                                            this.state.otherPages.map((val, i) => (
                                                <button className={(this.state.currentPage === val)?"active":""} key={i} onClick={this.changePage.bind(null,val)} >{val}</button>
                                            ))
                                        }
                                        <button className={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))?"active":""} onClick={this.lastPage.bind(null)} disabled={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))? true : false}><GoChevronRight /></button>
                                        <span> Showing {this.state.currentOffset} to {this.state.currentOffset + (this.state.dataPerPage -1)} of {this.state.total} records</span>
                                    </div>
                                </div>
                                <div className="two">
                                    <div className="content-right">
                                        <label>Display </label>
                                        <select className="display-select" name="displayPerRecord" value={this.state.dataPerPage} onChange={this.handleDisplaySelectChange}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                            <option value="20">20</option>
                                        </select>
                                        <label> records</label>
                                        {/* <button onClick={this.prevPage} disabled={(this.state.currentPage - 1 === 0)? true: false}>Prev</button>
                                        <button onClick={this.nextPage} disabled={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))? true : false}>Next</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        )}
        </Consumer>
    );
  }
}

export default ObjectList;

