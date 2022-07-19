import React, { useState, useEffect } from 'react'
import Popup from '../Popup';
import styles from './index.module.css';

export default function ScoreKeeper() {
    const [isVisible, setIsVisible] = useState(true);

    const [disableTeamA, setDisableTeamA] = useState(false);
    const [disableTeamB, setDisableTeamB] = useState(false);

    const [teamAName, setTeamAName] = useState("Team A");
    const [teamBName, setTeamBName] = useState("Team b");
    const [scoreA, setScoreA] = useState(0);
    const [countBallofA, setCountBallofA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [countBallofB, setCountBallofB] = useState(0);
    const [over, setOver] = useState(0);
    const [overA, setOverA] = useState(0);
    const [overB, setOverB] = useState(0);

    // const arr = [1, 2, 3, 4, 5];
    //  const res = arr.filter((item)=>{
    //     return item%2 !==0
    //  })

    // const res = arr.filter(item => item % 2 !== 0)


    // Business logic always should be inside a function or useEffect hook

    useEffect(() => {

        const ta = localStorage.getItem("teamAScore");
        if (ta) setScoreA(JSON.parse(ta));

        const taBalls = localStorage.getItem("teamABalls");
        if (taBalls) setCountBallofA(JSON.parse(taBalls));

        const taOvers = localStorage.getItem("updateOverofA");
        if (taOvers) setOverA(JSON.parse(taOvers));

        const tb = localStorage.getItem("teamBScore");
        if (ta) setScoreB(JSON.parse(tb));

        const tbBalls = localStorage.getItem("teamBBalls");
        if (tbBalls) setCountBallofB(JSON.parse(tbBalls));

        const tbOvers = localStorage.getItem("updateOverofB");
        if (tbOvers) setOverB(JSON.parse(tbOvers));

        const popupVal = JSON.parse(localStorage.getItem("popup"));
        popupVal === null ? setIsVisible(true) : setIsVisible(popupVal);

        // popupVal ? setIsVisible(false) : setIsVisible(true);
        // popupVal ?console.log("true"):console.log("false");
        // console.log("---->",popupVal);

        // if (popupVal === null) {
        //     // because in the beginning, we have to show popup.
        //     setIsVisible(true)
        // } else {
        //     // after starting match, isVisible ki value false ho jaegi or popup hat jaega.
        //     setIsVisible(popupVal)
        // }


        const taName = localStorage.getItem("teamAName");
        // No need to use JSON.parse for strings
        if (taName) setTeamAName(taName);

        const tbName = localStorage.getItem("teamBName");
        // No need to use JSON.parse for strings
        if (tbName) setTeamBName(tbName)

        //total overs will be updated here.
        const totalOver = localStorage.getItem("over");
        if (totalOver) setOver(JSON.parse(totalOver));
    }, [])


    // adding team A score
    const isTeamAGameOver = () => {
        if (overA === over && overA !== 0 && over !== 0) {
            setDisableTeamA(true);
            return true;
        }

        return false;

    }
    const scoreA1 = () => {

         // const check = isTeamAGameOver();
        // if (check) {
        //     return;
        // } or we can write it as below-

        if (isTeamAGameOver()) return;

        const update = scoreA + 1;
        setScoreA(update);
        localStorage.setItem("teamAScore", update);

        const updateBall = countBallofA + 1;
        setCountBallofA(updateBall);
        localStorage.setItem("teamABalls", updateBall);
        // console.log(over);
        // console.log(overA);

        // if (overA === over) {
        //     alert("stop")
        // }
    }



    const scoreA4 = () => {
       
        if (isTeamAGameOver()) return;

        const update = scoreA + 4;
        setScoreA(update);
        localStorage.setItem("teamAScore", update)

        const updateBall = countBallofA + 1;
        setCountBallofA(updateBall);
        localStorage.setItem("teamABalls", updateBall);
    }

    const scoreA6 = () => {
        if (isTeamAGameOver()) return;

        const update = scoreA + 6;
        setScoreA(update);
        localStorage.setItem("teamAScore", update)

        const updateBall = countBallofA + 1;
        setCountBallofA(updateBall);
        localStorage.setItem("teamABalls", updateBall);
    }

    const noScoreofA = () => {
        if (isTeamAGameOver()) return;
        const updateBall = countBallofA + 1;
        setCountBallofA(updateBall);
        localStorage.setItem("teamABalls", updateBall);
    }

    const resetValueOfA = () => {
        setScoreA(0);
        localStorage.setItem("teamAScore", 0)

        setCountBallofA(0);
        localStorage.setItem("teamABalls", 0)

        setOverA(0);
        localStorage.setItem("updateOverofA", 0);

        setDisableTeamA(0)
    }

    // now update team A over -

    if (countBallofA === 6) {
        const updateOverofA = overA + 1;
        setOverA(updateOverofA);
        localStorage.setItem("updateOverofA", updateOverofA);
        setCountBallofA(0);
    }


    // adding team B score
    const isTeamBGameOver = () => {
        if (overB === over && overB !== 0 && over !== 0) {
            setDisableTeamB(true);
            return true;
        }

        return false;

    }
    const scoreB1 = () => {
        if (isTeamBGameOver()) return;
        const update = scoreB + 1;
        setScoreB(update);
        localStorage.setItem("teamBScore", update)

        const updateBall = countBallofB + 1;
        setCountBallofB(updateBall);
        localStorage.setItem("teamBBalls", updateBall);
    }

    const scoreB4 = () => {
        if (isTeamBGameOver()) return;
        const update = scoreB + 4;
        setScoreB(update);
        localStorage.setItem("teamBScore", update)

        const updateBall = countBallofB + 1;
        setCountBallofB(updateBall);
        localStorage.setItem("teamBBalls", updateBall);
    }

    const scoreB6 = () => {
        if (isTeamBGameOver()) return;
        const update = scoreB + 6;
        setScoreB(update);
        localStorage.setItem("teamBScore", update)

        const updateBall = countBallofB + 1;
        setCountBallofB(updateBall);
        localStorage.setItem("teamBBalls", updateBall);
    }

    const noScoreofB = () => {
        if (isTeamBGameOver()) return;
        const updateBall = countBallofB + 1;
        setCountBallofB(updateBall);
        localStorage.setItem("teamBBalls", updateBall);
    }

    const resetValueOfB = () => {
        setScoreB(0);
        localStorage.setItem("teamBScore", 0)

        setCountBallofB(0);
        localStorage.setItem("teamBBalls", 0)

        setOverB(0);
        localStorage.setItem("updateOverofB", 0);

        setDisableTeamB(0)
    }

    // now update team B over -

    if (countBallofB === 6) {
        const updateOverofB = overB + 1;
        setOverB(updateOverofB);
        localStorage.setItem("updateOverofB", updateOverofB);
        // here we send overs in local storage, when we refresh the page we need to get these overs printed again. so we will get
        // these overs in useEffect.

        setCountBallofB(0);
    }
    // if (overB === parseInt(over)) {
    //     alert("Match is finished");
    //     return;
    // }


    const popup = () => {
        setIsVisible(!isVisible)
        localStorage.setItem("popup", !isVisible);
        window.location.reload();
        // after starting match, team A and team B name should be printed on Scorekeeper component. for this we will have to reload page.
        // after reloading, useEffect will work. So we will impliment required code by the help of useEffect.

    }

    const newMatch = () => {
        // alert("hello")
        // setIsVisible = (true);
        localStorage.clear();
        window.location.reload();
    }



    return (
        <>
            <Popup isVisible={isVisible} popup={popup} />

            <div className={styles.headerBar}>
                <div className={styles.header}>Score Keeper [ {over} ] <button onClick={newMatch}>Start New Match</button></div>
            </div>
            <div className={styles.tables}>
                <div style={{ backgroundColor: disableTeamA ? "red" : "#121212" }} className={styles.tableA}>
                    <span className={styles.text}>{teamAName}</span><hr />
                    <span className={styles.text}>{scoreA}</span>
                    <span className={styles.text}>Balls:{countBallofA}/Over:{overA}</span>
                    <div className={styles.btn}><button onClick={scoreA1}>+1</button></div>
                    <div className={styles.btn}><button onClick={scoreA4}>+4</button></div>
                    <div className={styles.btn}><button onClick={scoreA6}>+6</button></div>
                    <div className={styles.btn}><button onClick={noScoreofA}>No Run</button></div>
                    <div className={styles.btn}><button onClick={resetValueOfA}>Reset</button></div>
                </div>
                <div style={{ backgroundColor: disableTeamB ? "red" : "#121212" }} className={styles.tableB}>
                    <span className={styles.text}>{teamBName}</span><hr />
                    <span className={styles.text}>{scoreB}</span>
                    <span className={styles.text}>Balls:{countBallofB}/Over:{overB}</span>
                    <div className={styles.btn}><button onClick={scoreB1}>+1</button></div>
                    <div className={styles.btn}><button onClick={scoreB4}>+4</button></div>
                    <div className={styles.btn}><button onClick={scoreB6}>+6</button></div>
                    <div className={styles.btn}><button onClick={noScoreofB}>No Run</button></div>
                    <div className={styles.btn}><button onClick={resetValueOfB}>Reset</button></div>
                </div>
            </div>
        </>
    )
}
