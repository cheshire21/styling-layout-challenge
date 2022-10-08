import React from "react";
import "../styles/TableItem.css";
import Icon from "./Icon";
import Rectangle from "./Rectangle";
import Menu from '../images/menu.png'

interface IProps{
  member:number
  name:string
  date:string
  color?:string
}

function TableItem({member, name, date, color}:IProps) {
  return (
      
        <tr>
          <td>
            <div className="name-cell">
              <Rectangle name="rect4" color={color} />
              <p className="name-cell-text">{name}</p>
            </div>
          </td>
          <td>{member} members</td>
          <td>
            <div className="date-cell">
              {date}
              <Icon  image={Menu} name="table-icon"/>
            </div>  
          </td>
        </tr>
      
  );
} 

export default TableItem;
