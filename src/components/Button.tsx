import React from "react";
import Icon from "./Icon";
import Plus from '../images/plus.png'
import "../styles/Button.css";

interface IProps {
    subButton?:boolean
    text:string
}

function Button({text, subButton}:IProps) {

    console.log(subButton)

  return (
    <div className={"button parent " + (subButton? "sub-button_parent":"button_parent")}>
          
        <a href="#" className={"link " + (subButton ? "sub-button_link" : "button_link") }> {text}</a>
            {
                subButton &&
                    <button className="button button_child">
                        <Icon image={Plus} name="btn-icon"/>
                    </button>
            }
    </div>
  );
}

export default Button;


