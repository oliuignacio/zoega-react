import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';
import ResourcesList from './components/ResourcesList';

export default function App() {

  const [resources, setResources] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setResources(json))

  })
    


  return (
    <div>
      <Navbar></Navbar>
      <AddForm setResources={setResources}></AddForm>
      <ResourcesList resources={resources} setResources={setResources}/>
      
    </div>
  )
}
