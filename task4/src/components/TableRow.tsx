import React from "react"
import { data } from "../mocks/products"

interface ITableRowProps {
    checkbox: JSX.Element
    name: string
    data_price: number
}


export function TableRow(props: ITableRowProps) {
    return (
        <div className="table-row">
            {props.checkbox}
            <label>
                <span>{props.name}</span>
                <span>{`${props.data_price}`}р</span>
            </label>
        </div>
     )
}
