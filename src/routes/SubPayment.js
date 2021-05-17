import React, { useState } from "react";
import Loading from "../components/Loading";
import "./SubPayment.css";

const type = {
  creditCard: "신용카드 결제",
  easyPayment: "간편 결제",
  transCard: "교통카드 결제",
  etc: "기타 결제",
};

function SubPayment({ match, location, history }) {
  const [visible, setVisible] = useState(false);
  const { state } = location;
  const { paymentType } = match.params;
  const onClick = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      console.log("결제 완료");
      history.push({ pathname: "/End" });
    }, 3000);
  };
  if (paymentType === "main") return null;
  return (
    <>
      <div className="sub_payment_container">
        <div>
          <div className="title">{type[paymentType]}</div>
          <div className="price">{state?.result}원</div>
        </div>
        <div>
          <button className="pay" onClick={() => onClick()}>
            (결제수단 제시)
          </button>
        </div>
      </div>
      <Loading text="결제 중.." visible={visible} />
    </>
  );
}

export default SubPayment;
