import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AllTasks = ({ baseURL }) => {
  const [tasks, setTasks] = useState([]);

  const redirect = useNavigate();

  useEffect(() => {
    // go to server, get all tasks, and display
    const getData = async () => {
      const res = await fetch(`${baseURL}/task`);
      const data = await res.json();
      console.log(data.data);
      setTasks(data.data);
    };

    getData();
  }, []);

  const handleDeleteTask = async (id) => {
    const res = await fetch(`${baseURL}/task/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    toast.success(data.message);
    console.log(data);
    redirect(0);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-4">
        <h2>My Tasks</h2>
        <Link to="/new">Add New Task</Link>
      </div>
      <div>
        {tasks.map((task) => (
          <div
            className="text-start border border-danger p-3 rounded-3"
            key={task._id}
          >
            <div className="d-flex justify-content-between border-bottom border-danger pb-3 mb-3">
              <p>{task.tags}</p>
              <div className="d-flex gap-3 align-items-center">
                <Link to={`/edit/${task._id}`}>Edit</Link>
                <button
                  onClick={() => {
                    handleDeleteTask(task._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="fs-2 fw-semibold">{task.title}</p>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
