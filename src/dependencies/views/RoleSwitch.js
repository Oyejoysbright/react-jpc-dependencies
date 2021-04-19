import React, { useState, useContext } from 'react'
import { Store } from '../services/HP';
import { Values } from './../services/constant';
import { JArray } from './../services/Jpc';
import { GiTeacher } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { GoLaw } from 'react-icons/go';
import { MdPeople } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AppContext } from '../services/Provider';
import './RoleSwitch.css';


function RoleSwitch({onSwitch}) {

    const context = useContext(AppContext);
    const roles = Store.get(Values.roles, 1).split(",");
    const currentIndex = JArray.find.getIndex(roles, Store.get(Values.windowHolder, 1));

    const [next, setNext] = useState(roles[currentIndex+1]);
    const icon = getSwitchInfo(parseInt(next))["icon"];
    const label = getSwitchInfo(parseInt(next))["label"];


    const handleSwitch = () => {
        let swap = (parseInt(currentIndex) === parseInt(roles.length - 1))? 0 : currentIndex + 1;

        setNext(roles[(swap === roles.length - 1)? 0 : swap + 1]);
        onSwitch(parseInt(roles[swap]));
        context.setContent(0, 0);
    }

    var prevPosition = window.pageYOffset;
    window.onscroll = function () {
        var currentPosition = window.pageYOffset;
        if (prevPosition > currentPosition) {
            document.getElementById("floatedDiv").className = "sfc-default";
        } else {
            document.getElementById("floatedDiv").className = "sfc-scroll";
        }
        prevPosition = currentPosition;
    }

    return (
        <div className="jpc-float-bottom-right switch-floated-container-parent">
            <div id="floatedDiv" className="switch-floated-container">
                <span className= "switch-floated-btn" onClick={handleSwitch}> {icon} </span>
                <span className="switch-floated-label"> {label} </span>
            </div>
        </div>
    )
}

export default RoleSwitch




const S_MINISTRY = {id: 1, icon: <GoLaw title="Switch to ministry role" />, label: "Ministry"};
const S_INSPECTION = {id:2, icon: <AiOutlineEye title="Switch to inspection role" />, label: "Inspection"};
const S_SCHOOL = {id: 3, icon: <IoMdSchool title="Switch to school role" />, label: "School"};
const S_TEACHER = {id: 4, icon: <GiTeacher title="Switch to teacher role" />, label: "Teaching"};
const S_PARENT = {id: 5, icon: <MdPeople title="Switch to parent role" />, label: "Parenting"}

const getSwitchInfo = (domain) => {
    switch (domain) {
        case 1:
            return S_MINISTRY;
        case 2:
            return S_MINISTRY;
        case 3:
            return S_MINISTRY;
        case 4:
            return S_INSPECTION;
        case 5:
            return S_MINISTRY;
        case 6:
            return S_MINISTRY;
        case 7:
            return S_MINISTRY;
        case 8:
            return S_MINISTRY;
        case 9: 
            return S_SCHOOL;
        case 10: 
            return S_SCHOOL;
        case 11: 
            return S_SCHOOL;
        case 12: 
            return S_SCHOOL;
        case 13:
            return S_TEACHER;
        case 14:
            return S_PARENT; 
        default: return S_MINISTRY;
    }
}