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
    <div className={type + "-list-item"}>
      <div>
        <div className={type + "-list-icons"}>
          <div  className="item-rect">
            <Rectangle name={ share? "rect3" : "rect2"} />
          </div>
          <div className={type + "-list-circle"}>
            <Icon image={Img1} name="circle-icon circle-icon-1" />
            <Icon image={Img1} name="circle-icon circle-icon-2" />
            <Icon image={Img1} name="circle-icon circle-icon-3" />
          </div>
        </div>
        <p className={type + "-list-item_title"}>{titleProject}</p>
        <p className={type + "-list-item_date"}> Created: {date}</p>
      </div>
      { !share && 
          <Icon image={Menu} name='menu-icon '/>
      }
    </div>
  );
} 

export default ListItem;
