import React from 'react';

const ToDo = (props) => {
    return (
        <div className="h-[500px]">
            <h1 className="text-red"> {props.task}</h1>
        </div>
    );
};

export default ToDo;