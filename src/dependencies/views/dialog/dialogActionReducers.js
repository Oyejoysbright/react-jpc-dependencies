
export const DIALOG_ALERT = "dig_A";
export const DIALOG_CONFIRM = "dig_C";
export const DIALOG_HIDE = "dig_H";

export const getDialogAction = (type, message, confirmAction = null) => {
    if(confirmAction == null){
        return {type: type, message: message}
    }
    return {type: type, message: message, confirmAction: confirmAction}
}