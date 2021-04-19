import React, { Component } from 'react'
import { JFilter, JArrayObject, JArray } from './../services/Jpc';

export class StudentResultBuilder extends Component {
    constructor(props) {
        super(props)
    
        this.subjects = [
            {id: 1, subjectCode: "MAT101"},
            {id: 2, subjectCode: "MAT102"},
            {id: 3, subjectCode: "MAT103"},
        ];

        this.data = [
            {id: 1, fullName: "Ayo Mide Joy", subjects: [this.subjects[0]]},
            {id: 2, fullName: "Kay Akin Wumi", subjects: [this.subjects[2], this.subjects[1], this.subjects[2], this.subjects[2]]},
            {id: 3, fullName: "Kay Ayo Sam", subjects: [this.subjects[0], this.subjects[1]]},
        ];

        this.state = {
            data: this.data
        }

        this.formData = {}


    }

    getThead = (data = [{}]) => {
        var thead = JArrayObject.getKeys(data);
        thead = JArray.remove(thead, "subjects");
        var col = JArrayObject.extractByKey(data, ["subjects"])[0].subjects;
        var colSub = JArrayObject.extractByKey(col, ["subjectCode"]);
        colSub.forEach(element => {
            thead.push(element.subjectCode);            
        });
        console.log(colSub)
        return thead;
    }

    buildStateObject = (name, value) => {
        this.setState({[name]: value});
        this.formData[name] = value;
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (value <= 100 && value.length <= 3) {
            this.buildStateObject(e.target.name, JFilter.event(e));            
        }
    }

    createStudentData = (student, i) => {
        const id = student.id;
        const name = student.fullName;
        const subjects = student.subjects;
        return <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    {
                        subjects.map((sub, j) => (
                            <td key={j}>
                                <input name={"student"+i+sub.subjectCode+j} data-type="number" value={this.state["student"+i+sub.subjectCode+j] || ""} onChange={this.handleChange} />
                            </td>
                        ))
                    }
                </tr>
    }
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                    {
                        this.getThead(this.state.data).map((item, i) => (
                        <th key={i}>{item}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((stu, i) => {
                            return this.createStudentData(stu, i);
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                    {
                        this.getThead(this.state.data).map((item, i) => (
                        <th key={i}>{item}</th>
                        ))
                    }
                    </tr>
                </tfoot>
            </table>
        )
    }
}

export default StudentResultBuilder
