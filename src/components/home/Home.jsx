import Showtask from "components/showtask/ShowTask";
import React from "react";
import Header from "./header/Header";
import "./home.css"
import SideBar from "./sidebar/SideBar";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <SideBar />
        <Showtask />
      </div>
    </div>
  );
}
export default Home;