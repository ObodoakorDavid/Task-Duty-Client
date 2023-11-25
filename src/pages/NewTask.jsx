import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const redirect = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      tags,
    };
    console.log(formData);
    // send a request to add the new task to db

    const res = await fetch(`${baseURL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (res.status === 201) {
      toast.success(data.message);
      return redirect("/tasks");
    }

    toast.error(data.message);

    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex gap-2 align-items-center my-4">
        <p className="m-0">icon</p>
        <h2>New Task</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 text-start "
        action=""
      >
        <div>
          <label htmlFor="">Task Title</label>
          <input
            className="w-100 rounded-1 border border-danger px-4 py-3"
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="">Description</label>
          <textarea
            className="w-100 rounded-1 border border-danger px-4 py-3"
            placeholder="Briefly describe your task..."
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <label htmlFor="">Tags</label>
          <input
            className="w-100 rounded-1 border border-danger px-4 py-3"
            type="text"
            placeholder="Urgent Important"
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
        </div>
        <button className="bg-danger border-0 rounded-1 py-2 text-white">
          Done
        </button>
        <a className="text-center" href="">
          Back To Top
        </a>
      </form>
    </div>
  );
};

export default NewTask;
