import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import ItemPage from "./ItemPage";
import "./styles.css";

const products = [
  { id: 1, name: "Phone", price: 299 },
  { id: 2, name: "Laptop", price: 999 },
  { id: 3, name: "Headphones", price: 99 },
  { id: 4, name: "Camera", price: 799 }
];

class App extends Component {
  state = {
    cart: []
  };
  handleAdd = item => {
    console.log(item);
    this.setState(prevState => ({
      cart: [...prevState.cart, item]
    }));
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <ItemPage onAddToCart={this.handleAdd} items={products} />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
