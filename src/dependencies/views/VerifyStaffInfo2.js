import React from 'react'
import { JHttp } from '../services/Jpc';
import { baseUrl } from '../services/constant';
import { formFailure } from '../services/constant';

export const VerifyStaffInfo2 = {
    staffEpmisId:"", fullName: "", nin: 0, gender: "", email: "",

    getObject: function () {

    },

    retrieveStaffInfo: function (value) {
        return new Promise( result => {
            let res;
            JHttp.get(`${baseUrl}staff/assignment/get/staff?epmisId=${value}`,
                    (data) => {
                        res = data;
                        result(res);
                    },
                    () => {res = formFailure});
        })
    },
    
    showTable: function () {
        return <table>
    <thead>
        <tr>
            <td>KEY</td>
            <td>VALUE</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Epmis Id</td>
            <td>{this.staffEpmisId}</td>
        </tr>
        <tr>
            <td>Full Name</td>
            <td></td>
        </tr>
        <tr>
            <td>NIN</td>
            <td></td>
        </tr>
        <tr>
            <td>Gender</td>
            <td></td>
        </tr>
        <tr>
            <td>E-Mail</td>
            <td></td>
        </tr>
    </tbody>
    </table>
    

}

}

