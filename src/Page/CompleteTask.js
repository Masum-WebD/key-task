import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CompleteTask = () => {
  const [completeTask, setCompleteTask] = useState({});
  const { completeId } = useParams();
  useEffect(() => {
    fetch(`https://arcane-atoll-16956.herokuapp.com/task/${completeId}`)
      .then((res) => res.json())
      .then((data) => setCompleteTask(data));
  }, [completeId]);

const handleDelete=(id) => {
    const completedTask = [...completeTask].filter((t) => t.id !== id)
    setCompleteTask(completedTask)
}
  return (
    <div className="h-[500px] ">
        <h1 className="text-center text-2xl py-5">
        {" "}
        This Task is completed successfully.
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th className="font-bold text-xl">Sr.</th>
              <th className="font-bold text-xl">Name</th>
              <th className="font-bold text-xl">Date</th>
              <th className="font-bold text-xl">Time</th>
              <th className="font-bold text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="text-xl">{completeTask.task}</td>
              <td className="text-xl">{completeTask.date}</td>
              <td className="text-xl">{completeTask.time}</td>
              <td className="text-xl"><button className="btn btn-primary" onClick={()=>handleDelete(completeTask._id)}>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompleteTask;
