import React, { useLayoutEffect, useRef } from 'react';

const TabPane = ({children})=>{
const pagesRef = useRef();

useLayoutEffect(()=>{
    let size = [];
    let pages = pagesRef.current.children;
    for (let i = 0; i < pages.length; i++) {
        size.push(parseInt(pages[i].offsetHeight)); 
        
    }
    pagesRef.current.style.height = `${size.sort((a, b)=> b-a)[0]}px`;

});

    return(
        <div className="tab-pane-wrapper">
            <Links pages={children}/>
            <div className="tab-pane-pages" ref = {pagesRef}>
                {children}
            </div>
        </div>
    );
}

export function Pane({children}){

    return(
        <div className="tab-pane-page">
            {children}
        </div>
    );
}

function Links({pages}){
    let selected = 0;
    const handleClick =(index, e)=>{

        if(index === selected) return;

        let links = e.currentTarget.parentNode.children;

        let pages = e.currentTarget.parentNode.nextElementSibling.children;

        for (let i = 0; i < pages.length; i++) {

            if(i === index){
                pages[i].setAttribute("class", "tab-pane-page tab-pane-page-show");
                links[i].setAttribute("class", "tab-pane-link tab-pane-link-show");
                selected  = i;
            }else{
                pages[i].setAttribute("class", "tab-pane-page tab-pane-page-hide");
                links[i].setAttribute("class", "tab-pane-link tab-pane-link-hide");
            }
            
        }
    }
    return(
        <div className="tab-pane-links">
            {pages.map((e, i) => {
                let name = e.props.title === undefined? `Link ${i+1}`: e.props.title;                
                return <div className="tab-pane-link" key={i} onClick={handleClick.bind(null, i)}>{name}</div>
            })}
        </div>
    )
}
export default TabPane;