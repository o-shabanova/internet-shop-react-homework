import React, {Component} from "react";
import {Product} from "./Product";

export class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.onProductSelect = this.onProductSelect.bind(this);
    }

    onProductSelect(product) {
        this.props.onProductSelect(product)
    }

    render() {
        return (
            <div>
                <h2>Список товарів в наявності</h2>
                {this.props.products.length ? this.props.products.map(item => <Product
                     product={item} onProductSelect={this.onProductSelect} clearButtons={this.props.clearButtons}/>) : <p>Товарів немає в наявності</p>}
            </div>
        )
    }
}