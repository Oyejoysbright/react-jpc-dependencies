import React, { useState, useRef} from 'react';
import './LinksHolder.css';
import PropTypes from "prop-types";
function LinksHolder(props) {
    
   // required for listing prop.listKey and prop.list = [{listKey}]
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const inputRef = useRef(null);
var options = "";
    if(props.options !== undefined){
            options = props.options.map((list, i)=>{
            return <option key={i} value={list}>{list}</option>
        });
    }
    
    var handleKeyChange =e=>{
        
        if(e.keyCode === 32){
            setData(data=> data.concat(search));
            e.target.value = "";
        }

        if(e.keyCode === 8){
            if(data.length > 0){
                data.pop();
                var left = data.slice();
                setData(left);
            }
        }
    }

    
    var handleInputChange = e =>{
        setSearch(e.target.value);
        if(props.onChange){
            let obj = {
                target: {
                    name: props.name,
                    value: data.join(",")
                }
            }
            props.onChange(obj);
        }
    }

    var removeData =e=>{
        var evt = e.target;
        if(!e.target.id){
            evt = e.target.parentNode;
        }
        const i = data.indexOf(evt.id);
        data.splice(i, 1);
        var rem = data.slice();
        setData(rem);
    }

    // useEffect(()=>{
    //     inputRef.current.focus();
    // },[]);

   const handleFocus =()=>{
       inputRef.current.focus();
    //    <input type="hidden" name={props.name} value={data.join(',')} ref={dataRef} />
   }
    return( 
            <div onClick={handleFocus}>
                <div className="links-holder">
                {data.map(data =>(
                    <div className="links" key={data} id={data} onClick={removeData}>
                        <span>{data}</span>
                        <span className="close"></span>
                    </div>
                ))}               
                <input list="options" onKeyUp={handleKeyChange} 
                onChange={handleInputChange} className="link-search" 
                defaultValue={search}
                ref = {inputRef}
                 style={{width: "100px", border:"none", marginBottom: "0px"}}
                 placeholder="type and space.."/>  
                </div>
                   
                <datalist id="options" >
                    {options}
                </datalist>
            </div>
    );
}

LinksHolder.propTypes = {
    options: PropTypes.array.isRequired
};
export default LinksHolder;