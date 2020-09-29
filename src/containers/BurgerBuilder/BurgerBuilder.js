import React, { Component } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.4,
  bacon: 1.3,
  meat: 1.2,
  cheese: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Continue to Checkout");
  };

  updatePurchasableState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum, ingVal) => {
        return sum + ingVal;
      }, 0);

    this.setState({
      purchasable: sum > 0,
    });
  }

  addIngredientHandler = (type) => {
    const oldCountIngredient = this.state.ingredients[type];
    const updatedCount = oldCountIngredient + 1;
    // copy of the state
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    // copy of the state
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];

    // update the state
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchasableState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCountIngredient = this.state.ingredients[type];
    if (oldCountIngredient <= 0) {
      return;
    }
    const updatedCount = oldCountIngredient - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice > 4 ? oldPrice - INGREDIENT_PRICES[type] : 4;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    this.updatePurchasableState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <div>
        <Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
