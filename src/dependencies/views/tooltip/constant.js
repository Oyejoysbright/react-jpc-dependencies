export const auditToToolTip = (data = {})=> {

    let tips = [];
    for (const key in data) {
        
        if(data[key].trim().length > 0){
            tips.push({name: key, value: data[key]});
        }
    }
    return tips;
}