import React, { useState } from "react";
import Dialog from "./Dialog";
import "./Menu.css";

function Menu({ name, image, title, select, children }) {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    select("single");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    select("single");
    setDialog(false);
  };
  return (
    <>
      <div className="food_container" onClick={onClick}>
        <img src={image} alt={name} title={name} />
        <div className="name">
          <strong className="ko">{name}</strong>
        </div>
      </div>
      <Dialog
        title={title}
        confirmText="추가"
        cancelText="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        {children}
      </Dialog>
    </>
  );
}

export default Menu;
