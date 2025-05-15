import React, {useState} from "react";
import "./loto.css";
const Loto = () => {
    const [count,setCount] = useState([0, 0, 0, 0, 0, 0]);
    const generateNumber = () => {
        setCount([Math.floor(Math.random()*49)+1,
            Math.floor(Math.random()*49)+1,
            Math.floor(Math.random()*49)+1,
            Math.floor(Math.random()*49)+1,
            Math.floor(Math.random()*49)+1,
            Math.floor(Math.random()*49)+1])
    }
    return (
        <div style={{textAlign: 'center', margin: "20px"}}>
            <h1>Numbers of Loto </h1>
            <button onClick={() => generateNumber()}>Generate Numbers</button>
            <h2>{count.join(",")}</h2>
        </div>
    );
}
export default Loto;