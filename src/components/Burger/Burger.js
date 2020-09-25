import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import styles from "./Burger.module.css";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const Burger = ({ ingredients }) => {
  let transformIngredients = Object.keys(ingredients)
    .map((currentIngredient) => {
      //how much times we have the currentIngredient
      return [...Array(ingredients[currentIngredient])].map((_, i) => {
        return (
          <BurgerIngredient
            key={currentIngredient + i}
            type={currentIngredient}
          />
        );
      });
    })
    // Even if all ingredients are 0, the length of the array won't be 0. That's why we do the reduce function
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please, start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
