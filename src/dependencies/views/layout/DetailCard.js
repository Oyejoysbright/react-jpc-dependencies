import React from 'react'

function DetailCard({className, src, title, content}) {
    return (
        <article className={className + " jpc detail-card"}>
            <div className="image">
                <img src={src} width="100%" height="100%" alt="" />
            </div>
            <div className="title"> {title} </div>
            <hr />
            <p className="content"> {content} </p>
        </article>
    )
}

export default DetailCard
