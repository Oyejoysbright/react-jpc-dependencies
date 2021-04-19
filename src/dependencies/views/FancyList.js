import React from 'react';
const FancyList = ({children, className, color, iconColor, first, last, onClick})=>{


        var fancybartop = first !== undefined? "fancy-bar-hide": "";
        var fancybarbottom = last !== undefined? "fancy-bar-hide": "";
        let bColor;
        if(color === undefined && iconColor === undefined){
            bColor = "#ddd";
            
        }else if(color !== undefined){
            bColor = color;
        }else{
            bColor = iconColor;
        }
    const handleClick = (e)=>{
        let ball = e.target.parentNode.previousElementSibling.children[1];
        // console.log(e.target.innerHTML, ball);
        if(onClick !== undefined){
            onClick(e.target, ball);
        }
    }

    return(
        
        <li className="fancy-list" >
            <div>
                <span className={fancybartop}></span>
                <b style={{backgroundColor: bColor}} className="fancy-list-icon"></b>
                <span className={fancybarbottom}></span>
            </div>
            <div className={className} style={{color: color !== undefined? color: "#666"}} onClick={handleClick}>{children}</div>
        </li>
    );
}
export default FancyList;