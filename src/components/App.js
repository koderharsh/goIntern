import React from "react";
import Company from "./company/Company";
import Login from "./login/Login";
import "./app.css";
function App() {
  return (
    <div className='app-container'>
      <div className='triangle-left'></div>
      <div className='triangle-right'></div>
      <Company />
      <Login />
    </div>
  );
}

export default App;
