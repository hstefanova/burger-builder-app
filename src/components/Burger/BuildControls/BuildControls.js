import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const BuildControls = ({
  price,
  addIngredient,
  removeIngredient,
  disabled,
  purchasable,
}) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className={styles.BuildControls}>
      <div>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </div>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          added={() => addIngredient(control.type)}
          removed={() => removeIngredient(control.type)}
          disabled={disabled[control.type]}
        />
      ))}

      <button className={styles.OrderButton} disabled={!purchasable}>
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
