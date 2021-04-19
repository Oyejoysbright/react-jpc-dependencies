import React, { Component } from 'react';
import ZeroContainer from './ZeroContainer';
import ImageField from './ImageField';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import TextLimit from './TextLimit';
import { Link } from 'react-router-dom';
import { JArrayObject, JContent, JArray } from '../services/Jpc';
import { FaSort, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import LabelField from './LabelField';
import { showToolTip } from './tooltip/Tooltip';
import { auditToToolTip } from '../services/Constant';

/**
 * 
 * Assemble array of objects in a table and give easy access to rows and cols
 * 
 * 
 * @param {Boolean} actionColumn Define extra column for delete, edit and view in a select tag. Takes Boolean
 * 
 * @param {} ul Define non serialize rows. Takes None
 * 
 * @param {String} customButtonLabel Define custom button label. Takes String
 * 
 * @param {String} linkLabel Define links label. Takes String
 * 
 * @param {Array} data Define data to mount into the table. Takes Array of Objects
 * 
 * @param {Array} title Define header (thead) of the table. Takes Array of Strings
 * 
 * @param {Number} total Define total number of data available. Takes Number
 * 
 * @param {Number} perPage Define numbers to load per page. Takes Number
 * 
 * @param {} inlineEdit Define columns editable. Takes None
 * 
 * @param {Array} inlineEditData Define columns (Must match items in title array). Takes Array of Strings
 * 
 * @param {} batchProcess Define batch actions. Takes None
 * 
 * @param {Boolean} showDPR Define an option to show displays records. Takes Boolean
 * 
 * @param {Boolean} showNavigation Define an option to use navigation. Takes Boolean
 * 
 * @param {Boolean} showNavigationText Define an option to show navigation label. Takes Boolean
 * 
 * @param {String} searchString Define the word being searched. Takes String
 * 
 * @param {Boolean} isSearching Define the process of searching. Takes Boolean
 * 
 * @param {Function} onEdit Define an option to edit a row. Return the particular row as object and the event of the button. Takes Function
 * 
 * @param {Function} onDelete Define an option to delete a row. Return the particular row as object and the event of the button. Takes Function
 * 
 * @param {Function} onView Define an option to view a row. Return the particular row as object and the event of the button. Takes Function
 * 
 * @param {Function} onChange Define pagination. Return current offset and data per page. Takes Function
 * 
 * @param {Function} onCustomButton Define on custom button click. Takes Function
 * 
 * @param {Function} onLink Define on link button click. Takes Function
 * 
 * @param {Function} onRowClick Define on click of a particular row. Takes Function
 * 
 * @param {Function} onUpdate Define an option to update the table (This depends on inlineEdit). Takes Function and Return Array of Object
 * 
 * @param {Function} onBatchDelete Define an option to delete selected rows (This depends on batchProcess). Takes Function
 * 
 * @param {Function} onBatchEdit Define an option to edit selected rows (This depends on batchProcess). Takes Function
 * 
 */
class TableView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             theadList: [], actionColumn: this.props.actionColumn, ul: this.props.ul, customButtonLabel: this.props.customButtonLabel, linkLabel: this.props.linkLabel, dataList: [], total: this.props.total,
             currentPage: 0, dataPerPage: this.props.perPage, otherPages: [], currentOffset: 1,
             inlineEdit: this.props.inlineEdit, batchProcess: this.props.batchProcess, rowsSelected: [], offset: 0
        }

        this.tableRef = React.createRef();
        this.theadItemRef = React.createRef();
        

        for (let i = 0; i < this.props.perPage; i++) {
            this["ref"+i] = React.createRef();
            for (let j = 0; j < this.props.title.length; j++) {
                this["ref"+i+j] = React.createRef();
            }
        }

        this.zeroContainerPlaceholder = <tr className="zero-placeholder"><td colSpan={this.props.title.length+1}> <h1 className="content-center">Data is Empty</h1></td></tr>
    }



    //Get number of columns and heading
    /**
     * 
     * @param {*} data 
     */
    getThead = (data = []) => {
        var thead = [];
        for (const key in data[0]) {
            thead.push(key);
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

    createDynamicRefs = (data = []) => {
        console.log(data)
        let refs = [];
        for (let i = 0; i < data.length; i++) {
            for (const key in data[i]) {
                refs.push(key+i);
            }
        }
        return refs;
    }


    componentDidMount() {
        this.getOtherPages();
        this.firstPage();
        
    }
    
    componentDidUpdate(props, state) {
        if (props.data !== this.props.data) {
            // this.setState({dataList: this.props.data});
        }

        if (state.offset !== this.props.offset) {
            const np = (this.props.offset + this.state.dataPerPage) / this.state.dataPerPage;
            this.setState({offset: this.props.offset, currentPage: np});
        }

        if (state.dataList !== this.props.data) {
            this.setState({dataList: this.props.data});
        }

        if (this.props.customButtonLabel !== props.customButtonLabel) {
            this.setState({customButtonLabel: this.props.customButtonLabel})
        }

        if (this.props.customButtonActive !== props.customButtonActive) {
            this.setState({customButtonActive: this.props.customButtonActive});
        }

        if (this.props.total !== props.total) {
            this.setState({total: this.props.total});
        }

    }


    handleSelectChange = (item,e) => {
        this.props.onActionOptionClick(item, e);
    }


    firstPage = () => {
        const newPage = 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.setState({currentPage: newPage, offset: offset});
        if (this.state.currentPage > 1) {
            this.props.onChange(offset, this.state.dataPerPage);
        }
    }
    
    prevPage = () => {
        const newPage = this.state.currentPage - 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.setState({currentPage: newPage, offset: offset});
        this.props.onChange(offset, this.state.dataPerPage);
    };

    lastPage = () => {
        const newPage = Math.ceil(this.state.total / this.state.dataPerPage);
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.setState({currentPage: newPage, offset: offset});
        this.props.onChange(offset, this.state.dataPerPage);
    };
    
    nextPage = () => {
        const newPage = this.state.currentPage + 1;
        const offset = (newPage * this.state.dataPerPage) - this.state.dataPerPage;
        this.setState({currentPage: newPage}, ()=>this.props.onChange(offset, this.state.dataPerPage));
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
        this.setState({currentPage: newPage, offset: 10});
        this.props.onChange(offset, this.state.dataPerPage);
    }

    customBtnClicked = (row,e) => {
        this.props.onCustomButton(row,e);
    }

    linkClicked = (row, e) => {
        this.props.onLink(row, e);
    }

    handleDisplaySelectChange = (e) => {
        const offset = 0;
        this.props.onChange(offset, e.target.value);
        this.setState({dataPerPage: e.target.value});
    }

    handleSorting = (referral = "", property) => {
        let currentOrder = this.theadItemRef.current.dataset.order;

        if (referral === "props") {
            let index = JArray.find.getIndex(this.props.title, property);
            property = JArrayObject.getKeys(this.state.dataList)[index];
        }

        const reset = (order = "") => {
            this.setState(state => {
                return {dataList: state.dataList.sort(JArrayObject.customSort(JArrayObject.getKeys(state.dataList)[0], order))}
            });
            this.theadItemRef.current.dataset.order = "default";
        }

        const sorter = (order = "") => {
            this.setState(state => {
                return {dataList: state.dataList.sort(JArrayObject.customSort(property, order))}
            });
            this.theadItemRef.current.dataset.order = order;
        }

        switch (currentOrder) {
            case "asc":
                sorter("desc");
                break;
            case "desc":
                reset();
                break;        
            default:
                sorter("asc");
                break;
        }
    }

    handleRowClick = (ref, item) => {
        if (this.props.onRowClick !== undefined) {
            this.props.onRowClick(item, this[ref]);
        }
        
        if (!JArray.find.getBoolean(this.state.rowsSelected, item.id)) {
            this.setState(state => ({rowsSelected: state.rowsSelected.concat(item.id)}));
        }
        else this.setState(state => ({rowsSelected: JArray.remove(state.rowsSelected, item.id)}))
    }

    handleColDoubleClick = (ref, index) => {
        if (this.props.inlineEdit !== undefined && this.props.inlineEditData !== undefined && JArray.find.getBoolean(this.props.inlineEditData, this.props.title[index])) {
            this[ref].current.contentEditable = true;
            this[ref].current.className = "edit-active";
        }
    }

    handleUpdateTableData = () => {
        let res = [];
        let rows = this.tableRef.current.rows;
        let counter = 0;
        let dataList = this.state.dataList;
        const dataKeys = JArrayObject.getKeys(dataList);
        for (const key in rows) {
            let temp = {};
            var add = false;
            if (counter !== 0 ) {
                const cols = rows[key].cells;
                let index = 0;
                for (const col in cols) {

                    if (index < dataKeys.length) {
                        let value = cols[col].innerText;
                        let tempKey = dataKeys[index];

                        if (JContent.equalsIgnoreCase(tempKey, "id")) {
                            const pos = rows[key].dataset.position;
                            temp[tempKey] = dataList[pos][tempKey];
                        } else {
                            temp[tempKey] = value;                            
                        }

                        add = true;
                        index++;
                    }
                    
                }
                if (add) {
                    res.push(temp);                 
                }
            }
            counter++;
        }
        
        if (this.props.onUpdate !== undefined) {
            this.props.onUpdate(res);
        }
    }

    getSelectedInArray = () => {
        let res = [];
        for (let i = 0; i < this.state.rowsSelected.length; i++) {
            let val = this.state.rowsSelected[i];
            let item = JArrayObject.find.getObject(this.state.dataList, parseInt(val), "id");
            res.push(item);
        }
        return res;
    }
    
    handleBatchEdit = () => {
        if (this.props.onBatchEdit !== undefined) {
            this.props.onBatchEdit(this.getSelectedInArray());
        }
    }
    handleBatchDelete = () => {
        if (this.props.onBatchDelete !== undefined) {
            this.props.onBatchDelete(this.getSelectedInArray());
        }
    }
    handleBatchSelect = (e) => {
        let value = e.target.value;
        this.setState({[e.target.name]: value});

        switch (value) {
            case "edit":
                this.handleBatchEdit();
                break;
            case "delete":
                this.handleBatchDelete();
                break;
            default:
                break;
        }
    }

    handleContentChange = (ref) => {
        if (this.props.onContentChange) {
            this.props.onContentChange(this[ref].current);
        }
    }

  render() {
    //   Check if data prop is supplied
        if(this.props.data === "" || this.props.data === undefined){
            throw new Error("Data prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }
    //   Check if perPAGE prop is supplied
        if(this.props.perPage === "" || this.props.perPage === undefined){
            throw new Error("perPage prop is mandatory! \n Must be Integer \n If you think this is a code error, contact code provider");
        }
    //   Check if Title prop is supplied
        if(this.props.title === "" || this.props.title === undefined){
            throw new Error("Title prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }

    // Check if an array or object exist as a child of the data
    this.props.data.forEach(element => {
        for (const key in element) {
            if (typeof element[key] === "object" && !key.includes("audit") && element[key] !== (undefined || null)) {
                console.error(key , " is an object and cannot appear as child of <td></td>");
                throw new Error("Object cannot appear as a child of <td></td> \n If you think this is a code error, contact code provider");
            }
        }
    });

        const showingTo = parseInt(this.state.offset + this.state.dataPerPage);
        const showingFrom = this.state.offset + 1;

    return (
        <div className="object-list">
                <div className="table-fit">
                    <div className="scroll">
                        <table ref={this.tableRef}>
                            <thead>
                                <tr className="bold">
                                    {
                                        (this.props.title !== undefined || "" || [])?
                                            this.props.title.map((td, i) => (
                                                <React.Fragment key={i}> 
                                                {
                                                    (JContent.equalsIgnoreCase(td, "id") || JContent.equalsIgnoreCase(td, "s/n") || JContent.equalsIgnoreCase(td, "sn"))?
                                                        (this.state.ul === undefined)?
                                                            <th data-order="default" onClick={this.handleSorting.bind(null, "props", td)} ref={this.theadItemRef} > {td} <FaSort className="icon" />  </th>
                                                            : null
                                                    :
                                                        <th data-order="default" onClick={this.handleSorting.bind(null, "props", td)} ref={this.theadItemRef} > {td} <FaSort className="icon" />  </th>

                                                }
                                                </React.Fragment>
                                            ))
                                        :
                                            this.getThead(this.state.dataList).map((td, i) => (
                                                <React.Fragment key={i}> 
                                                {
                                                    (JContent.equalsIgnoreCase(td, "id") || JContent.equalsIgnoreCase(td, "s/n") || JContent.equalsIgnoreCase(td, "sn"))?
                                                        (this.state.ul === undefined)?
                                                            <th data-order="default" onClick={this.handleSorting.bind(null, "key", td)} ref={this.theadItemRef} > {td} <FaSort className="icon" /> </th>
                                                            : null
                                                    :
                                                        <th data-order="default" onClick={this.handleSorting.bind(null, "key", td)} ref={this.theadItemRef} > {td} <FaSort className="icon" />  </th>

                                                }
                                                </React.Fragment>
                                            ))
                                    }
                                    {
                                        (this.state.actionColumn === true || this.state.actionColumn === undefined)?
                                            <th> ACTION </th>
                                        :
                                            null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <ZeroContainer data={this.state.dataList} placeholder={this.zeroContainerPlaceholder}>
                                {
                                    this.state.dataList.map((item, i) => (
                                        <tr onMouseOver={showToolTip.bind(null, auditToToolTip(item["auditTraceResponse"])) } data-position={i} className={(JArray.find.getBoolean(this.state.rowsSelected, item.id) && this.props.rowSelection === true)? "row-selected" : ""} key={i} onClick={this.handleRowClick.bind(null, "ref"+i,item)} ref={this["ref"+i]}>
                                            {
                                                this.getKeys(item).map((key, j) => (
                                                    <React.Fragment key={j}> 
                                                    {
                                                        (JContent.equalsIgnoreCase(key, "id") || JContent.equalsIgnoreCase(key, "s/n") || JContent.equalsIgnoreCase(key, "sn"))?
                                                            (this.state.ul === undefined)?
                                                            <td><b>{this.state.offset+i+1}</b></td> : null
                                                        :
                                                            (key.includes("audit"))?null : 
                                                            <td ref={this["ref"+i+j]} onDoubleClick={this.handleColDoubleClick.bind(null, "ref"+i+j, j)} onKeyUp={this.handleContentChange.bind(null, "ref"+i+j)}> 
                                                            {
                                                                (key.includes("picture") || key.includes("photo") || key.includes("image"))?
                                                                    <img src={item[key]} width="40px" height="40px" className="picture" alt="" />
                                                                :
                                                                    (key.includes("link"))? 
                                                                        <a href={item[key]} target="_blank" rel="noopener noreferrer" >Open Link </a>
                                                                    :
                                                                        (item[key] !== undefined)?
                                                                            (item[key] === true)? "True" :
                                                                            (item[key] === false)? "False":
                                                                            (item[key] === null)? "Null":

                                                                            <p title={item[key]}>
                                                                                <TextLimit limit={30}>
                                                                                    {JContent.highlight(item[key], this.props.searchString)}
                                                                                </TextLimit>
                                                                            </p>
                                                                        : ""
                                                            }
                                                        </td>
                                                    }
                                                    </React.Fragment>
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
                                                (this.state.actionColumn === true || this.state.actionColumn === undefined)?
                                                    <td>
                                                        <ImageField tag="s" onChange={this.handleSelectChange.bind(null,item)}>
                                                            <option value="">Select</option>
                                                            {
                                                                (this.props.actionOptions !== undefined)?
                                                                    this.props.actionOptions.map((item, i) => (<option value={item.value || item.label} label={item.label} title={item.title} key={i} />))
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
                    {
                        this.props.batchProcess !== undefined && this.state.rowsSelected.length > 0 ? 
                        <div className="container btn-div content-left form-block">
                            <LabelField label={"Selected: "+ this.state.rowsSelected.length} tag="s" onChange={this.handleBatchSelect} name="batchSelect" value={this.state.batchSelect}>
                                <option value="">Select</option>
                                {
                                    this.props.onBatchEdit !== undefined? <option value="edit">Edit</option>:null
                                }
                                {
                                    this.props.onBatchDelete !== undefined? <option value="delete">Delete</option>:null
                                }
                            </LabelField>
                        </div> : null
                    }
                    <div className="container btn-div">
                        {
                            this.props.showNavigation !== false ?
                                <div className="two">
                                    <div className="content-left">
                                        <button title="First page" className={(this.state.currentPage === 1)?"active":""} onClick={this.firstPage} disabled={(this.state.currentPage === 1)? true: false}> <FaAngleDoubleLeft /> </button>
                                        <button title="Prev page" onClick={this.prevPage} disabled={(this.state.currentPage === 1)? true: false}><GoChevronLeft /></button>
                                        {
                                            this.state.otherPages.map((val, i) => (
                                                <button title={"Page " + val} className={(this.state.currentPage === val)?"active":""} key={i} onClick={this.changePage.bind(null,val)} >{val}</button>
                                            ))
                                        }
                                        <button title="Next Page" onClick={this.nextPage} disabled={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))? true : false}><GoChevronRight /></button>
                                        <button title="Last Page" className={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))?"active":""} onClick={this.lastPage.bind(null)} disabled={(this.state.currentPage >= Math.ceil(this.props.total / this.state.dataPerPage))? true : false}><FaAngleDoubleRight /></button>
                                        {
                                            this.props.showNavigationText !== false ?
                                            <>
                                            { this.state.dataList.length === 0? <span> No Data Present</span> :
                                                <span> Showing {showingFrom} to {( this.state.total < showingTo) ? this.state.total : showingTo} of {this.state.total} record{this.state.total > 1?"s":null}</span>
                                            }
                                                { this.props.onUpdate !== undefined && this.props.inlineEdit !== undefined ? <span className="right active update-btn" onClick={this.handleUpdateTableData}>Update</span> : null}
                                            </> : null
                                        }
                                    </div>
                                </div> : null
                        }
                        {
                            this.props.showDPR !== false ?
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
                                </div> : null
                        }
                    </div>
                </div>
        </div>
    );
  }
}

export default TableView;

