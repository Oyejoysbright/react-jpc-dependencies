import React from 'react';
import { Tag } from './Tags';
export const jsVar = (name)=>{
    return(
        <span className="js-var">{name}</span>
    )
}

export const jsVar2 = (name)=>{
    return(
        <span className="js-var-name">{name}</span>
    )
}

export const jsMeth = (name)=>{
    return(
        <span className="js-meth">{name}</span>
    )
}

export const Pad = ({sp, children})=>{
    return(
        <span style={{paddingLeft: sp, display: "inline-block"}}>{children}</span>
    )
}

export const jsThis = (name)=>{
    return(
        <>
        <span className="js-oper">this</span>.<span className="js-var">{name}</span>
        </>
    )
}
export const jsVarName = (vars, name)=>{
    return(
        <>
        <span className="js-var">{vars}</span> <span className="js-var-name">{name}</span>
        </>
    )
}

export const useStateFunc = (val, setVal, stateVal)=>{
    return(
        <>
            <span className="js-var">const</span> 
            [<span className="js-var">{val}</span>, <span className="js-var">{setVal}</span>]
             = <span className="js-meth">useState</span>("{stateVal}"); 
             <br></br>
        </>
    );
}

export const jsObj = (obj, count) => {
    let objs = [];
    let n = parseInt(count);

    for (const key in obj) {
        n--;
        let o = <span>
                    <span className="html-attr"> {key}</span>
                    <span>:</span>
                    <span className="html-val"> {obj[key]}</span>
                    {n === 0?" ":<span>, </span>}
                </span>
        objs.push(o);
    }

    return(
        <>
        {"{"}
        { objs.map((e, i) => {
            return <span key={i}>{e}</span>
        })}
        {"}"}
        </>
    );
}

/**
 * METHODS 
 */
/*
    alert("hello");
*/
 export const method = (name, param)=>{
     return(
         <>
         <span className="js-meth">{name}</span><span>({param});</span>
        </>
     );
 }
 /*
    alert("hello");
*/
 export const Method2 = ({name, children})=>{
     return(
         <>
         <span className="js-meth">{name}</span><span>(<br></br>
            {children})</span>
            <br></br>
        </>
     );
 }
 /*
    alert("hello", this.constant);
*/
 export const Method = ({name, params})=>{
     
     return(
         <>
         <span className="js-meth">{name}</span><span>(</span>
            {params !== undefined?params.map((e, i, a) => {
                return <span key={i}>
                            <span>{e}</span>
                            <span>{i < a.length-1? <span>, </span>:""}</span>
                    </span>
            }) : ""}
         <span>)</span>
        </>
     );
 }
/*
const handleButtonClicked =(toggleState) =>{

    setTimeout (() =>{
    toggleState();
    }2000);
    
    }
*/
export const Meth = ({name, params, bparam, children, sp})=>{

    
    return(
        <div style={{paddingLeft: sp}}>
        <MethFunc name={name} params={params} />
        <OpenCurly />
        <br></br>
        &nbsp;&nbsp;&nbsp;
        {children}
        <br></br>
        <ClosedCurly2 param={bparam} />
        </div>
    );
}

export const Consumers = ({name, params, children})=>{

    return(
        <>
            <Tag name={name}><br></br>
                &nbsp;<span>{"{({"}</span>
                {params !== undefined?params.map((e, i, a) => {
                    return <span key={i}>
                                <span>{e}</span>
                                <span>{i < a.length-1? <span>, </span>:""}</span>
                        </span>
                }) : ""}
                <span>{"})=>{"}</span><br></br>
                {children}
                <span>{"}}"}</span><br></br>
            </Tag>
        </>
    );
}

export const Consumer = ({name, params, children})=>{

    return(
        <>
            <Tag name={name}><br></br>
                &nbsp;<span>{"{("}</span>
                {params !== undefined?params.map((e, i, a) => {
                    return <span key={i}>
                                <span>{e}</span>
                                <span>{i < a.length-1? <span>, </span>:""}</span>
                        </span>
                }) : ""}
                <span>{")=>{"}</span><br></br>
                {children}
                <span>{"}}"}</span><br></br>
            </Tag>
        </>
    );
}

/**
 * switchClicked (state) =>{

    state is either true or false
    
    }
 */

export const Func =({name, params, children})=>{

   
    return(

        <>
            <Method name={name} params={params} />
            <span>{"{"}</span><br></br>
            {children}<br></br>
            <span>{"}"}</span>
        </>
    );
}
/**
 * const switchClicked =(state) =>{

    state is either true or false
    
    }
 */
export const FuncVar =({name, params, children, sp})=>{

    let func = [OpenFuncVar(name, params), <pre style={{paddingLeft: sp}}>{children}</pre>, ClosedCurly()]
    let i = 0;
    return(

        <>
            {func.map(emap => {
                return <div key={i++}>{emap}</div>
            })}
        </>
    );
}

/**
 * switchClicked =(state) =>{

    state is either true or false
    
    }
 */

 export const FuncVar2 =({name, params, children})=>{

    let func = [OpenFuncVar2(name, params), <pre>{children}</pre>, ClosedCurly()]
    let i = 0;
    return(

        <>
            {func.map(emap => {
                return <div key={i++}>{emap}</div>
            })}
        </>
    );
}



export const MethJS =({name, params, children})=>{

    let func = [OpenFuncVarJS(name, params), <pre>{children}</pre>, ClosedCurly()]
    let i = 0;
    return(

        <>
            {func.map(emap => {
                return <div key={i++}>{emap}</div>
            })}
        </>
    );
}
const OpenCurly = ()=>{
    return (<span>{"{"}</span>);
}

const ClosedCurly = ()=>{
    return (<span>{"}"}</span>);
}

const ClosedCurly2 = ({param})=>{
    return (<span>{"}"+param+");"}</span>);
}

export const MethFunc =({name, params})=>{
   
    return(

        <>
            <span className="js-meth">{name} </span>(({params}) =>

        </>
    );
}


const OpenFuncVar =(name, params)=>{
    
    return(

        <>
            <span className="js-var">const</span> <span className="js-meth">{name} </span> 
            =({params}) <span className="js-arr">=></span>{"{"}        
        </>
    );
}

const OpenFuncVar2 =(name, params)=>{
    
    return(

        <>
             <span className="js-meth">{name} </span> 
            =({params}) <span className="js-arr">=></span>{"{"}        
        </>
    );
}

const OpenFuncVarJS =(name, params)=>{
    
    return(

        <>
             <span className="js-meth">{name} </span> 
            =({params}) <span className="js-arr"></span>{"{"}        
        </>
    );
}



