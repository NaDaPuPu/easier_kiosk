import React from "react";
import Menu from "../components/Menu";
import burger_list from "../food/burger_list.json";
import side_list from "../food/side_list.json";

function Food({ foodname }) {
  if (foodname === "burger") {
    return (
      <div className="foods">
        {burger_list.map((menu) => (
          <Menu
            key={menu.id}
            id={menu.id}
            image={menu.image}
            name={menu.name}
          />
        ))}
      </div>
    );
  } else if (foodname === "side") {
    return (
      <div className="foods">
        {side_list.map((menu) => (
          <div>
            <Menu
              key={menu.id}
              id={menu.id}
              image={menu.image}
              name={menu.name}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Food;
