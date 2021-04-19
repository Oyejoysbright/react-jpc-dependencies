import React from 'react'

function TickableCard({name, disabled, value, checked, onChange, children, id, width, height, minWidth, className, sub}) {

    const handleChange = (e) => {
        onChange(e);
    }
    return (
        <div>
            <div className={"jpc-tickable-card " + className}>
                <input disabled={disabled} type="checkbox" value={value} checked={checked} name={name} id={id} onChange={handleChange} />
                <div style={{"width": width, "height": height, "minWidth":minWidth}}>{children}</div>
                {sub}
            </div>
        </div>
    )
}

export default TickableCard
