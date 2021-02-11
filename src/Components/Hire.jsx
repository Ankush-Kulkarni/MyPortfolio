import React from "react";
import logo2 from "../Images/logo2.png";

const Hire = () => {
  return (
    <>
      <div className="hire">
        <img src={logo2} alt="contact_logo" />
        <div className="hire_content">
          <h1>Want to hire me</h1>
          <p>Contact me here👇</p>
          <div className="hire_btn">
            <button
              onClick={() => {
                alert("avkulkarni05@icloud.com");
              }}
            >
              Email
            </button>
            <a href="https://www.linkedin.com/in/ankush-kulkarni-bb5382128/">
              <button>LinkedIN</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
