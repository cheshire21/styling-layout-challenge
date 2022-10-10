import React from "react";
import "../styles/SideBar.css";
import Icon from "./Icon";
import Img1 from '../images/magnifier.png'
import ItemDocument from "./ItemDocument";
import Rectangle from "./Rectangle";
import Button from "./Button";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [0.12, 0.40,0.20, 0.28],
      backgroundColor: [
        '#4AC29D',
        '#FF9F00',
        '#C4C4C4',
        '#689FF8',
      ],
      borderColor: [
        '#C4C4C4',
        '#C4C4C4',
        '#C4C4C4',
        '#C4C4C4',
      ],
      borderWidth: 0.5,
      spacing:5,
      borderRadius:5,
      cutout:'90%'
    },
  ],
};

function SideBar() {
  return (
    <div className="div3">
      <div className="div-part-1">
        <div className="list-login">
          <div className="icon-container">
            <Icon image={Img1} name="menu-icon"/>
            <Icon image={Img1} name="menu-icon"/>
          </div>
          
          <div className="user-container">
            <p className="username-text">Name</p>
            <Icon image={Img1} name="circle-icon-login"/>
          </div>
        </div>

        <h2 className="storage-title">Storage</h2>

        <div className="graphic-container">

          <div className="graphic">
            
          <Doughnut 
            data={data}  
            options={{
              responsive: true,
              maintainAspectRatio: true,

            }}/>

            <div className="cutout2">
              <h1 className="storage-percent">85%</h1>
              <p className="storage-used">Used</p>
            </div>
          </div>
          
          <p className="storage-text">420.2 GB of 500 GB used</p>
        
        </div>

        <div className="list-document">
          <ItemDocument name="Documents" amount={200} files={720}  />
          <ItemDocument name="Documents" amount={125} files={720} color="#689FF8" />
          <ItemDocument name="Documents" amount={75} files={720} color="#4AC29D" />
          <ItemDocument name="Documents" amount={50} files={720} color="#BCBECA" />
        </div>
      </div>

      <div  className="div-part-2">
        <div className="dialog-2">
          <Rectangle name="rect6"/>
          <h3 className="dialog-title">Buy more space now!</h3>
          <p className="dialog-text">Updagrade to cloud premiun</p>

          <Button text="Upgrade Account!" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
