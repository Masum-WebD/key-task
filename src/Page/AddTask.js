import React from 'react';

const AddTask = () => {
    return (
        <div className="z-10 bg-secondary  h-[500px]">
            <div className="pt-[100px]">
            <h2 className='text-center text-xl font-bold mb-5 text-black'> Add Your Task</h2>
            <textarea class="textarea textarea-bordered ml-[600px]  justify-center h-[100px] w-[250px]  " placeholder="Type your task"></textarea><br />
            <button class="btn bg-primary ml-[670px]">Button</button>
            </div>
           
            
        </div>
    );
};

export default AddTask;