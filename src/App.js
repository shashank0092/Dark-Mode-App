import React from 'react';
import Navbar from './Component/Navbar';
import { createContext } from 'react';
import TextForm from './Component/TextForm';
import { useState } from 'react';


const color=createContext();

export function App(){

  const[mode,setMode]=useState('light');

  function colorChange(){
    if(mode==="light"){
      setMode("dark");
      console.log("CONVER COLOR TO DARK");
      document.body.style.backgroundColor="#212529";
    }
    else{
      setMode("light");
      console.log("CONVERT COLOR TO LIGHT")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
     <color.Provider value={mode} >
     <Navbar colorChange={colorChange}/>
     <TextForm value={mode} />
     
     </color.Provider>
   
    </>
  )
}

export default App;
export {color};