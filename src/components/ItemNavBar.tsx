import React from "react";
import Icon from "./Icon";
import "../styles/ItemNavBar.css";


interface IProps {
    name:string
    active?:boolean

}

function ItemNavBar({active, name} : IProps) {
  return (
        <li className={active? "active" : "desactive"}>
          <div className="itemNavBar_div">
            <Icon name="small-icon" />
            <label className="itemNavBar_text">{name}</label>
          </div>
        </li>
  );
}

export default ItemNavBar;
