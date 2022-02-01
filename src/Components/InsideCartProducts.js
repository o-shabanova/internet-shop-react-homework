import React, {Component} from "react";
import {Product} from "./Product";
import {SelectedProduct} from "./SelectedProduct";

export class InsideCartProducts extends Component {
    render() {
        return (
            <div>
                <h2>Товари в кошику:</h2>
                {this.props.cart.length ? this.props.cart.map(item => <SelectedProduct
                    product={item}/>) : <p>Немає товарів в кошику</p>}
            </div>
        )
    }
}