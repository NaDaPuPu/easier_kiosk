import React from "react";

function Payment({ location }) {
  const result = location.result;
  const orders = location.orders;
  return (
    <div>
      <div>
        {orders.map((order) => (
          <div key={order.id}>{order.name}</div>
        ))}
      </div>
      <div className="result_price">{result}</div>
    </div>
  );
}

export default Payment;
