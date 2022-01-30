import React, {Component} from "react";
import {Product} from "./Product";
import {ShoppingCart} from "./ShoppingCart";

export class Shop extends Component {
    render() {
        return (
            <div style={{position: "relative"}}>
                <header>
                    <h1><center>Магазин</center></h1>
                </header>
                <Product/>
                <ShoppingCart/>
            </div>
        )
    }
}