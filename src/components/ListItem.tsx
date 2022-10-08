import React from "react";
import "../styles/ListItem.css";
import Icon from "./Icon";
import Menu from '../images/menu.png'
import Rectangle from "./Rectangle";
import Img1 from '../images/img1.png'

interface IProps {
  titleProject: string
  date: string
  share?:boolean
}



function ListItem({titleProject, date, share}: IProps) {
  
  const type = share ? "share" : "recent";

  return (
    <div className={"list-item " + type +"-list-item"}>
      <div>
        <div className={"list-icons "+ type + "-list-icons"}>
          <div  className={type + "-item-rect"}>
            <Rectangle name={ share? "rect3" : "rect2"} />
          </div>
          <div className={"list-circle " + type + "-list-circle"}>
            <Icon image={Img1} name={"circle-icon " + type + "-circle-icon-1"} />
            <Icon image={Img1} name={"circle-icon " + type + "-circle-icon-2"} />
            <Icon image={Img1} name={"circle-icon " + type + "-circle-icon-3"} />
          </div>
        </div>
        <p className={"list-item_title " + type + "-list-item_title"}>{titleProject}</p>
        <p className={"list-item_date " + type + "-list-item_date"}> Created: {date}</p>
      </div>
      { !share && 
          <Icon image={Menu} name='menu-icon '/>
      }
    </div>
  );
} 

export default ListItem;
