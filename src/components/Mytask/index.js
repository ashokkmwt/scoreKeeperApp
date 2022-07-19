import React, { useState } from 'react'
import styles from './index.module.css'

export default function Mytask() {
    const [inputValue, setInputValue] = useState("");
    // if you are thinking to apply map on inputValue, then it's not possible, because map only work on array and inputValue is a string.
    const [tasks, setTasks] = useState([]);

    const handleTask = (e) => {

        if (e.target.value.length === 10) {
            alert("you can type more 30 characters")
        }
        if (e.target.value.length === 25) {
            alert("you can type more 15 characters")
        }
        if (e.target.value.length === 40) {
            alert("you can't type more characters")
            return
        }

        setInputValue(e.target.value);
    }

    const addTask = () => {

        if(inputValue === "") {
            alert("please type something")
            return
        }
        // alert(inputValue)
        const tempTasks = tasks;
        tempTasks.push(inputValue);
        setTasks(tempTasks);
        setInputValue("");
        // console.log(tasks);
    }

    return (
        <>
            <header>
                <input onChange={handleTask} value={inputValue} type='text' placeholder='type here' />
                <button onClick={addTask}>Add Task</button>
            </header>
            <main>
                <div className={`${ tasks.length %2 === 0 ? `${styles.evenOutputContainer}` : `${styles.outputContainer}` } `}>
                    {tasks.map((task, index) => {
                        return (
                            <div key={index} className={styles.outputBox}>
                                <h2>{task}</h2>
                                <button>Remove</button>
                            </div>
                        )

                    })}
                </div>
            </main>
        </>
    )
}
