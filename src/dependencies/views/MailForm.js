import React, { useState } from 'react'
import LinksHolder from './LinksHolder';
import LabelFieldFormat from './LabelFieldFormat';
import LabelField from './LabelField';
import ButtonLoader from './ButtonLoader';
import { MdSend } from "react-icons/md";
import { FaTimes } from 'react-icons/fa';
import Progress from './Progress';

function MailForm({onSubmit, addresses = [], onReset}) {
    const [state, setState] = useState({
        type: "Email", loading: false, toRecipient: "", ccRecipient: "", bccRecipient: "", emailBank: addresses, showForm: true, message: "", subject: "",
        sheets: [], currentSheet: "", dataList: [], dataBank: [], thead: [], report: "Quick Report", filter: "", notice: "", percent: 0
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleReset = () => {
        setState({type: "Email", loading: false, toRecipient: "", ccRecipient: "", bccRecipient: "", showForm: true, message: ""});
        if (onReset) {
            onReset();
        }
    }
    
    return (
        <div>
            <form className="form-block" onSubmit={(e) => {e.preventDefault(); onSubmit(state, e)}}>
                <LabelFieldFormat label="TO" on >
                    <LinksHolder options={addresses} name="toRecipient" onChange={handleChange} value={state.recipient} />
                </LabelFieldFormat>
                <LabelFieldFormat label="CC" >
                    <LinksHolder options={addresses} name="ccRecipient" onChange={handleChange} value={state.recipient} />
                </LabelFieldFormat>
                <LabelFieldFormat label="BCC" >
                    <LinksHolder options={addresses} name="bccRecipient" onChange={handleChange} value={state.recipient} />
                </LabelFieldFormat>
                <LabelField label="Subject" name="subject" value={state.subject} onChange={handleChange} />
                <LabelField label="Message" on tag="t" name="message" value={state.message} onChange={handleChange} />
                <ButtonLoader src={<MdSend />} className="main-button" active={state.loading} >Send</ButtonLoader>
                <ButtonLoader src={<FaTimes />} className="optional-button" type="button" onClick={handleReset} > Cancel </ButtonLoader>
            </form>
            <Progress type="small" percentage={state.percent}  />
        </div>
    )
}

export default MailForm
