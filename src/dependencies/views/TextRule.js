import React from 'react';

function TextRule({text, type, className}) {
    
    return(
        <i className="text-rule">
            <i></i>
            <i className={className}>{text}</i>
            <i></i>
        </i>
    );
}

export default TextRule;