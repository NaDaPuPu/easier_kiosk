import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import OrderList from "../components/OrderList";
import "./Order.css";

function Order({ match, history }) {
  const { foodname } = match.params;
  const [isChecked, setIsChecked] = useState(foodname);
  const handleChange = (radioBtnName) => {
    setIsChecked(radioBtnName);
  };
  const [orders, setOrders] = useState([]);
  const nextId = useRef(1);
  const onCreate = (name, price, number) => {
    const order = {
      id: nextId.current,
      name: name,
      price: price,
      number: number,
    };
    setOrders(orders.concat(order));

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };
  return (
    <>
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
        <header></header>
        <Menu foodname={foodname} onCreate={onCreate} />
        <footer></footer>
      </div>
      <OrderList
        orders={orders}
        visible={orders.length > 0}
        onRemove={onRemove}
      />
    </>
  );
}

export default Order;
