import React from "react";
import "../styles/Menu.css";
import Icon from "./Icon";
import ItemNavBar from "./ItemNavBar";
import Rectangle from "./Rectangle";

function Menu() {
  return (
    <div className="div1">
      <Rectangle name="rect1"/>
      <ul className="navBar">
        
        <ItemNavBar name="Home" active />
        
        
        <ItemNavBar name="My Files" />
        
        
        <ItemNavBar name="Recent Files" />
        
        
        <ItemNavBar name="Shared Filed " />
        
        
        <ItemNavBar name="File Request" />
        
        
        <ItemNavBar name="Trash" />
        
      </ul>
    </div>
  );
}

export default Menu;
