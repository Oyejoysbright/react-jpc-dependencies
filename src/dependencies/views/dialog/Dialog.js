import React from 'react';
import DialogAlert from './DialogAlert';
import DialogConfirm from './DialogConfirm';
import { connect } from 'react-redux';
import { getDialogAction, DIALOG_ALERT, DIALOG_HIDE, DIALOG_CONFIRM } from './dialogActionReducers';



let dispatcher = null;

export const hide=(hideAlert)=>{
        hideAlert();
    }

export const alert = (message, callback)=>{
    dispatcher(getDialogAction(DIALOG_ALERT, message, callback));
}

export const confirm=(message, action)=>{
    dispatcher(getDialogAction(DIALOG_CONFIRM, message, action));
}

const mapStateToProps = (state)=>{
    return {
        type : state.dialog.type,
        message: state.dialog.message,
        confirmAction: state.dialog.confirmAction
    }
}
    
const mapDispatchToProps = (dispatch)=> {
    dispatcher = dispatch;
    return {
        hide: ()=>dispatch(getDialogAction(DIALOG_HIDE, "")),
    }
}

const Wrapper = ({hide, confirmAction, type, message}) =>{

    var boxToShow;

    const onHideAlert = () =>{
        hide();
        if(confirmAction != null){
            confirmAction();
        }
    }

    const onHideConfirm = () => {
        hide();
        if(confirmAction != null){
            confirmAction();
        }
    }


    switch (type) {
        case DIALOG_ALERT:
            boxToShow = <div id="HPalrtConfm">
                            <DialogAlert message={message} onHide={onHideAlert} />
                        </div>
            break;
        case DIALOG_CONFIRM:
            boxToShow = <div id="HPalrtConfm">
                            <DialogConfirm 
                            message={message} 
                            onHide={onHideAlert} 
                            onConfirm={onHideConfirm} />
                        </div>
            break;
        default:
            boxToShow = ""
            break;
    }
    return boxToShow
                

}


const Dialog = connect(mapStateToProps, mapDispatchToProps)(Wrapper); 
export default Dialog;