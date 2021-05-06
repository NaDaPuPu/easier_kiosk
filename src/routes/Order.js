import React, { useState } from "react";
import Menu from "../components/Menu";
import "./Order.css";

function Order({ match, history }) {
  const { foodname } = match.params;
  const [isChecked, setIsChecked] = useState(foodname);
  const handleChange = (radioBtnName) => {
    setIsChecked(radioBtnName);
  };
  return (
    <div className="order_container">
      <div className="categories">
        <input
          type="radio"
          id="burger"
          value="burger"
          checked={isChecked === "burger"}
          onChange={() => handleChange("burger")}
          onClick={() => history.push("burger")}
        />
        <label htmlFor="burger">버거</label>
        <input
          type="radio"
          id="side"
          value="side"
          checked={isChecked === "side"}
          onChange={() => handleChange("side")}
          onClick={() => history.push("side")}
        />
        <label htmlFor="side">사이드</label>
      </div>
      <Menu foodname={foodname} />
      <footer></footer>
    </div>
  );
}

export default Order;
