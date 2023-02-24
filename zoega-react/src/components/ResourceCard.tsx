import React from 'react'

export default function ResourceCard({resource, setResources, id}) {

  // {
  //   id: 1,
  //   title: '...',
  //   body: '...',
  //   userId: 1
  // }

  return (
    <div className="mt-4 ml-4">
      <h2>title: {resource.title}</h2>
      <p>body: {resource.body}</p>
      <p>userId: {resource.userId}</p>
    </div>
  )
}
