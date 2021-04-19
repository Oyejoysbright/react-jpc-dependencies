import React from 'react'

function Error({label, type = 0}) {
    return (
        <div>
            {showError(parseInt(type), label)}
        </div>
    )
}

export default Error;


const showError = (value, label) => {
    switch (value) {
        case 0:
            return defaultError(label);
        case 400:
            return badRequest(label);
        case 404:
            return notFound(label);
        case 500:
            return serverError(label);
        case 503:
            return serviceUnavailable(label);
        default:
            return defaultError(label);
    }
}



function serverError(label) {
    return (
        <div>
            <h1>{label || "Network Failed"}</h1>
        </div>
    );
}

function defaultError(label) {
    return (
        <div>
            <h1>{label || "Failed"}</h1>
        </div>
    );
}

function serviceUnavailable(label) {
    return (
        <div>
            <h1>{label || "Service Unavailable"}</h1>
        </div>
    );
}

function notFound(label) {
    return (
        <div>
            <h1>{label || "Not Found"}</h1>
        </div>
    );
}

function badRequest(label) {
    return (
        <div>
            <h1>{label || "Bad Request"}</h1>
        </div>
    );
}
