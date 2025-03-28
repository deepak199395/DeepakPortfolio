import React from "react";
import "../Styles/TeachnologyStack.css";
import giticon from "../Assets/ibm-logo-2.png";
import reacticon from "../Assets/Quess.jpeg";
import nodeicon from "../Assets/asplogo.png";


const Experince = () => {
  return (
    <div className="tech-container">
      <h2 className="tech-title">Work Experince :- 4 year</h2>
      <div className="stack-icons">
        <view>
          <img src={giticon} alt="GitHub" className="icon" />
          <h3>IBM INDIA PVT LTD</h3>
          <p>19/04/2024 -current </p>
        </view>
        <view>
          <img src={reacticon} alt="React" className="icon" />
          <h3>QUESS CORP LTD</h3>
          <p>june 2023 to dec 2023</p>


        </view>
        <view>
          <img src={nodeicon} alt="Node.js" className="icon" />
          <h3>ASP TRADELINKS PVT LTD</h3>
          <p>jan 2021 to june 2023</p>


        </view>

      </div>
    </div>
  );
};

export default Experince;
