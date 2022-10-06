import React from "react";
import "../styles/Menu.css";
import Icon from "./Icon";
import ItemNavBar from "./ItemNavBar";
import Rectangle from "./Rectangle";
import Img1 from '../images/img1.png'
import Plus from '../images/plus.png'

function Menu() {
  return (
    <div className="div1">
      <Rectangle name="rect1"/>
      <ul className="navBar">

        <ItemNavBar type="nav" image={Img1} name="Home" active />
        
        <ItemNavBar type="nav" image={Img1} name="My Files" />
        
        <ItemNavBar type="nav" image={Img1} name="Recent Files" />
        
        <ItemNavBar type="nav" image={Img1} name="Shared Filed " />
        
        <ItemNavBar type="nav" image={Img1} name="File Request" />
        
        <ItemNavBar type="nav" image={Img1} name="Trash" />
      </ul>

      <div className="dialog"> 
        <ul className="list">
          <ItemNavBar type="list" image={Img1} name="Upload files" />
          <ItemNavBar type="list" image={Img1} name="Upload folder" />
          <ItemNavBar type="list" image={Img1} name="New Folder" />
          <ItemNavBar type="list" image={Img1} name="More" />
        </ul>

      </div>
      <div className="button button_parent">
        
        <a href="#" className="button_link"> Create New</a>
        <button className="button button_child">
          <Icon image={Plus} name="btn-icon"/>
        </button>
      </div>

    </div>
  );
}

export default Menu;
