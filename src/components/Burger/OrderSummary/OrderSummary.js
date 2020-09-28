import React from "react";

const OrderSummary = ({ ingredients, totalPrice }) => {
  const orderIngredients = Object.keys(ingredients).map((ingKey) => (
    <li key={ingKey}>
      {ingKey}: {ingredients[ingKey]}
    </li>
  ));

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Lorem ipsumm dolor sit amet</p>

      <ul>{orderIngredients}</ul>
      <strong>Price: $ {totalPrice.toFixed(2)}</strong>
      <p>Continue to checkout?</p>
    </div>
  );
};

export default OrderSummary;
