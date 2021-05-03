import React from "react";
import "./Dialog.css";

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible,
}) {
  if (!visible) return null;
  return (
    <div className="darkBackground">
      <div className="dialogBlock">
        <h3>{title}</h3>
        <p>{children}</p>
        <div className="buttonGroup">
          <button className="confirm" onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="cancel" onClick={onCancel}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소",
};

export default Dialog;
