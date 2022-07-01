import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ToDo = (props) => {
  const [task, setTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);
  const handleCheck=() =>{
   
    toast.success("Hurreh! You have done this task! You will complete another Task");
    
  }
  return (
    <div className="h-[500px]">
        <h1 className="text-center text-2xl py-5"> Your Task. Please Complete your Task. </h1>
      <div class="overflow-x-auto">
        <table class="table lg:w-full">
          <thead>
            <tr>
              <th className="font-bold text-xl">Complete </th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Date</th>
              <th className="font-bold text-xl">Time</th>
            </tr>
          </thead>
          {task.map((t) => (
           
                <tbody >
              <tr>
                <th>
                  <input type="checkbox" class="checkbox checkbox-accent" onChange={handleCheck}/>
                </th>
                <td className='text-xl'>{t.task}</td>
                <td className='text-xl'>{t.date}</td>
                <td className='text-xl'>{t.time}</td>
              </tr>
            </tbody>
           
          ))}
        </table>
      </div>
    </div>
  );
};

export default ToDo;
