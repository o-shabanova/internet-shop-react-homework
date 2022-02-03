import React, {Component} from "react";
import {ProductsList} from "./ProductsList";
import {ShoppingCart} from "./ShoppingCart";

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            totalCart: 0
        };
        this.onProductSelect = this.onProductSelect.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    onProductSelect(product) {
        let newCart = this.state.cart.slice();
        newCart.push(product)
        let total = newCart.map(i => i.price).reduce((a, b) => a + b, 0);
        this.state.products.find(item => item.id === product.id).isInCart = true;
        this.setState({products: this.state.products.slice(), cart: newCart, totalCart: total})
    }

    clearCart() {
        let newProducts = this.state.products.slice().map(product => Object.assign(product, {isInCart: false}));
        this.setState({ products: newProducts, cart: [], clearButtons: true, totalCart: 0 })
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <header>
                    <h1>
                        <center>Магазин</center>
                    </h1>
                </header>
                <ProductsList products={this.state.products} onProductSelect={this.onProductSelect}/>
                <ShoppingCart cart={this.state.cart} clearCart={this.clearCart} totalCart={this.state.totalCart}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.ifcityevent.com/products/')
            .then(res => res.json())
            .then(res => this.setState({products: res.map(product => Object.assign(product, {isInCart: false}))}));
    }
}