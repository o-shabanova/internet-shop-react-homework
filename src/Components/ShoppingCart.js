import React, {Component} from "react";
import {RemoveCartButton} from "./RemoveCartButton";
import {InsideCartProducts} from "./InsideCartProducts";
export class ShoppingCart extends Component {
    render() {
        return(
            <div style={{width:"300px", height:"150px", backgroundColor:"#eee", position: "absolute",
                top: "60px", marginLeft: "80%"}}>
              <h3><center>Корзина</center></h3>
                <InsideCartProducts/>
                <RemoveCartButton/>
            </div>
        )
    }
}