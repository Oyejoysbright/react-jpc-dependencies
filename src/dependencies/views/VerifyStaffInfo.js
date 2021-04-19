import React, {  Component } from 'react'
import { JHttp } from './../services/Jpc';
import { baseUrl } from '../services/Constant';
import Loading from './Loading';
import Error from './Error';

export class VerifyStaffInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            epmisId: this.props.epmisId, fullName: "", nin: "", gender: "", email: "", image: "", notFound: false, loading: true, type: this.props.type
        }
    }
    
    componentDidMount() {
        this.switchType(this.state.type);
    }

    switchType = (type) => {
        switch (type) {
            case "academic":
                this.retrieveAcademicStaff();
                break; 
            case "temporary": this.retrieveTemporaryStaff();      
                break;
            case "multiple":
                this.searchMultipleTable();
                break;
            default:
                this.retrieveStaffInfo();
        }
    }
    
    retrieveAcademicStaff = () => {
        JHttp.get(`${baseUrl}staff/assignment/get/academicStaff?epmisId=${this.state.epmisId}`,
                (data) => {
                    this.setState(data.staff);
                    this.setState({loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData(data);                        
                    }
                },
                () => {
                    this.setState({notFound: true, loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData({});                        
                    }
                });
    }

    retrieveStaffInfo = () => {
        JHttp.get(`${baseUrl}staff/assignment/get/staff?epmisId=${this.state.epmisId}`,
                (data) => {
                    this.setState(data);
                    this.setState({loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData(data);                        
                    }
                },
                () => {
                    this.setState({notFound: true, loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData({});                        
                    }
                });
    }

    retrieveTemporaryStaff = () => {
        JHttp.get(`${baseUrl}staff/assignment/get/temporaryStaff?epmisId=${this.state.epmisId}`,
                (data) => {
                    this.setState(data);
                    this.setState({loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData(data);                        
                    }
                },
                () => {
                    this.setState({notFound: true, loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData({});                     
                    }
                });
    }

    searchMultipleTable = () => {
        JHttp.get(`${baseUrl}staff/assignment/get/academicStaff?epmisId=${this.state.epmisId}`,
                (data) => {
                    if (data.id !== 0) {
                        this.setState(data.staff);
                        this.setState({loading: false});
                        if (this.props.getData !== undefined) {
                            this.props.getData(data);                        
                        }
                    }
                    else {
                        JHttp.get(`${baseUrl}staff/assignment/get/temporaryStaff?epmisId=${this.state.epmisId}`,
                                (data) => {
                                    if (data.id !== 0) {
                                        this.setState(data);
                                        this.setState({loading: false});
                                        if (this.props.getData !== undefined) {
                                            this.props.getData(data);                        
                                        }
                                    }
                                    else {
                                        JHttp.get(`${baseUrl}staff/assignment/get/staff?epmisId=${this.state.epmisId}`,
                                                (data) => {
                                                    this.setState(data);
                                                    this.setState({loading: false});
                                                    if (this.props.getData !== undefined) {
                                                        this.props.getData(data);                        
                                                    }
                                                },
                                                () => {
                                                    this.setState({notFound: true, loading: false});
                                                    if (this.props.getData !== undefined) {
                                                        this.props.getData({});                        
                                                    }
                                                });
                                    }
                                },
                                () => {
                                    this.setState({notFound: true, loading: false});
                                    if (this.props.getData !== undefined) {
                                        this.props.getData({});                     
                                    }
                                });
                    }
                },
                () => {
                    this.setState({notFound: true, loading: false});
                    if (this.props.getData !== undefined) {
                        this.props.getData({});                        
                    }
                });
    }

    render() {
        return (
            <div className="verify-staff-info">
                {
                    (this.state.loading)?
                    <Loading />
                    :
                    (this.state.notFound)? <Error label="Something went wrong" />
                    :
                    <>
                        <img src={this.state.image} alt="" />
                        <table>
                            <thead>
                                <tr>
                                    <td>KEY</td>
                                    <td>VALUE</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Epmis Id</td>
                                    <td> {this.state.epmisId} </td>
                                </tr>
                                <tr>
                                    <td>Full Name</td>
                                    <td> {this.state.fullName} </td>
                                </tr>
                                <tr>
                                    <td>NIN</td>
                                    <td> {this.state.nin} </td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td> {this.state.gender} </td>
                                </tr>
                                <tr>
                                    <td>E-Mail</td>
                                    <td> {this.state.email} </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            </div>
        )
    }
}

export default VerifyStaffInfo
