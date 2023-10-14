"use client";
import React from "react";
import "../styles/App.css";
const App = () => {
  const [shape, setShape] = React.useState("square");
  const [list, setList] = React.useState([]);
  const handleSelect = (e) => {
    setShape(e.target.value);
  };
  const addShape = ()=>{
    // console.log(shape);
    setList([...list,shape]);
    console.log(typeof(list));
  }
  const RenderElement = () => {
    return (
      list.map((item,index)=>{
        return (<div className={item}>{index}</div>);
      })
    )
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleSelect}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={addShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        <RenderElement />
      </div>
    </div>
  );
};

export default App;
