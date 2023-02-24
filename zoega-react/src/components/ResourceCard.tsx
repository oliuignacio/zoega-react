import React from 'react'

export default function ResourceCard({resource, setResources, id}) {

  // {
  //   id: 1,
  //   title: '...',
  //   body: '...',
  //   userId: 1
  // }

  return (
    <div>
      <h2>{resource.title}</h2>
      <p>{resource.body}</p>
    </div>
  )
}
