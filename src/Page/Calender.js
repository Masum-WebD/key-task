import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';


const Calender = () => {
    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You have picked: {format(selected, 'PP')}.</p>;
      }

    return(
        <div className='h-[500px] flex justify-center items-center'>
             <DayPicker 
        className="center "
    mode="single"
    selected={selected}
    onSelect={setSelected}
    footer={footer}
    />
        </div>
    );
};

export default Calender;