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
  else if (menu.set_image)
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
                <p>{menu.name}</p>
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
                <p>{menu.name + " 세트"}</p>
              </label>
            </div>
          </div>
          <div className="number_container">
            <button
              onClick={() => {
                if (inputs.number > 1) {
                  setInputs({ ...inputs, number: inputs.number - 1 });
                }
              }}
            >
              -
            </button>
            {inputs.number}
            <button
              onClick={() =>
                setInputs({ ...inputs, number: inputs.number + 1 })
              }
            >
              +
            </button>
          </div>
          <div className="buttonGroup">
            <button
              className="confirm"
              onClick={() => {
                if (inputs.onSet) {
                  onConfirm(
                    menu.id,
                    menu.name + " 세트",
                    menu.set_price,
                    inputs.number,
                    inputs.onSet
                  );
                } else {
                  onConfirm(
                    menu.id,
                    menu.name,
                    menu.price,
                    inputs.number,
                    inputs.onSet
                  );
                }
              }}
            >
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
                checked={!inputs.onSet}
                onChange={() => handleChange(false)}
              />
              <label htmlFor="single">
                <img src={menu.image} alt={menu.name} title={menu.name} />
                <p>{menu.name}</p>
              </label>
            </div>
          </div>
          <div className="number_container">
            <button
              onClick={() => {
                if (inputs.number > 1) {
                  setInputs({ ...inputs, number: inputs.number - 1 });
                }
              }}
            >
              -
            </button>
            {inputs.number}
            <button
              onClick={() =>
                setInputs({ ...inputs, number: inputs.number + 1 })
              }
            >
              +
            </button>
          </div>
          <div className="buttonGroup">
            <button
              className="confirm"
              onClick={() =>
                onConfirm(
                  menu.id,
                  menu.name,
                  menu.price,
                  inputs.number,
                  inputs.onSet
                )
              }
            >
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
