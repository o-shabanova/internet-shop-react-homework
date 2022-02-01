import React, {Component} from "react";
import {RemoveCartButton} from "./RemoveCartButton";
import {InsideCartProducts} from "./InsideCartProducts";
export class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.clearCart = this.clearCart.bind(this);
    }

    clearCart() {
        this.props.clearCart()
    }


    render() {
        return(
            <div style={{width:"300px", height:"150px", backgroundColor:"#eee", position: "absolute",
                top: "60px", marginLeft: "80%"}}>
              <h3><center>Корзина</center></h3>
                <InsideCartProducts cart={this.props.cart}/>
                <RemoveCartButton cart={this.props.cart} clearCart={this.clearCart}/>
            </div>
        )
    }
}