import React from "react";
import Header from "../components/Header";
import { Subslist } from "../components/Subslist";
import "./Styles/dashboard.css";
import { AddLibrary } from "./Landing";

export const Dashboard = () => {
  
  const [upcomingSubs, setUpcomingSubs] = React.useState([
    {
      name: "Netflix",
      date: "12/12/2021",
      price: "$12.99",
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png",
    },
    {
      name: "BornPub",
      date: "12/12/2021",
      price: "$1.00",
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
    {
      name: "Tinder",
      date: "12/12/2021",
      price: "$13.99",
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png",
    },
    {
      name: "Hulu",
      date: "12/12/2021",
      price: "$12.99",
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
    {
      name: "Disney+",
      date: "12/12/2021",
      price: "$12.99",
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
  ]);
  return (
    <>
    <div id="dashboard">

      <Header />
      <div id="dashboard-column-1">
      <div id="amount" data-tilt data-tilt-scale="1.01" data-tilt-glare data-tilt-max-glare="0.4">
            <label id="amount-label">Total this month</label>
            <label>$34.99</label>
        </div>
        <label id="subslist-head">upcoming payments</label>
        <hr id="horizontal-rule"></hr>
      <div id="dashboard-subslist">
        <Subslist upcomingSubs={upcomingSubs} />
      </div>
     
      </div>

    
      </div>
      {
        AddLibrary('tilt.js')
      }
    </>
  );
};

export default Dashboard;
