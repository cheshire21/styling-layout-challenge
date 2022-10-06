import React from "react";
import "../styles/Rectangle.css";

interface IProps {
    name:string

}

function Rectangle({name} : IProps) {
  return (
    <div className={name}>
        
    </div>
  );
}

export default Rectangle;
