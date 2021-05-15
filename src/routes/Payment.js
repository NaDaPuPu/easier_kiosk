import React from "react";
import "./Payment.css";

function Payment({ location, history }) {
  const { state } = location;
  const onClick = (dest) => {
    history.push({
      pathname: `/Payment/${dest}`,
      state,
    });
  };
  return (
    <div>
      <div className="payment_list">
        <button onClick={() => onClick("creditCard")}>
          신용카드, 삼성페이, LG페이
        </button>
        <button onClick={() => onClick("easyPayment")}>
          간편 결제(카카오페이, 네이버페이, 페이코)
        </button>
        <button onClick={() => onClick("transCard")}>교통카드</button>
        <button onClick={() => onClick("etc")}>기타 결제</button>
      </div>
      <div>
        {state?.orders.map((order) => (
          <div key={order.id}>{order.name}</div>
        ))}
      </div>
      <div className="result_price">{state?.result}</div>
    </div>
  );
}

export default Payment;
