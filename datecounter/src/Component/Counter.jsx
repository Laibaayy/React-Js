import React, { useState } from "react";


const Counter = () => {
    const [step, setstep] = useState(1);
    const [date, setdate] = useState(0);

    const increase = () => {
        setstep(step + 1)
    }
    const decrease = () => {
        setstep(step - 1)
    }
    const dateincrease = () => {
        setdate(date + step)
    }
    const datedeccrease = () => {
        setdate(date - step)
    }
    const datetime = new Date();
    datetime.setDate(datetime.getDate() + date)

    return (
        <div>
            <h1>It's Date Counter</h1>
            <div className="container" >
                <div className="d-flex flex-row mb-3">
                    <button onClick={increase}>+</button>
                    <h3>Steps:{step}</h3>
                    <button onClick={decrease}>-</button>
                </div>
                <div className="d-flex flex-row mb-3">
                    <button onClick={dateincrease}>+</button>
                    <h3>Date:{date}</h3>
                    <button onClick={datedeccrease}>-</button>
                </div>
                <p>{date === 0 && `Today is:`}</p>
                <p>{date > 0 && `After ${date} days date will be:`}</p>
                <p>{date < 0 && `${date} days ago date was :`}</p>
                <p>{datetime.toLocaleString()}</p>
            </div>

        </div>
    )
}

export default Counter
