import React from 'react';
import './error.css';

const Error = ({hide, text}) => {
    return (
        hide ? "" : <div className="error">{text}</div>
    );
};

export default Error;
