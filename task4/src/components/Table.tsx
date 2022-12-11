import React, { Children } from "react"
import { data } from "../mocks/products"
import CheckBox from "./CheckBox"
import { TableRow } from "./TableRow"


interface ITableProps {
    data: Array<any>
    state: Array<boolean>
    handle: (React.Dispatch<React.SetStateAction<number>>)

    children: React.ReactNode
}

export default function Table(props: ITableProps) {
    return (
        <div>
            <h3>Список товаров:</h3>
            {/* {props.data.map(item => {return(
                <TableRow 
                    checkbox={<CheckBox state={props.state} handle={props.handle} index={item.index}/>} 
                    name={item.name} 
                    data_price={item.data_price} 
                />
            )})} */}

            {props.children}
        </div>
    )
}