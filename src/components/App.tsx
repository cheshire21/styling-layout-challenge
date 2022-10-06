import React from "react";
import Container from "./Container";
import SideBar from "./SideBar";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Container/>
      <SideBar/>

    </div>
  );
}

export default App;
