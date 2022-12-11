import React from "react";

interface ICheckBoxProps {
    state: Array<boolean>
    handle: (React.Dispatch<React.SetStateAction<number>>)
    index: number
}

export default function CheckBox(props: ICheckBoxProps) {
    return (
        <input
            type="checkbox"
            checked={props.state[props.index]}
            onChange={() => props.handle(props.index)}
        />
    )
}