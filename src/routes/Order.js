import React, { useState } from "react";
import { Link } from "react-router-dom";
import Food from "./Food";
import "./Order.css";

function Order({ match }) {
  const { foodname } = match.params;
  const [isChecked, setIsChecked] = useState(foodname);
  const handleChange = (radioBtnName) => {
    setIsChecked(radioBtnName);
  };

  return (
    <div className="order_container">
      <div className="categories">
        <Link to="/Order/burger">
          <input
            type="radio"
            id="burger"
            value="burger"
            checked={foodname === "burger"}
            onChange={() => handleChange("burger")}
          />
          <label htmlFor="burger">버거</label>
        </Link>
        <Link to="/Order/side">
          <input
            type="radio"
            id="side"
            value="side"
            checked={foodname === "side"}
            onChange={() => handleChange("side")}
          />
          <label htmlFor="side">사이드</label>
        </Link>
      </div>
      <Food foodname={foodname} />
      <footer></footer>
    </div>
  );
}

export default Order;
