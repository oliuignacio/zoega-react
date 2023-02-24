import React from 'react'
import ResourceCard from './ResourceCard'

export default function ResourcesList({resources, setResources}) {
  return (
    <div>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} setResources={setResources} id={resource.id}/>
      )
      )}
      
    </div>
  )
}
