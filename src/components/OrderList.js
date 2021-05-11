import React from "react";

function Order({ order }) {
  return (
    <div>
      <b>{order.name}</b> <span>{order.price}원</span>
    </div>
  );
}

function OrderList({ orders }) {
  return (
    <div className="orders">
      {orders.map((order) => (
        <Order order={order} key={order.id} />
      ))}
    </div>
  );
}

export default OrderList;
