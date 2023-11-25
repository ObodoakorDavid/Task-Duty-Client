import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseURL}/task/${id}`);
      const data = await res.json();
      console.log(data);
      setTitle(data.data.title);
      setDescription(data.data.description);
      setTags(data.data.tags);
    };

    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      tags,
    };

    const res = await fetch(`${baseURL}/task/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (res.status === 200) {
      return toast.success(data.message);
    }
    toast.error(data.message);

    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex gap-2 align-items-center my-4">
        <p className="m-0">icon</p>
        <h2>Edit Task</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 text-start "
        action=""
      >
        <div>
          <label htmlFor="">Task Title</label>
          <input
            value={title || ""}
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
            value={description || ""}
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
            value={tags || ""}
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

export default EditTask;
