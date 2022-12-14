import React from "react";
import "../styles/Icon.css";
interface IProps {
    name:string
    image:string

}

function Icon({image, name} : IProps) {
  return (
    
        <img src={image} className={name}></img>
    
  );
}

export default Icon;
