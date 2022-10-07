import React from "react";
import Icon from "./Icon";
import "../styles/ItemNavBar.css";


interface IProps {
    name:string
    active?:boolean
    type: string
    image:string

}

function ItemNavBar({image,type, active, name} : IProps) {
  return (
        <li className={active? "active" : "desactive"}>
          <div className={type === "nav"? "itemNavBar_nav_div" : "itemNavBar_list_div"}>
            <Icon name="small-icon" image={image} />
            <label className={type === "nav" ? "itemNavBar_text" : "itemNavBar_list_text"}>{name}</label>
          </div>
        </li>
  );
}

export default ItemNavBar;
