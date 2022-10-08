import React from "react";
import "../styles/Rectangle.css";

interface IProps {
    name:string
    color?:string


}

function Rectangle({name, color} : IProps) {
  return (
    <div className={name} style={ color ? {background:  color } : {}}>
        
    </div>
  );
}

export default Rectangle;
