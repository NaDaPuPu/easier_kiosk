import React, { useState } from "react";
import Menu from "../components/Menu";
import burger_list from "../food/burger_list.json";
import side_list from "../food/side_list.json";

function Food({ foodname }) {
  const [isChecked, setIsChecked] = useState("single");
  const handleChange = (name) => {
    if (name === "set" && isChecked === "single") {
      setIsChecked("set");
    } else {
      setIsChecked("single");
    }
  };
  if (foodname === "burger") {
    return (
      <div className="foods">
        {burger_list.map((menu) => (
          <Menu
            title="세트 선택"
            key={menu.id}
            id={menu.id}
            image={menu.image}
            name={menu.name}
            select={setIsChecked}
          >
            <div className="dialogContainer">
              <input
                type="radio"
                id="single"
                name="single"
                value={menu.name}
                checked={isChecked === "single"}
                onChange={() => handleChange("single")}
              />
              <label htmlFor="single">
                <img src={menu.image} alt={menu.name} title={menu.name} />
              </label>
              <input
                type="radio"
                id="set"
                name="set"
                value={menu.name + "_set"}
                checked={isChecked === "set"}
                onChange={() => handleChange("set")}
              />
              <label htmlFor="set">
                <img src={menu.set_image} alt={menu.name} title={menu.name} />
              </label>
              <p>{menu.name}</p>
              <p>{menu.name + " 세트"}</p>
            </div>
          </Menu>
        ))}
      </div>
    );
  } else if (foodname === "side") {
    return (
      <div className="foods">
        {side_list.map((menu) => (
          <div>
            <Menu
              title="메뉴 추가"
              key={menu.id}
              id={menu.id}
              image={menu.image}
              name={menu.name}
              select={setIsChecked}
            ></Menu>
          </div>
        ))}
      </div>
    );
  }
}

export default Food;
