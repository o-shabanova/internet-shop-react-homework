import React, {Component} from "react";
import {ProductsList} from "./ProductsList";
import {ShoppingCart} from "./ShoppingCart";

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            clearButtons: false
        };
        this.onProductSelect = this.onProductSelect.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    onProductSelect(product) {
        let newCart = [...this.state.cart]
        newCart.push(product)
        this.setState({ cart: newCart })
    }

    clearCart() {
        this.setState({ cart: [], clearButtons: true })
    }

    render() {
        return (
            <div style={{position: "relative"}}>
                <header>
                    <h1><center>Магазин</center></h1>
                </header>
                <ProductsList products={this.state.products} onProductSelect={this.onProductSelect} clearButtons={this.state.clearButtons}/>
                <ShoppingCart cart={this.state.cart} clearCart={this.clearCart}/>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.ifcityevent.com/products/')
            .then(res => res.json())
            .then(res => this.setState({products: res}));

    }


}