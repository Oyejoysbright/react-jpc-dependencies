import React from 'react';

export function HtmlTag(name){
    return(
        <span className="html-tag"> {name} </span>
    )
}

export function HtmlAttr(name){
    return(
        <span className="html-attr"> {name} </span>
    )
}

export function HtmlVal(name){
    return(
        <span className="html-val"> {name} </span>
    )
}


export const OpenTag = ({name, attr, val, sp}) =>{
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
            <span className="html-tag">{name}</span>
            <span className="html-attr"> {attr}</span><small>="</small>
            <span className="html-val">{val}</span><small>"</small>
            <span className="html-gt">{">"}</span>
        </span>
    );
}

export const CloseTag = ({name, sp}) =>{
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"</"}</span>
        <span className="html-tag">{name}</span>
        <span className="html-gt">{">"}</span>
        </span>
        
    );
}


export const ClassTag = ({name, val, children, sp, b}) =>{
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
            <span className="html-attr"> className</span><small>="</small>
            <span className="html-val">{val}</span><small>"</small>
            <span className="html-gt">{">"}</span>
                {children}
            {b !== undefined?<span dangerouslySetInnerHTML={{__html: space}}></span>:""}<span className="html-lt">{"</"}</span>
            <span className="html-tag">{name}</span>
            <span className="html-gt">{">"}</span>
        </span>
    );
}

export const SemiClassTag = ({name, val, sp}) => {
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
        <span className="html-attr"> className</span><small>="</small>
        <span className="html-val">{val}</span><small>"</small> 
        <span className="html-lt">{"/>"}</span>
        </span>
    );
}

export const Tag = ({name, children, sp, b}) =>{
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
            <span className="html-gt">{">"}</span>
                {children}
                {b !== undefined?<span dangerouslySetInnerHTML={{__html: space}}></span>:""}<span className="html-lt">{"</"}</span>
                <span className="html-tag">{name}</span>
            <span className="html-gt">{">"}</span>
        </span>
    );
}

export const SemiTag = ({name, sp}) =>{
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
        <span className="html-lt">{" />"}</span>
        </span>
    );
}
export const IdTag = ({name, val, children, sp, b}) => {
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
        <span className="html-attr"> id</span><small>="</small>
        <span className="html-val">{val}</span><small>"</small>
            {children}
            {b !== undefined?<span dangerouslySetInnerHTML={{__html: space}}></span>:""}<span className="html-lt">{"</"}</span>
            <span className="html-tag">{name}</span>
        <span className="html-gt">{">"}</span>
        </span>
    );
}

export const SemiIdTag = ({name, val, sp}) => {
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span>
        <span className="html-attr"> id</span><small>="</small>
        <span className="html-val">{val}</span><small>"</small> 
        <span className="html-lt">{"/>"}</span>
        </span>
    );
}

export const SemiMultiAttrTag = ({name, attr, sp, c, cc}) => {
    var tags =[];
    let i = 0;
    

    if(cc !== undefined){
        for (const key in attr) {
            tags.push(<span key={i}>
                 <span className="html-attr"> {key}</span><small>={cc[i] === 1?"{" : '"'}</small>
                 <span className="html-val">{attr[key]}</span><small>{cc[i] === 1 ?"}":'"'}</small>
                 </span>);
                 i++
         }
    }else{
        for (const key in attr) {
            tags.push(<span key={i++}>
                 <span className="html-attr"> {key}</span><small>={c !==undefined?"{": '"'}</small>
                 <span className="html-val">{attr[key]}</span><small>{c !==undefined?"}":'"'}</small>
                 </span>);
         }
    }
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span> 
        {tags.map(tag => {
            return tag;
        })}
        <span className="html-lt">{"/>"}</span>
        </span>
    );
}


export const MultiAttrTag = ({name, attr, sp, c, cc, b, children}) => {
    var tags =[];
    let i = 0;
    

    if(cc !== undefined){
        for (const key in attr) {
            tags.push(<span key={i}>
                 <span className="html-attr"> {key}</span><small>={cc[i] === 1?"{" : '"'}</small>
                 <span className="html-val">{attr[key]}</span><small>{cc[i] === 1 ?"}":'"'}</small>
                 </span>);
                 i++
         }
    }else{
        for (const key in attr) {
            tags.push(<span key={i++}>
                 <span className="html-attr"> {key}</span><small>={c !==undefined?"{": '"'}</small>
                 <span className="html-val">{attr[key]}</span><small>{c !==undefined?"}":'"'}</small>
                 </span>);
         }
    }
    if(sp !== undefined){
        let len = parseInt(sp);
        var space= "&nbsp";
        for (let i = 0; i < len; i++) {
            space += "&nbsp";       
        }
    }
    return(
        <span className="html-code-start">
        <span dangerouslySetInnerHTML={{__html: space}}></span><span className="html-lt">{"<"}</span>
        <span className="html-tag">{name}</span> 
        {tags.map(tag => {
            return tag;
        })}
        <span className="html-gt">{">"}</span>
                {children}
            {b !== undefined?<span dangerouslySetInnerHTML={{__html: space}}></span>:""}
            <span className="html-lt">{"</"}</span>
            <span className="html-tag">{name}</span>
            <span className="html-gt">{">"}</span>
        </span>
    );
}

