import React from "react";

interface IResultProps {
    total: number
}

export default function Result(props: IResultProps) {
    return(
        <div>
            <h3>Итог:</h3>
            <span className="price">{props.total}</span>
            <span>р.</span>
        </div>
    );
}