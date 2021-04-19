import React, { useRef, useState, useEffect } from 'react'
import ZeroContainer from './ZeroContainer';
import './ObjectList.css';
import { Consumer } from '../services/Provider';
import ImageField from './ImageField';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import TextLimit from './TextLimit';
import { Link } from 'react-router-dom';
import { JArrayObject, JContent, JArray, JObject } from '../services/Jpc';
import { FaSort, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import LabelField from './LabelField';

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
 * @param {Function} onUpdate Define an option to update the table (This depends on inlineEdit). Takes Function
 * 
 * @param {Function} onBatchDelete Define an option to delete selected rows (This depends on batchProcess). Takes Function
 * 
 * @param {Function} onBatchEdit Define an option to edit selected rows (This depends on batchProcess). Takes Function
 * 
 */
function ObjectList2({actionColumn, ul, customButtonLabel, linkLabel, data, title = [""], total, perPage, inlineEdit, batchProcess, showDPR, showNavigation, showNavigationText, searchString, isSearching, onEdit, onDelete, onView, onChange, onCustomButton, onLink, onRowClick, onUpdate, onBatchDelete, onBatchEdit}) {
    
    const checkNecessity = () => {
        //   Check if data prop is supplied
        if(data === ("" || undefined)){
            throw new Error("Data prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }
        //   Check if perPAGE prop is supplied
        if(perPage ===( "" || undefined || 0)){
            throw new Error("perPage prop is mandatory! \n Must be Integer \n If you think this is a code error, contact code provider");
        }
        //   Check if Title prop is supplied
        if(title ===( "" || undefined || [])){
            throw new Error("Title prop is mandatory! \n Must be array \n If you think this is a code error, contact code provider");
        }
    
        // Check if an array or object exist as a child of the data
        data.forEach(element => {
            for (const key in element) {
                if (typeof element[key] === "object" && element[key] !== (undefined || null)) {
                    console.error(key , " is an object and cannot appear as child of <td></td>");
                    throw new Error("Object cannot appear as a child of <td></td> \n If you think this is a code error, contact code provider");
                }
            }
        });
    }
    checkNecessity();


    const tableRef = useRef(null); const theadItemRef = useRef(null); const refs = useRef([]);
    const [dataList, setDataList] = useState([]); const [dataPerPage, setDataPerPage] = useState(perPage);
    const [rowsSelected, setRowSelected] = useState([]); const [state, setState] = useState({pages: [], current: 1});
    const [offset, setOffset] = useState(0);

    const zeroContainerPlaceholder = <tr className="zero-placeholder"><td colSpan={(!actionColumn)? title.length : title.length+1}> <h1>Data is Empty</h1></td></tr>;

    const getPages = () => {
        var totalPages = Math.ceil(total / dataPerPage);
        for (let i = 1; i <= totalPages; i++) {
            state.pages.push(i);
        }
    }
    
    if (state.pages.length === 0 || (perPage !== dataPerPage)) {
        getPages();            
    }

    useEffect(() => {
        if (data !== dataList) {
            setDataList(data);
            console.log(state.current)
        }
        if (state.pages.length === 0 || (perPage !== dataPerPage)) {
            getPages();            
        }
        
    }, [data, state.pages, dataPerPage, perPage]);

    const handleSelectChange = (item,e) => {
        if(e.target.value === "View"){
            onView(item,e);
        }
        else if(e.target.value === "Edit"){
            onEdit(item,e);
        }
        else if(e.target.value === "Delete"){
            onDelete(item,e);
        }
    }
    
    const swapPage = (val) => {
        const newOffset = (val * dataPerPage) - dataPerPage;
        setOffset(newOffset);
        state.current = val;
        onChange(newOffset, dataPerPage);
    }

    
    const customBtnClicked = (row,e) => {
        onCustomButton(row,e);
    }

    const linkClicked = (row, e) => {
        onLink(row, e);
    }

    const handleDisplaySelectChange = (e) => {
        const offset = 5;
        onChange(offset, e.target.value);
        setDataPerPage(e.target.value);
    }


    const handleSorting = (referral = "", property) => {
        let currentOrder = theadItemRef.current.dataset.order;

        if (referral === "props") {
            let index = JArray.find.getIndex(title, property);
            property = JArrayObject.getKeys(dataList)[index];
        }

        const reset = (order = "") => {
            setDataList(dataList.sort(JArrayObject.customSort(JArrayObject.getKeys(dataList)[0], order)));
            theadItemRef.current.dataset.order = "default";
        }

        const sorter = (order = "") => {
            setDataList(dataList.sort(JArrayObject.customSort(property, order)));
            theadItemRef.current.dataset.order = order;
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

    const handleRowClick = (ref, item) => {
        if (onRowClick !== undefined) {
            onRowClick(item, refs[ref]);
        }
        
        if (!JArray.find.getBoolean(rowsSelected, item.id)) {
            rowsSelected.concat(item.id);
        }
        else JArray.remove(rowsSelected, item.id);
    }

    const handleColDoubleClick = (ref) => {
        if (inlineEdit !== undefined) {
            refs[ref].current.contentEditable = true;        
        }
    }

    const handleUpdateTableData = () => {
        let res = [];
        let rows = tableRef.current.rows;
        let counter = 0;
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
        
        if (onUpdate !== undefined) {
            onUpdate(res);
        }
    }

    const getSelectedInArray = () => {
        let res = [];
        for (let i = 0; i < rowsSelected.length; i++) {
            let val = rowsSelected[i];
            let item = JArrayObject.find.getObject(dataList, parseInt(val), "id");
            res.push(item);
        }
        return res;
    }
    
    const handleBatchEdit = () => {
        if (onBatchEdit !== undefined) {
            onBatchEdit(this.getSelectedInArray());
        }
    }

    const handleBatchDelete = () => {
        if (onBatchDelete !== undefined) {
            onBatchDelete(getSelectedInArray());
        }
    }

    const handleBatchSelect = (e) => {
        let value = e.target.value;
        setState({[e.target.name]: value});

        switch (value) {
            case "edit":
                handleBatchEdit();
                break;
            case "delete":
                handleBatchDelete();
                break;
            default:
                break;
        }
    }

    return (
        <Consumer>
        {   ({}) => (
                <div className="object-list">
                        <div className="table-fit">
                            <div>
                                <table ref={tableRef}>
                                    <thead>
                                        <tr className="bold">
                                            {
                                                    title.map((col, i) => (
                                                        <React.Fragment key={i}> 
                                                        {
                                                            (JContent.equalsIgnoreCase(col, "id") || JContent.equalsIgnoreCase(col, "s/n") || JContent.equalsIgnoreCase(col, "sn"))?
                                                                (ul === undefined)?
                                                                    <th data-order="default" onClick={handleSorting.bind(null, "props", col)} ref={theadItemRef} > {col} <FaSort className="icon" />  </th>
                                                                    : null
                                                            :
                                                                <th data-order="default" onClick={handleSorting.bind(null, "props", col)} ref={theadItemRef} > {col} <FaSort className="icon" />  </th>
                                                        }
                                                        </React.Fragment>
                                                    ))
                                            }
                                            { (actionColumn === true || actionColumn === undefined)? <th> ACTION </th> : null }
                                        </tr>
                                    </thead>
                                    <tbody className="zero-container-main">
                                        <ZeroContainer data={dataList} placeholder={zeroContainerPlaceholder}>
                                        {
                                            dataList.map((item, i) => (
                                                <tr data-position={i} className={(JArray.find.getBoolean(rowsSelected, item.id))? "row-selected" : ""} key={i} onClick={handleRowClick.bind(null, i,item)} ref={r => {refs.current[i] = r}}>
                                                    {
                                                        JObject.getKeys(item).map((key, j) => (
                                                            <React.Fragment key={j}> 
                                                            {
                                                                (JContent.equalsIgnoreCase(key, "id") || JContent.equalsIgnoreCase(key, "s/n") || JContent.equalsIgnoreCase(key, "sn"))?
                                                                    (ul === undefined)?
                                                                    <td><b>{offset+i+1}</b></td> : null
                                                                :
                                                                    <td ref={r => {refs.current[i+j] = r}} onDoubleClick={handleColDoubleClick.bind(null, i+j)}> 
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
                                                                                            {JContent.highlight(item[key], searchString)}
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
                                                        (onCustomButton !== undefined)?
                                                            <td>
                                                                <button onClick={customBtnClicked.bind(null,item)}>
                                                                    {
                                                                        (customButtonLabel === undefined || customButtonLabel === "")? "Custom Button": customButtonLabel
                                                                    }
                                                                </button>
                                                            </td>
                                                        :
                                                            null
                                                    }
                                                    {
                                                        (onLink !== undefined)?
                                                            <td>
                                                                <Link onClick={this.linkClicked.bind(null,item)}>
                                                                    {
                                                                        (linkLabel === undefined || linkLabel === "")? "Custom Button": linkLabel
                                                                    }
                                                                </Link>
                                                            </td>
                                                        :
                                                            null
                                                    }
                                                    {
                                                        (actionColumn === true || actionColumn === undefined)?
                                                            <td>
                                                                <ImageField tag="s" onChange={handleSelectChange.bind(null, item)}>
                                                                    <option value="">Select</option>
                                                                    {
                                                                        (onView !== undefined)?
                                                                            <option value="View" title="View this row"> View</option>
                                                                        :
                                                                            null
                                                                    }
                                                                    {
                                                                        (onEdit !== undefined)?
                                                                            <option value="Edit" title="Edit this row"> Edit</option>
                                                                        :
                                                                            null
                                                                    }
                                                                    {
                                                                        (onDelete !== undefined)?
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
                            {
                                batchProcess !== undefined && rowsSelected.length > 0 ? 
                                <div className="container btn-div content-left form-block">
                                    <LabelField label={"Selected: "+ rowsSelected.length} tag="s" onChange={handleBatchSelect} name="batchSelect" value={state.batchSelect || ""}>
                                        <option value="">Select</option>
                                        {
                                            onBatchEdit !== undefined? <option value="edit">Edit</option>:null
                                        }
                                        {
                                            onBatchDelete !== undefined? <option value="delete">Delete</option>:null
                                        }
                                    </LabelField>
                                </div> :null
                            }
                            <div className="container btn-div">
                                {
                                    showNavigation !== false ?
                                        <div className="two">
                                            <div className="content-left">
                                                <button title="First page" className={(state.current === 1)?"active":""} onClick={swapPage.bind(null,1)} disabled={(state.current === 1)? true: false}> <FaAngleDoubleLeft /> </button>
                                                <button title="Prev page" onClick={swapPage.bind(null, state.current - 1)} disabled={(state.current === 1)? true: false}><GoChevronLeft /></button>
                                                {
                                                    state.pages.map((val, i) => (
                                                        <button title={"Page " + val} className={state.current === val?"active":""} disabled={state.current === val? true : false} key={i} onClick={swapPage.bind(null, val)} >{val}</button>
                                                    ))
                                                }
                                                <button title="Next Page" onClick={swapPage.bind(null, state.current + 1)} disabled={(state.current >= Math.ceil(total / dataPerPage))? true : false} ><GoChevronRight /></button>
                                                <button title="Last Page" className={(state.current >= Math.ceil(total / dataPerPage))?"active":""} onClick={swapPage.bind(null, Math.ceil(total / dataPerPage))} disabled={(state.current >= Math.ceil(total / dataPerPage))? true : false} ><FaAngleDoubleRight /></button>
                                                {
                                                    showNavigationText !== false ?
                                                    <>
                                                        <span> Showing {offset + 1} to {(offset + dataPerPage) < total ? offset + dataPerPage : total} of {total} record{total > 1 ? "s":""}</span>
                                                        { onUpdate !== undefined && inlineEdit !== undefined ? <span className="right active update-btn" onClick={handleUpdateTableData}>Update</span> : null}
                                                    </> : null
                                                }
                                            </div>
                                        </div> : null
                                }
                                {
                                    showDPR !== false ?
                                        <div className="two">
                                            <div className="content-right">
                                                <label>Display </label>
                                                <select className="display-select" name="displayPerRecord" value={dataPerPage} onChange={handleDisplaySelectChange}>
                                                    <option value="5">5</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                </select>
                                                <label> records</label>
                                            </div>
                                        </div> : null
                                }
                            </div>
                        </div>
                </div>
        )}
        </Consumer>
    )
}

export default ObjectList2