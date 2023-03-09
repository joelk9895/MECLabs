import React  from "react";
import Header from "../components/Header";
import { Subslist } from "../components/Subslist";
import "./Styles/dashboard.css";
import { AddLibrary } from "./Landing";
import { AcSubslist } from "../components/Activelist";
import { useState, useEffect } from "react";
import { API_URL } from "../api";


export const Dashboard = () => {
  
  const [upcomingSubs, setUpcomingSubs] = useState([
    {
      name: "Netflix",
      date: "12/12/2021",
      price: 199,
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png",
    },
    {
      name: "BornPub",
      date: "12/12/2021",
      price: 99,
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
    {
      name: "Tinder",
      date: "12/12/2021",
      price: 699,
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png",
    },
    {
      name: "Hulu",
      date: "12/12/2021",
      price: 299,
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
    {
      name: "Disney+",
      date: "12/12/2021",
      price: 299,
      logo: "https://clouddevs.com/3dbay/files/preview/960x960/11653407779f7hrmbpckskwtmizpwffnsxehxfwhd5hvlrpyxagqeddhv3hgj249h0iamgayaqhkqpim3cbhp4iepg5ktskbgvi8r8bxffih6lg.png",
    },
  ]);
  const [activeSubs, setActiveSubs] = useState([
    {
      name: "Netflix",
      price: 199,
      logo: "https://cdn3d.iconscout.com/3d/free/thumb/netflix-2950136-2447898.png",
    }
  ]);
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch(`${API_URL}/active`,{ mode: 'no-cors', method: 'GET'}).then((res) => res.json())
    .then((data) => {
            // Setting a data from api
            console.log(data);
        })
   
}, []);
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

    <div id="dashboard-column-2">
        <img id="ad" src="https://images.ctfassets.net/4cd45et68cgf/5ZVnTR7jyrRs0lePAlVT71/0a7c103de12f7a4c0b6c3b6edd535298/Ads_Plan_Blog_Header_Image.png?w=2560"/>
        <label id="subslist-head">currently Active</label>
        <hr id="horizontal-rule"></hr>
        <div id="master-active"><div id="active-subs-box">
        <AcSubslist activeSubs={activeSubs}/>
        </div></div>
    </div>
      </div>
      {
        AddLibrary('tilt.js')
      }
    </>
  );
};

export default Dashboard;
