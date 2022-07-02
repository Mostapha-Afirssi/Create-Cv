import Cv from "./compenents/Cv";
import Form from "./compenents/Form";
import './App.css';
import { useState } from 'react';
import ActuallCv from "./compenents/ActuallCv";

function App(){
  
  const [allInfo,setAllInfo] = useState(
    {
      gen:null,
      edu:[],
      pra:[]
    }
  );

  const deletePractical = () =>{
    setAllInfo(current=>{
      return {...current,pra:[...current.pra.slice(0,-1)]}
    })
  };

  const deleteEducational = () =>{
    setAllInfo(current=>{
      return {...current,edu:[...current.edu.slice(0,-1)]}
    })
  }
  
  
  const getData = (data,number) =>{
    if(number===1)setAllInfo(current=>{return {...current,gen:data}});
    if(number===2)setAllInfo(current=>{return {...current,edu:[...current.edu,data]}});
    if(number===3)setAllInfo(current=>{return {...current,pra:[...current.pra,data]}});
    
  }
  
  return (
    <div className="flex-container">
      <div className="flex-child megenta">
        <Form onSubmit={getData} deletePractical={deletePractical} deleteEducational={deleteEducational}/>
      </div>
      <div className="flex-child green">
        <ActuallCv {...allInfo}/>
        {/* <Cv {...allInfo}/> */}
      </div>
    </div>
  )
}

export default App;
