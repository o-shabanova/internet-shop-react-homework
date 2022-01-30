import React, {Component} from "react";
import {Button} from "./Button";

export class Product extends Component {
    render() {
        return (
            <div>
                <p>Назва товару</p>
                <p>Ціна товару</p>
                <Button/>
            </div>
        )
    }
}