import React, {Component} from "react";

export class SelectedProduct extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.product.name}</p>
                <p>Price:  {this.props.product.price} UAH</p>
                <br/>
            </div>
        )
    }
}