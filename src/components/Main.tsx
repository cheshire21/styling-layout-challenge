import React from "react";
import "../styles/Main.css";
import Icon from "./Icon";
import Img from '../images/magnifier.png'
import Title from "./Title";
import ListItem from "./ListItem";
import TableItem from "./TableItem";

function Main() {
  return (
    <div className="div2">
      <div className="search_input">
        <Icon image={Img}  name="input-icon "/>
        <input type="text" className="search" placeholder="Search"/>
      </div>

      <Title text="Recently Used" icon/>

      <div className="div-list">
        <ListItem titleProject="App Project" date="20.02.2020" />
        <ListItem titleProject="Project fitbit" date="28.02.2020"/>
        <ListItem titleProject="Client Documents" date="4.03.2020"/>
      </div>

      <Title text="Recently Files"/>

      <table className="table-files">
        <tr className="table-files_header">
          <th>Name</th>
          <th>Members</th>
          <th>Last Modified</th>
          
        </tr>
          <TableItem name="Travel Landing Page" member={5} date="Mar 8, 2020" />
          <TableItem name="True Photos" member={12} date="Mar 8, 2020" />
          <TableItem name="Dashboard Structure" member={10} date="Mar 9, 2020" />
          <TableItem name="Character Illustration" member={3} date="Mar 10, 2020" />
      </table>

      <Title text="Share with me"/>

      <div className="div-list2">
        <ListItem titleProject="App Project" date="20.02.2020"  share/>
        <ListItem titleProject="Project fitbit" date="28.02.2020" share/>
        <ListItem titleProject="Client Documents" date="4.03.2020" share/>
      </div>      


    </div>
  );
} 

export default Main;
