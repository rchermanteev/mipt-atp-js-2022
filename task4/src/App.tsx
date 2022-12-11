import * as React from "react";

import Basket from "./components/Basket";
import Result from "./components/Result";
import Table from "./components/Table";
import { data } from "./mocks/products";

export default function App() {
    const [checkedState, setCheckedState] = React.useState(
        new Array(3).fill(false)
    );

    const [total, setTotal] = React.useState(0);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
            if (currentState === true) {
                return sum + data[index].data_price;
            }
            return sum;
            },
            0
        );

        setTotal(totalPrice);
    };

    return (
        <div>
            <Table state={checkedState} handle={handleOnChange} />
            <Basket state={checkedState}/>
            <Result total={total}/>
        </div>
    );
}