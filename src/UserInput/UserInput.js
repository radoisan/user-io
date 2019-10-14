import React from 'react';
import './UserInput.css';

const userinput = (props) => {
    return(
        <div className="input">
            <input type="text" onChange={props.nameChangeHandler} placeholder="Enter username..." value={props.name}></input>
            <button onClick={props.click}>Switch user</button>
        </div>
    );
};

export default userinput;