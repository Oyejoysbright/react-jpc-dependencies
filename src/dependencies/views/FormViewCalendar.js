import React, { useState, useEffect } from 'react';
import "./FormViewCalendar.css";
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdEvent } from "react-icons/md";
import { FaRegCalendarPlus } from "react-icons/fa";
import ImageField from './ImageField';
import ButtonLoader from './ButtonLoader';

function FormViewCalendar({onChange, name, onEventCreate, showForm = true, data}){

    let dateMonitor = -1;
    let dateEvent = null;

    const [monthYear, setMonthYear] = useState({month: new Date().getMonth(), year: new Date().getFullYear()});
    const [dates, setDates] = useState([]);
    const [formCalendar, setFormCalendar] = useState({show: false, formDate: ""});
    const [viewCalendar, setViewCalendar] = useState({show: false, data: "", date: ""});


    useEffect(()=>{
        
        let prevCurDates= init(monthYear);
        setDates(prevCurDates);
    },[monthYear]);

    const handleMonthChange =(dir)=>{
        if(dir === "prev"){
            setMonthYear(monthYear => {
                let monitored = monthYearMonitor(monthYear.month-1, monthYear.year);
                return {month: monitored.month, year: monitored.year}
            });
        }else{
            setMonthYear(monthYear => {
                let monitored = monthYearMonitor(monthYear.month+1, monthYear.year);
                return {month: monitored.month, year: monitored.year}
            });
        }
    }

    const handleDate = (date, data)=>{
        let eDate = dateFormat(date);
        
        if(data != null){
            setViewCalendar({show: true, data: data, date: date});
        }else{
            if(showForm === true){
                setFormCalendar({show: true, formDate: eDate});
            }
        }
        
        if(onChange !== undefined){
            let nam = name !== undefined?name: "form-calendar";
            onChange({date: date, month: monthYear.month, year: monthYear.year, target: {
                name: nam,
                value: eDate
            }});
    
        }
    }

    const dateFormat = (date)=>{
        return monthYear.year+"-"+dualize(monthYear.month+1)+"-"+dualize(date);
    }

    const dateInData = (date) =>{
        
        let isExist = {status:false, pos: -1};

        data.forEach(e => {
          
            if(e.start === date){
                isExist = {status:true, pos: 0, meta: e};
            }else if(e.end === date){

                isExist =  {status:true, pos: 1, meta: e};
            }

        });
        return isExist;
    }

    const hideForm = (isView)=>{
        if(!!isView){
            setViewCalendar({...viewCalendar, show: false});
        }else{
            setFormCalendar({...formCalendar, show: false});
        }
    }

    const onEvent = (eventState)=>{
        if(onEventCreate !== undefined){
            onEventCreate(eventState);
        }
    }
  
    return(
        <div className="form-view-calendar-wrapper">
            <div className="form-view-calendar-inputs">
                <div className="form-view-calendar-headers">
                    <div className="form-view-calendar-month-controls">
                        <div className="form-view-calendar-month">
                            <h2>{getTextualMonth(monthYear.month)+" "+monthYear.year}</h2>
                        </div>
                        <div className="form-view-calendar-controls">
                            <MdKeyboardArrowUp onClick={handleMonthChange.bind(null, "prev")} />
                            <MdKeyboardArrowDown onClick={handleMonthChange.bind(null, "next")} />
                        </div>
                    </div>
                    <div className="form-view-calendar-row-weeks">
                        <span className="form-view-calendar-size form-view-calendar-row-week">Sun</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Mon</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Tue</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Wed</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Thu</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Fri</span>
                        <span className="form-view-calendar-size form-view-calendar-row-week">Sat</span>
                    </div>
                </div>

                <div className="form-view-calendar-dates">
                    <div className="form-view-calendar-row-date">
                        {/**allDates */
                            
                            dates.map((e, i) => {
                                let date = dateFormat(e.date);

                                if(data !== undefined){
                                    let isExist = dateInData(date);
                                
                                let cName = "";
                                if(isExist.status === true){

                                    dateMonitor = isExist.pos;
                                    cName = "form-view-calendar-event";
                                    dateEvent = isExist.meta;
                                }else{
                                    if(dateMonitor === 0){
                                        dateMonitor = 0;
                                        cName = "form-view-calendar-event";
                                    }else{
                                        dateMonitor = -1;
                                        dateEvent = null;
                                        cName = "";
                                    }
                                }

                                return <span onClick={handleDate.bind(null, e.date, dateEvent)}  key={i} className={` ${e.id} form-view-calendar-size ${cName}`}>
                                    <span className="form-view-calendar-row-date-text">
                                        <span>{e.date}</span>
                                        <span className={dateEvent !== null? "form-view-calendar-tool-tip":""}>
                                        {dateEvent !== null? dateEvent.name:""}
                                        </span>
                                    </span>
                                </span>
                                }else{

                                    return <span onClick={handleDate.bind(null, e.date, null)}  key={i} className={` ${e.id} form-view-calendar-size`}>
                                    <span className="form-view-calendar-row-date-text">
                                        <span>{e.date}</span>
                                    </span>
                                </span>
                                }
                                
                        })
                        }
                    </div>
                </div>

            </div>
                        
            <CalendarForm onEventCreate={onEvent} hideForm={hideForm} date={formCalendar.formDate} show={formCalendar.show} />
            <CalendarView date={viewCalendar.date} handleDate={handleDate} data={viewCalendar.data} show={viewCalendar.show} hideForm={hideForm}/>
        </div>
    );
}


