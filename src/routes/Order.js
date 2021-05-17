import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  let result = orders.reduce((sum, currValue) => {
    return sum + currValue.price * currValue.number;
  }, 0);

  const onCreate = (foodId, name, price, number, onSet) => {
    if (
      orders.find((order) => order.foodId === foodId && order.onSet === onSet)
    ) {
      setOrders(
        orders.map((order) =>
          order.foodId === foodId ? { ...order, number: number } : order
        )
      );
    } else {
      const order = {
        id: nextId.current,
        foodId,
        name,
        price,
        number,
        onSet,
      };
      setOrders(orders.concat(order));
      nextId.current += 1;
    }
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
        <footer>
          {orders.length > 0 ? (
            <Link
              to={{
                pathname: "/Payment/main",
                state: {
                  result,
                  orders,
                },
              }}
            >
              <button className="next">다음</button>
            </Link>
          ) : null}
        </footer>
      </div>
      <OrderList
        orders={orders}
        setOrders={setOrders}
        visible={orders.length > 0}
        onRemove={onRemove}
      />
    </>
  );
}

export default Order;
