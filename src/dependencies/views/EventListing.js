import React from 'react';
import './EventListing.css';
import ButtonLoader from './ButtonLoader';
import { GoPlus } from 'react-icons/go';

function EventListing({title, data = [], onClick}) {

    const item = (each, i) => {
        return <div onClick={e => {onClick(each)}} key={i} className="item-container">
                    <div className="time">
                        <span>{each.start}</span>
                        <span>{each.end}</span>
                    </div>
                    <div className="content">
                        <span>{each.name}</span>
                        <span>{each.description}</span>
                    </div>
                </div>
    }
    return (
        <div className="event-listing">
            <div className="title">{title}</div>
            {data.map((each, i) => {return item(each, i)})}
        </div>
    )
}

export default EventListing

export function NewEvent({onClick, active, src, label, name, value, className}) {
    return (
        <div className="new-event">
            <ButtonLoader src={src || <GoPlus />} active={active} onClick={onClick} name={name} className={className} value={value}>{label || "New Event"}</ButtonLoader>
        </div>
    )
}