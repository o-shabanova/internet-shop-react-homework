import React, {Component} from "react";
import {BuyButton} from "./BuyButton";
export class Product extends Component {

    constructor(props) {
        super(props);
        this.onProductSelect = this.onProductSelect.bind(this);
    }

    onProductSelect() {
        this.props.onProductSelect(this.props.product)
    }

    render() {
        return (
            <div>
                <p>ID: {this.props.product.id}</p>
                <p>Name: {this.props.product.name}</p>
                <p>Price:  {this.props.product.price} UAH</p>
                <BuyButton onProductSelect={this.onProductSelect} clearButtons={this.props.clearButtons}/>
                <br/>
            </div>
        )
    }
}