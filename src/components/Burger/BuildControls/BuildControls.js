import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const BuildControls = ({ addIngredient, removeIngredient }) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className={styles.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          added={() => addIngredient(control.type)}
          removed={() => removeIngredient(control.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
