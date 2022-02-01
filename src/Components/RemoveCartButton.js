import React, {Component} from "react";

export class RemoveCartButton extends Component {
    constructor(props) {
        super(props);
        this.emptyCart = this.emptyCart.bind(this);
    }

    emptyCart() {
        this.props.clearCart();
    }
    render() {
        return (
            <div>
                <button onClick={this.emptyCart}>Очистити корзину</button>
            </div>
        )
    }
}