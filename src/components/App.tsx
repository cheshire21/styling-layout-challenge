import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Main/>
      <SideBar/>

    </div>
  );
}

export default App;
