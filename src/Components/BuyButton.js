import React, {Component} from "react";

export class BuyButton extends Component {
    constructor(props) {
        super(props);
        this.selectProduct = this.selectProduct.bind(this);
        this.state = {
            buttonName: "Купити"
        }
    }

    selectProduct() {
        this.props.onProductSelect();
        this.setState({buttonName: "Додано в кошик"});
    }

    render() {
        return (
            <div>
                <button onClick={this.selectProduct}>
                    {this.state.buttonName}
                </button>
            </div>
        )
    }
}