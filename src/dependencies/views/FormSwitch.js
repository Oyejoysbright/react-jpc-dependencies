import React, {useState} from 'react';


function FormSwitch({name, values = ["yes", "no"], onChange, value}) {
    
    const defaultStyle = {backgroundColor: "#eef0ee", left: "5px"};
    const activeStyle = {backgroundColor: "#ddffdd", left: "40px"};


    let defState = (value !== undefined && value === values[0])? true : false;
    
    const [state, setState] = useState(defState);

    const onSwitch =()=>{
        
        setState(!state);
        let e = {
            target:{
                name: name,
                value: state === true?values[1]:values[0]
            }
        }
        onChange(e);
        
    }

    return( 
        <React.Fragment>
                <div className="HPradio" style={{backgroundColor: state?activeStyle.backgroundColor: defaultStyle.backgroundColor}}>
                    <div onClick={onSwitch} style={{left: state?activeStyle.left : defaultStyle.left}}></div>
                </div>
                <span className="HpradioText">{state? values[0] : values[1]}</span>
                <input type="hidden" name={name} value={state} />
        </React.Fragment>
    );
}
export default FormSwitch;