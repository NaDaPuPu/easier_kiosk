import React, { useState } from "react";
import burger_list from "../food/burger_list.json";
import side_list from "../food/side_list.json";
import CreateOrder from "./CreateOrder";
import "./Menu.css";

function Menu({ foodname }) {
  const [inputs, setInputs] = useState({
    dialog: 0,
    onSet: false,
  });
  const burgerList = burger_list;
  const sideList = side_list;

  const onClick = (id) => {
    setInputs({
      ...inputs,
      dialog: id,
    });
  };
  const onConfirm = () => {
    console.log("확인");
    setInputs({
      onSet: false,
      dialog: 0,
    });
  };
  const onCancel = () => {
    console.log("취소");
    setInputs({
      onSet: false,
      dialog: 0,
    });
  };

  if (foodname === "burger") {
    return (
      <div className="foods">
        {burgerList.map((menu) => (
          <React.Fragment key={menu.id}>
            <div className="food_container" onClick={() => onClick(menu.id)}>
              <img src={menu.image} alt={menu.name} title={menu.name} />
              <div className="name">
                <strong className="ko">{menu.name}</strong>
              </div>
            </div>
            <CreateOrder
              title="세트 추가"
              menu={menu}
              confirmText="추가"
              cancelText="취소"
              inputs={inputs}
              setInputs={setInputs}
              onConfirm={onConfirm}
              onCancel={onCancel}
            ></CreateOrder>
          </React.Fragment>
        ))}
      </div>
    );
  } else if (foodname === "side") {
    return (
      <div className="foods">
        {sideList.map((menu) => (
          <React.Fragment key={menu.id}>
            <div className="food_container" onClick={() => onClick(menu.id)}>
              <img src={menu.image} alt={menu.name} title={menu.name} />
              <div className="name">
                <strong className="ko">{menu.name}</strong>
              </div>
            </div>
            <CreateOrder
              title="메뉴 추가"
              menu={menu}
              confirmText="추가"
              cancelText="취소"
              inputs={inputs}
              onConfirm={onConfirm}
              onCancel={onCancel}
            ></CreateOrder>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Menu;
