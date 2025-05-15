import React, {useState} from "react";
import "./donut.css";
const Donut = () => {
    const [count,setCount] = useState(0);
    return (
        <div style={{textalign: 'center', margin: "20px"}}>
            <h1>Number of Donuts to eat </h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
export default Donut;