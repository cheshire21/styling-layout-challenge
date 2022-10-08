import React from "react";
import "../styles/ItemDocument.css";
import Rectangle from "./Rectangle";


interface IProps {
    name:string
    files:number
    amount:number
    color?:string

}

function ItemDocument({files, name, amount, color} : IProps) {
  return (
    <div className="item-doc">
        <div className="item-rect-desc">
          <Rectangle name="rect5" color={color}/>
          
          <div className="text-container">
            <h3 className="item-doc-title">{name}</h3>
            <p className="item-doc-desc">{files} files</p>
          </div>
        </div>
        <div className="item-doc-button">
          {amount} GB
        </div>
    </div>
  );    
}

export default ItemDocument;
