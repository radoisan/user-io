import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return(
        <div className="output">
            <p onClick={props.click}>User name: {props.name}</p>
            <p>second paragraph</p>
        </div>
    );
};

export default useroutput;