import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <img
        id="main_image"
        src="https://www.mcdonalds.co.kr/upload/main/banner/1617176534703.png"
        alt="Filet-O-Fish"
      />
      <Link to="/Order/burger">
        <button>주문 시작</button>
      </Link>
    </div>
  );
}

export default Home;
