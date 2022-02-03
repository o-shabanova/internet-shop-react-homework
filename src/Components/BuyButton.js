import React, {Component} from "react";

export class BuyButton extends Component {
    constructor(props) {
        super(props);
        this.selectProduct = this.selectProduct.bind(this);
    }

    selectProduct() {
        this.props.onProductSelect();
    }

    render() {
        return (
            <div>
                <button onClick={this.selectProduct}>
                    {this.props.isSelected ? "Додано в кошик" : "Купити" }
                </button>
            </div>
        )
    }
}