import React from "react";
import { postResource } from "../../utils/ResourcesServices";
import "./AddForm.css";

export default function AddForm({ setResources, idCounter, setIdCounter }) {
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const userId = 1;
    const newResource = { title, body, userId };

    if (!title || !body) {
      alert("Please fill all fields");
      return;
    }
    postResource(newResource)
      .then((resourceFromAPI) => {
        //since API does not updates id, we need to keep track of it ourselves
        resourceFromAPI.id += idCounter;
        setResources((prevResources) => [resourceFromAPI, ...prevResources]);
        //update idCounter
        setIdCounter((idCounter) => idCounter + 1);
        e.target.reset();
      })
      .catch((err) => console.log("Error posting new Resource: ", err));
  }

  return (
    <div className="addform">
      Create a new Resource:
      <form
        className="flex items-center border-b border-blue-500 py-2"
        onSubmit={handleSubmit}
      >
        <div className="ml-2">
          <label>Title: </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            placeholder="Add new title"
          />
          <label>Body: </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="body"
            placeholder="Add new body"
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
