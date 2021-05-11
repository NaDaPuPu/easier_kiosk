import React from "react";

function Order({ order, onRemove }) {
  return (
    <div>
      <b>{order.name}</b> <span>{order.price}원</span>
      <button onClick={() => onRemove(order.id)}>삭제</button>
    </div>
  );
}

function OrderList({ orders, visible, onRemove }) {
  if (!visible) return null;
  return (
    <div className="orders">
      {orders.map((order) => (
        <Order order={order} key={order.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default OrderList;
