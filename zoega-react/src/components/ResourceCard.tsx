import React from 'react'
import { deleteResource } from '../utils/ResourcesServices'

export default function ResourceCard({resource, setResources, id}) {

  const deleteHandler = () => {
    
    deleteResource(resource.id).then((response) => {
      if (response.ok) {
        setResources(prevResources => prevResources.filter((prevResource) => prevResource.id !== resource.id));
      }
    })
    .catch((err) => console.log('Error deleting Resource: ', err));
  }


  return (
    <div className="mt-4 ml-4">
      <h2>title: {resource.title}</h2>
      <p>body: {resource.body}</p>
      <p>userId: {resource.userId}</p>
      <p>id: {resource.id}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}
