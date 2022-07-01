import { toast } from "react-toastify";
const AddTask = () => {
  // const [task, setTask] =useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const task = e.target.name.value;
    const date = e.target.date.value;
    const time =e.target.time.value
    console.log(task, date,time);
    toast.success("Add you Task. Please check TO-DO page");
    const taskDetails={task,date,time}

    fetch('http://localhost:5000/task', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        e.target.reset()
      });
  };
  return (
    <div className="z-10 bg-secondary  h-[500px]">
      <div className="pt-[100px] ">
        <h2 className="text-center text-xl font-bold mb-5 text-black">
          {" "}
          Add Your Task
        </h2>
        <form className=" flex justify-center" onSubmit={handleSubmit}>
          <input
            className="mr-2 w-[500px] text-center text-xl rounded-md"
            type="text"
            name="name"
          />
          <input className='mr-2' type="date" name='date' />
          <input className='mr-2' type="time" name='time' />
          <input className="btn  " type="submit" value="Add Task" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