function CalendarForm({date, show, hideForm, onEventCreate}){

    let fields = {
        name: "", start: "", end: "", description: ""
    }

    
    let cName = show === true?"form-view-calendar-form-show":"form-view-calendar-form-hide";

    const [state, setState] = useState(fields);
    const [error, setError] = useState("");
    const [started, setStarted] = useState(false);
    const inputChange = (e)=>{
        if(error !== "")setError("");

    let {name, value} = e.target;

        setState({...state, [name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
console.log(fields);
        if(compareDate(state.start, state.end)){
            onEventCreate(state);
        }else{
            setError("Start date must be earlier than end date.");
        }
        
    }

    useEffect(()=>{
        if(date !== "" && started === false){
            setState({...state, start: date});
            setStarted(true);
        }
    },[state, date, started]);
    
    const closeForm = ()=>{
        hideForm();
    }


    return(
        <div className={`form-view-calendar-form ${cName}`}>
            <div className="form-view-calendar-form-title-close">
                <h2 className="form-cal">Create Event</h2>
                <div className="form-view-calendar-form-close t-right">
                    <span onClick={closeForm}>&times;</span>
                </div>
            </div>
            <form className="form-block" onSubmit={handleSubmit}>
            
                <label>Name</label>
                
                <ImageField required={true} onChange={inputChange} src={<MdEvent />} name="name" value={state.name}/>
                <div className="form-inline">
                    <label>Start</label>
                    <ImageField required={true}  onChange={inputChange} type="date" src={<MdEvent />} placeholder={date} name="start" value={state.start} />
                </div>
                <div className="form-inline">
                    <label>End</label>
                    <ImageField required={true}  onChange={inputChange} type="date" src={<MdEvent />} name="end" value={state.end}/>
                </div>
                <label>Description</label>
                <ImageField required={true}  onChange={inputChange} type="date" src={<MdEvent />} tag="t" name="description" value={state.description}/>
                <div className="form-view-calendar-error">{error}</div>
                <ButtonLoader src={<FaRegCalendarPlus />}>Create</ButtonLoader>
            </form>
        </div>
    )
}

function compareDate(start, end){
    //yyyy-mm-dd
    let sData = start.split("-");
    let eData = end.split("-");

    if(eData[0] === sData[0] && eData[1] > sData[1]){
        return true;
    }
    if(eData[0] === sData[0] && eData[1] === sData[1] && eData[2] > sData[2]){
        return true;
    }
    if(eData[0] > sData[0]){
        return true;
    }else if(eData[1] > sData[1]){
        return true;
    }else if(eData[1] === sData[1] && eData[2] > sData[2]){
        return true;
    }
    return false;
}

function CalendarView({date, handleDate, data, show, hideForm}){
    let cName = show === true?"form-view-calendar-form-show":"form-view-calendar-form-hide";
    const closeForm = ()=>{
        hideForm(true);
    }

    const onUpdate = ()=>{
        hideForm(true);
        handleDate(date, null);
    }

    return(
        <div className={`form-view-calendar-form ${cName}`}>
            <div className="form-view-calendar-form-title-close">
                <h2 className="form-cal">{data.name}</h2>
                <div className="form-view-calendar-form-close t-right">
                    <span onClick={closeForm}>&times;</span>
                </div>
                
            </div>
            <div>
            
            <p>
                <span className="form-view-calendar-view-label">From:</span> 
                <b>{data.start} </b>
            </p>
            <p>
                <span className="form-view-calendar-view-label">To:</span> 
                <b>{data.end}</b> 
            </p>
            <br></br>
            <div>
                <span className="form-view-calendar-view-label">Description:</span> 
            </div>
            <p className="form-view-calendar-description">{data.description}</p>
        
            </div>
            <div className="form-view-calendar-view-update t-right">
                <span onClick={onUpdate}>Update</span>
            </div>
        </div>
    );
}
function dualize(n){
    let num = n+"";
    if(num.length > 1){
        return n;
    }else{
        return "0"+num;
    }
}

function init (monthYear){
    let prevDates = getPrevMonthDates(monthYear);
    let curDates = getCurrentMonthDates(monthYear);
    let prevCurDates = prevDates.concat(curDates);
    let nextDates = getNextMonthDates(prevCurDates.length);
    return prevCurDates.concat(nextDates);


}

function getMonthFirstDay(month, year){
    let startDate = new Date();
     startDate.setDate(1);
     startDate.setMonth(month);
     startDate.setFullYear(year);
     return startDate.getDay();
}


function getTextualMonth(monthInt){
    let month;
    switch (monthInt) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        default:
            month = "December";
            break;
    }
    return month;
}

function getMonthLastDate(monthInt){
    let lastDate;

    switch (monthInt) {
        case 8:
        case 3:
        case 5:
        case 10:
            lastDate = 30;    
            break;
        case 1:
            lastDate = 28;
            break;
        default:
            lastDate = 31;
            break;
    }
    return lastDate;
}

function getPrevMonthDates(monthYear){
    let monthFirstDay = getMonthFirstDay(monthYear.month, monthYear.year);
    let prevMonthDates = [];
    for (let i = 0; i < monthFirstDay; i++) {
        let lastDate = getMonthLastDate(monthYear.month-1)+1;
        let prevDate = lastDate-(monthFirstDay-i);
        let res = {date: prevDate, id : "form-view-calendar-prev-date"};
        prevMonthDates.push(res);
    }
    return prevMonthDates;
}

function isCurDate(curDate, monthYear, date){
    
    if(monthYear.month === curDate.getMonth() 
    && monthYear.year === curDate.getFullYear() 
    && date === curDate.getDate()){
        return true;
    }
    return false;
}
function getCurrentMonthDates(monthYear){
    let curDate = new Date();
    let monthFirstDay = getMonthLastDate(monthYear.month);
    let curMonthDates = [];
    for (let i = 0; i < monthFirstDay; i++) {
        let res = {};
        if(isCurDate(curDate, monthYear, i+1)){
            res = {date: i+1, id : "form-view-calendar-cur-date form-view-calendar-today"};
            curMonthDates.push(res);
            continue;
        }
        res = {date: i+1, id : "form-view-calendar-cur-date"};
        curMonthDates.push(res);
    }
    return curMonthDates;
}

function getNextMonthDates(prevCurDatesLen){
    let rem = 42 - prevCurDatesLen;
    let nextDates = [];
    for (let i = 0; i < rem; i++) {
        let res = {date: i+1, id : "form-view-calendar-next-date"};
        nextDates.push(res);
    }
    return nextDates;
}
function monthYearMonitor(monthInt, year){

    if(monthInt < 0){

        return {month: 11, year: year-1};

    }else if(monthInt > 11){

        return {month: 0, year: year+1};

    }else{

        return {month: monthInt, year: year};
    }

    
}
export default FormViewCalendar;