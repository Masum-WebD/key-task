import { toast } from "react-toastify";
const AddTask = () => {
  // const [task, setTask] =useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    let task = e.target.name.value;
    console.log(task);
    toast.success("Add you Task");
    const taskDetails={task}

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
          <input className="btn  " type="submit" value="Add Task" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
