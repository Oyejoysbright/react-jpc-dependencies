import React from 'react';
import { VscQuote } from 'react-icons/vsc';


function Quote({content = Quote_Bank[1], children}) {
    return (
        <div className="quote">
            <h3>
                <VscQuote />
                <span> {content} </span>
                <VscQuote style={{transform: 'scaleX(-1)'}} />
            </h3>
            {children}
        </div>
    )
}

export default Quote

export function Quoter({content, src = "-"}) {
    return (
        <span className="quoter">{src}{content}</span>
    )
}

export const Quote_Bank = {
    1: "Stolen ideas can never be fruitful forever, create yours today"
}