import React from "react";
import "./CreateOrder.css";

function CreateOrder({
  title,
  menu,
  confirmText,
  cancelText,
  inputs,
  setInputs,
  onConfirm,
  onCancel,
}) {
  const handleChange = (input) => {
    setInputs({
      ...inputs,
      onSet: input,
    });
  };

  if (inputs.dialog !== menu.id) return null;
  if (title === "세트 추가")
    return (
      <div className="darkBackground">
        <div className="dialogBlock">
          <h3>{title}</h3>
          <div>
            <div className="dialogContainer">
              <input
                type="radio"
                id="single"
                name="single"
                value={menu.name}
                checked={!inputs.onSet}
                onChange={() => handleChange(false)}
              />
              <label htmlFor="single">
                <img src={menu.image} alt={menu.name} title={menu.name} />
              </label>
              <input
                type="radio"
                id="set"
                name="set"
                value={menu.name + "_set"}
                checked={inputs.onSet}
                onChange={() => handleChange(true)}
              />
              <label htmlFor="set">
                <img src={menu.set_image} alt={menu.name} title={menu.name} />
              </label>
              <p>{menu.name}</p>
              <p>{menu.name + " 세트"}</p>
            </div>
          </div>
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
  else
    return (
      <div className="darkBackground">
        <div className="dialogBlock">
          <h3>{title}</h3>
          <div>
            <div className="dialogContainer">
              <input
                type="radio"
                id="single"
                name="single"
                value={menu.name}
                // checked={isChecked === "single"}
                // onChange={() => handleChange("single")}
              />
              <label htmlFor="single">
                <img src={menu.image} alt={menu.name} title={menu.name} />
              </label>
              <p>{menu.name}</p>
            </div>
          </div>
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

export default CreateOrder;
