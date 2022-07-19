import React, { useState } from 'react'
import styles from "./index.module.css";

export default function Popup(props) {

    const [teamAName, setTeamAName] = useState("");
    const [teamBName, setTeamBName] = useState("");
    const [over, setOver] = useState("");

    const handleTeamAName = (e) => {
        const inputValue = e.target.value;
        setTeamAName(inputValue);
        localStorage.setItem("teamAName", inputValue)
    }
    // console.log("this is A", teamAName);

    const handleTeamBName = (e) => {
        const inputValue = e.target.value;
        setTeamBName(e.target.value);
        localStorage.setItem("teamBName", inputValue)
    }
    // console.log("this is B", teamBName);

    const changeOver = (e) => {
        const inputValue = e.target.value;

        // Here false means number or true means string
        if (isNaN(inputValue)) {
            return;
        }


        // "55" > 50
        // Here parseInt(inputValue) converts string "55" into integer 55
        if (parseInt(inputValue) > 50) {
            return
        }
        setOver(e.target.value);
        localStorage.setItem("over", inputValue);
    }
    // console.log(over);


    return (
        <div style={{ display: props.isVisible ? "flex" : "none" }} className={styles.popupContainer}>
            <div className={styles.popup}>
                <h1>Team Creation </h1>
                <div className={styles.popupInput}>
                    <input onChange={handleTeamAName} value={teamAName} placeholder='Team A Name' type="text" />
                </div>
                <div className={styles.popupInput}>
                    <input onChange={handleTeamBName} value={teamBName} placeholder='Team B Name' type="text" />
                </div>
                <div className={styles.popupInput}>
                    <input onChange={changeOver} value={over} placeholder='Over' type="text" />
                </div>
                <div className={styles.popupInput}><button onClick={props.popup}>Start Match</button></div>
            </div>
        </div>
    )
}
