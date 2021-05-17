import React from "react";
import "./OrderList.css";

function Order({ order, clickEvent, onRemove }) {
  return (
    <div>
      <b>{order.name}</b> <span>{order.price}원</span>
      <button onClick={() => clickEvent(order.id, -1, order.onSet)}>-</button>
      {order.number}
      <button onClick={() => clickEvent(order.id, +1, order.onSet)}>+</button>
      <button className="delete_button" onClick={() => onRemove(order.id)}>
        삭제
      </button>
    </div>
  );
}

function OrderList({ orders, setOrders, visible, onRemove }) {
  const clickEvent = (id, count, onSet) => {
    setOrders(
      orders.map((order) =>
        order.id === id && order.number > -count && order.onSet === onSet
          ? { ...order, number: order.number + count }
          : order
      )
    );
  };

  let result = orders.reduce((sum, currValue) => {
    return sum + currValue.price * currValue.number;
  }, 0);

  if (!visible) return null;
  return (
    <div className="order_list">
      <div className="orders">
        {orders.map((order) => (
          <Order
            order={order}
            clickEvent={clickEvent}
            key={order.id}
            onRemove={onRemove}
          />
        ))}
      </div>
      <span>{result}원</span>
    </div>
  );
}

export default OrderList;
