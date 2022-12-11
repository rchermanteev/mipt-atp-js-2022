import * as React from "react";

export default function App() {
    const data = [
        {
            index: 0,
            name: "Americano",
            data_price: 100.0
        },
        {
            index: 1,
            name: "Cappuccino",
            data_price: 150.0
        },
        {
            index: 2,
            name: "Latte Macchiato",
            data_price: 200.0
        },
    ]

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
            <h3>Список товаров:</h3>
            {data.map(
                item => {
                    return (
                        <div className="table-row">
                            <input
                                type="checkbox"
                                name={item.name}
                                value={item.data_price}
                                checked={checkedState[item.index]}
                                onChange={() => handleOnChange(item.index)}
                            />
                
                            <label>
                                <span>{item.name}</span>
                                <span>{`${item.data_price}`}р</span>
                            </label>
                        </div>
                        )
                    }
                )
            }

            <h3>Корзина:</h3>
            {data.map(item => {
                if (checkedState[item.index] === true) {
                    return(
                        <ol>
                            {`${item.name} `}
                        </ol>
                    )
                }
            })}
            

            <h3>Итог:</h3>
            <span className="price">{total}</span>
            <span>р.</span>

        </div>
    );
}