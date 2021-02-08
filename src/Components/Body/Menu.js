import React, { Component } from "react";
import DishData from "../../Data/DishData";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component {
  state = {
    dishes: DishData,
    setDishDetail: null,
  };

  dishDetail = (dish) => {
    this.setState({
      setDishDetail: dish,
    });
  };
  render() {
    const dishItem = this.state.dishes.map((item, index) => (
      <MenuItem
        data={item}
        key={index}
        itemDetail={() => this.dishDetail(item)}
      />
    ));
    let item = null;
    if (this.state.setDishDetail != null) {
      item = <DishDetail dish={this.state.setDishDetail} />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{dishItem}</div>
          <div className="col-6">{item}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
