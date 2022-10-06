import React from "react";
import "../styles/Icon.css";
import Img1 from '../images/img1.png'
interface IProps {
    name:string
    

}

function Icon({name} : IProps) {
  return (
    
        <img src={Img1} className={name}></img>
    
  );
}

export default Icon;
