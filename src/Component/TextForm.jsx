import React from "react";
import { useState } from "react";
import { color } from "../App";
import { useContext } from "react";





export function TextForm() {
    
    const data1 = useContext(color);
  function handlechange(e) {
    setValue(e.target.value);
  }

  function uppercase() {
    console.log("upper case btn clicked");
    let data = document.getElementById("mybox").textContent;
    console.log(data);
    let ans = data.toUpperCase();
    console.log(ans);
    setValue(ans);
  }

  function lowerCase() {
    console.log("lower case btn clicked");
    let data = document.getElementById("mybox").textContent;
    console.log(data);
    let ans = data.toLowerCase();
    console.log(ans);
    setValue(ans);
  }

  function clear() {
    console.log("clear btn clicked");
    let data = document.getElementById("mybox").textContent;
    console.log(data);
    let ans = "";
    console.log(ans);
    setValue(ans);
  }

  function copy() {
    let data= document.getElementById("mybox");
    data.select();
    data.setSelectionRange(0,9999);
    navigator.clipboard.writeText(data.value);
  }

  const [value, setValue] = useState("THIS IS A TEXT");
  
  return (
    <>
      <div className="container  my-4">
        <h1 className={`text-${data1==='light'?'dark':'light'}`}>Enter Text Here</h1>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={value}
          onChange={handlechange}
        ></textarea>
        <div className="container my-4">
          <button className="btn btn-primary mx-4" onClick={uppercase}>
            UpperCase
          </button>
          <button className="btn btn-primary mx-4" onClick={lowerCase}>
            LowerCase
          </button>
          <button className="btn btn-primary mx-4" onClick={clear}>
            ClearText
          </button>
          <button className="btn btn-primary mx-4" onClick={copy}>
            CopyText
          </button>
        </div>
        <div className={`container my-4 text-${data1==='light'?'dark':'light'}`} >
                <h1>Your Text Summary</h1>
                <p>Words In Your Text:{value.split(" ").length}</p>
                <p>Character In Your Text: {value.length}</p>
                <p>Minutes To Tead:{0.008*value.split(" ").length}</p>
                <p>{value.length>0?value:"Write Something In Text Box For Preview"}</p>
            </div>
      </div>
    </>
  );
}

export default TextForm;
