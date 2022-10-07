import React from "react";
import "../styles/Title.css";
import Icon from "./Icon";
import Img1 from '../images/design.png'

interface IProps {
    text:string
    icon?:boolean
}

function Title({text, icon}: IProps) {
  return (
    <div className="div-title">
        <h2 className="title">{text}</h2>
        {
          icon ?
            <div>
              <Icon image={Img1} name="title-icon"/>
              <Icon image={Img1} name="title-icon"/>
            </div>

            :

            <p className="view-all">View All</p>
        }
    </div>
  );
} 

export default Title;
