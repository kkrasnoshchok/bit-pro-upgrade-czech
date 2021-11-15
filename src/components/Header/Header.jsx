import React from "react";
import "./Header.css";
import logo from "../../assets/startLogo.png";

export default function Header() {
  return (
    <header className="startHeader header">
        <div className="headerLogo">
          <img src={logo} alt="" />
        </div>
      </header>
  );
}
