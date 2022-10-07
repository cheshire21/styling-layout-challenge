import React from "react";
import "../styles/ListItem.css";
import Icon from "./Icon";
import Menu from '../images/menu.png'
import Rectangle from "./Rectangle";
import Img1 from '../images/img1.png'

interface IProps {
  titleProject: string
  date: string
}


function ListItem({titleProject, date}: IProps) {
  return (
    <div className="list-item">
      <div>
        <div className="list-icons">
          <div  className="item-rect">
            <Rectangle name="rect3" />
            <Rectangle name="rect2" />
          </div>
          <div className="list-circle">
            <Icon image={Img1} name="circle-icon circle-icon-1" />
            <Icon image={Img1} name="circle-icon circle-icon-2" />
            <Icon image={Img1} name="circle-icon circle-icon-3" />
          </div>
        </div>
        <p className="list-item_title">{titleProject}</p>
        <p className="list-item_date"> Created: {date}</p>
      </div>
      <Icon image={Menu} name='menu-icon '/>
    </div>
  );
} 

export default ListItem;
