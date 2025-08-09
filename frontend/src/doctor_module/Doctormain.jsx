
import React from "react";
import { Outlet } from "react-router-dom";
import Docsidebar from "./Docsidebar";
import { doctor_back } from '../assets/imageAssets';
import "./Doctormain.css";



function Doctormain() {
  return (
    <div className="doctor-main-wrapper">
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "#f8f9fa",
          borderRight: "1px solid #ddd",
          padding: "20px",
          zIndex: 1100,
        }}
      >
        <Docsidebar />
      </div>

      {/* Right Content */}
      <div
        style={{
          marginLeft: "220px",
          marginRight: "-12px",
          padding: "30px",
          minHeight: "100vh",
          backgroundImage: `url(${doctor_back})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet /> {/* Renders the selected child route */}
      </div>
    </div>
  );
}

export default Doctormain;
