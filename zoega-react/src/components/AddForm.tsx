import { set } from 'mongoose';
import React from 'react';
import { postResource } from '../utils/ResourcesServices';

export default function AddForm({setResources, idCounter, setIdCounter}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const userId = 1;
    const newResource = {title, body, userId};

    if ( !title || !body ) {
      alert('Please fill all fields');
      return;
    }
    postResource(newResource).then((resourceFromAPI)=> {
        //since API does not updates id, we need to keep track of it ourselves
        resourceFromAPI.id += idCounter;
        setResources(prevResources => [resourceFromAPI, ...prevResources]);
        //update idCounter
        setIdCounter(idCounter => idCounter + 1);
        e.target.reset();
      })
      .catch((err) => console.log('Error posting new Resource: ', err));
  }

  return (
    <div>
      Create a new Resource:
      <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input type="text" name="title" placeholder="Add new title" />
      <label>Body: </label>
      <input type="text" name="body" placeholder="Add new body" />
      <button type="submit">Add</button>
      </form>
    </div>
  )
}
