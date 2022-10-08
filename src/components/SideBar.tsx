import React from "react";
import "../styles/SideBar.css";
import Icon from "./Icon";
import Img1 from '../images/magnifier.png'
import Title from "./Title";
import ItemDocument from "./ItemDocument";
import Rectangle from "./Rectangle";
import Button from "./Button";

function SideBar() {
  return (
    <div className="div3">
      <div className="div-part-1">
        <div className="list-login">
          <div className="icon-container">
            <Icon image={Img1} name="menu-icon"/>
            <Icon image={Img1} name="menu-icon"/>
          </div>
          
          <div className="user-container">
            <p className="username-text">Name</p>
            <Icon image={Img1} name="circle-icon-login"/>
          </div>
        </div>

        <h2 className="storage-title">Storage</h2>

        <div className="graphic-container">

          <div className="graphic">
            
            <div className="cutout2">
              
              <h1 className="storage-percent">85%</h1>
              <p className="storage-used">Used</p>
            </div>
          </div>
          
          <p className="storage-text">420.2 GB of 500 GB used</p>
        
        </div>

        <div className="list-document">
          <ItemDocument name="Documents" amount={200} files={720}/>
          <ItemDocument name="Documents" amount={125} files={720}/>
          <ItemDocument name="Documents" amount={75} files={720}/>
          <ItemDocument name="Documents" amount={50} files={720}/>
        </div>
      </div>

      <div  className="div-part-2">
        <div className="dialog-2">
          <Rectangle name="rect6"/>
          <h3 className="dialog-title">Buy more space now!</h3>
          <p className="dialog-text">Updagrade to cloud premiun</p>

          <Button text="Upgrade Account!" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
