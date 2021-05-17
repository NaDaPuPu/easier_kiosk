import React, { useEffect } from "react";

function End({ history }) {
  useEffect(() => {
    setTimeout(() => {
      history.push({ pathname: "/" });
    }, 3000);
  });
  return <div>결제 완료</div>;
}

export default End;
