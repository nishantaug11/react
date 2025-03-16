
import React from "react";
import ReactDOM from "react-dom/client";

// React Element 

const heading  =  React.createElement("h1",{id:"heading"},"React Element");
console.log(heading);

// JSX React 
const jxshHeading = <h1 id="heading" className="heading" > helllo </h1>;

const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(jxshHeading);


