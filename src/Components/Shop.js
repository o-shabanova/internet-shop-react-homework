import React, {Component} from "react";
import {ProductsList} from "./ProductsList";
import {ShoppingCart} from "./ShoppingCart";

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            clearButtons: false,
            totalCart: 0
        };
        this.onProductSelect = this.onProductSelect.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    onProductSelect(product) {
        let newCart = [...this.state.cart]
        newCart.push(product)
        let total = newCart.map(i => i.price).reduce((a, b) => a + b, 0);
        this.setState({ cart: newCart, totalCart: total })
    }

    clearCart() {
        this.setState({ cart: [], clearButtons: true, totalCart: 0 })
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <header>
                    <h1><center>Магазин</center></h1>
                </header>
                <ProductsList products={this.state.products} onProductSelect={this.onProductSelect} clearButtons={this.state.clearButtons}/>
                <ShoppingCart cart={this.state.cart} clearCart={this.clearCart} totalCart={this.state.totalCart}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.ifcityevent.com/products/')
            .then(res => res.json())
            .then(res => this.setState({products: res}));

    }


}