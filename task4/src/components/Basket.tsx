import React from "react"
import { data } from "../mocks/products"

interface IBasketProps {
    state: Array<boolean>
}


export default function Basket(props: IBasketProps) {
    return(
        <div>
            <h3>Корзина:</h3>
            {data.map(item => {
                if (props.state[item.index] === true) {
                    return(
                        <ol>
                            {`${item.name} `}
                        </ol>
                    )
                }
            })}
        </div>

    )
}