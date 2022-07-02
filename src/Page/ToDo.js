import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ToDo = () => {
  const [task, setTask] = useState([]);
  const navigate=useNavigate() 
  useEffect(() => {
    fetch("https://arcane-atoll-16956.herokuapp.com/task")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);
  const handleCheck = () => {
    toast.success(
      "Hurreh! You have done this task! You will complete another Task"
    );
  };
  const handleComplete=(id) => {
    navigate(`/todo/${id}`)
    toast.success(
      "Completed"
    );
  }
  return (
    <div >
      <h1 className="text-center text-2xl py-5">
        {" "}
        Your Task. Please Complete your Task.{" "}
      </h1>
      <div class="overflow-x-auto">
        <table class="table lg:w-full">
          <thead>
            <tr>
              <th className="font-bold text-xl">Complete </th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Date</th>
              <th className="font-bold text-xl">Time</th>
              <th className="font-bold text-xl">Completed</th>
            </tr>
          </thead>
          {task.map((t) => (
            <tbody>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    class="checkbox checkbox-accent"
                    onChange={handleCheck}
                  />
                </th>
                <td className="text-xl">{t.task}</td>
                <td className="text-xl">{t.date}</td>
                <td className="text-xl">{t.time}</td>
                <td><button   className="btn btn-primary" onClick={()=>handleComplete(t._id)}>Completed</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ToDo;
