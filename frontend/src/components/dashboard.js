import React,{useState,useEffect} from "react";
import "./styles/dashboard.css";
import profile from "./img/profile.png";
import star from "./img/star.jpg";
import Delete from "./img/delete.png";



function Dashboard(){


return(
    <div className="containers">
       <div className="navbar">
       <h2 className="head">Gl<span>o</span>bex</h2>
        <img src={profile} alt="profile" className="profile"></img> 
      </div>
      <div className="middle-bar">
         <h5 className="middle-head">growth.cx</h5>
      </div>
      <div className="word-count-box">
          <div className="couter">
<h5 className="total-word-count">Total Word Count</h5>
<h2 className="count">200</h2>
</div>
<p className="count-reply">wow you are doing good!</p>
      </div>
      <div className="count-history"><h1 className="word-count-history">Word Count History</h1>
</div>

<div className="count-history-box">
    <div className="count-header">
        <h4 className="count-url">URL</h4>
        <h4 className="count-result">Word Count</h4>
        <h4 className="count-action">Action</h4>
    </div>
    <div className="history-details">
  <p className="old-url">www.gooogle.commmm</p>
  <p className="old-count">100</p>
  <img src={star} alt="star" className="star" ></img>
  <img src={Delete} alt="delete" className="delete" ></img>
    </div>

   

    <div className="history-details">
  <p className="old-url">www..commmm</p>
  <p className="old-count">200</p>
  <img src={star} alt="star" className="star" ></img>
  <img src={Delete} alt="delete" className="delete" ></img>
    </div>
  

</div>

    </div>
)



}

export default Dashboard;