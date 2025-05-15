import React,{useState} from "react"
import "./dice.css";
import dice1 from "../assets/Dice1.png";
import dice2 from "../assets/Dice2.png";
import dice3 from "../assets/Dice3.png";
import dice4 from "../assets/Dice4.png";
import dice5 from "../assets/Dice5.png";
import dice6 from "../assets/Dice6.png";

const Dice = () => {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const [count, setCount] = useState([1, 1]);
    const rolldice = () => {
        setCount([Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1]);
    }
    return (
        <div style={{textAlign: 'center', margin: "20px"}}>
            <h1>Dice App</h1>
            <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
                <img src={diceImages[count[0] - 1]} alt="1.zar" style={{width: "100px", height: "100px"}}/>
                <img src={diceImages[count[1] - 1]} alt="2.zar" style={{width: "100px", height: "100px"}}/>
            </div>
            <button onClick={rolldice} style={{marginTop: "20px", padding: "10px 20px"}}>Roll Dice</button>
        </div>
    );

};
export default Dice;
