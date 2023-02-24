import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';
import ResourcesList from './components/ResourcesList';
import { getResources } from './utils/ResourcesServices';

export default function App() {

  const [resources, setResources] = useState([]);
  
  useEffect(() => {
    getResources().then((resourcesFromAPI) => {
      setResources(resourcesFromAPI);
    }
    )

  },[])
    


  return (
    <div>
      <Navbar></Navbar>
      <AddForm setResources={setResources}></AddForm>
      <ResourcesList resources={resources} setResources={setResources}/>
      
    </div>
  )
}
