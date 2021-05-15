import React from "react";

const type = {
  creditCard: "신용카드",
  easyPayment: "간편 결제",
  transCard: "교통카드",
  etc: "기타 결제",
};

function SubPayment({ match, location }) {
  const { state } = location;
  const { paymentType } = match.params;
  return (
    <div>
      <div>{type[paymentType]}</div>
      <div>{state?.result}원</div>
    </div>
  );
}

export default SubPayment;
