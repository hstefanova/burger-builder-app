import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  totalPrice,
  purchaseCanceled,
  purchaseContinued,
}) => {
  const orderIngredients = Object.keys(ingredients).map((ingKey) => (
    <li key={ingKey}>
      {ingKey}: {ingredients[ingKey]}
    </li>
  ));

  console.log("OrderSummary is rerendered");

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Lorem ipsumm dolor sit amet</p>

      <ul>{orderIngredients}</ul>
      <strong>Price: ${totalPrice.toFixed(2)}</strong>
      <p>Continue to checkout?</p>
      <Button clicked={purchaseCanceled} btnType="Danger">
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
