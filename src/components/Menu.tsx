import React from "react";
import "../styles/Menu.css";
import Icon from "./Icon";
import ItemNavBar from "./ItemNavBar";
import Rectangle from "./Rectangle";
import Img1 from '../images/img1.png'
import Plus from '../images/plus.png'
import Button from "./Button";

function Menu() {
  return (
    <div className="div1">
      <div className="container">
        <Rectangle name="rect1"/>
        <ul className="navBar">

          <ItemNavBar type="nav" image={Img1} name="Home" active />
          
          <ItemNavBar type="nav" image={Img1} name="My Files" />
          
          <ItemNavBar type="nav" image={Img1} name="Recent Files" />
          
          <ItemNavBar type="nav" image={Img1} name="Shared Filed " />
          
          <ItemNavBar type="nav" image={Img1} name="File Request" />
          
          <ItemNavBar type="nav" image={Img1} name="Trash" />
        </ul>
      </div>

      <div className="container">
        <div className="dialog"> 
          <ul className="list">
            <ItemNavBar type="list" image={Img1} name="Upload files" />
            <ItemNavBar type="list" image={Img1} name="Upload folder" />
            <ItemNavBar type="list" image={Img1} name="New Folder" />
            <ItemNavBar type="list" image={Img1} name="More" />
          </ul>
        </div>

        <Button text="Create a New" subButton/>  
      </div>

    </div>
  );
}

export default Menu;
