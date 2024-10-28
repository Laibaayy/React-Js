
import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'dec':
            return { ...state, date: state.date - state.step }
        case 'inc':
            return { ...state, date: state.date + state.step }
        case 'stepinc':
            return { ...state, step: state.step + 1 }
        case 'stepdecc':
            return { ...state, step: state.step - 1 }
        default:
            return state;

    }
}


const Counter = () => {
    // const [step, setstep] = useState(1);
    // const [date, setdate] = useState(0);
    const initialstate = { date: 0, step: 1 }
    const [state, dispatch] = useReducer(reducer, initialstate)
    const { date, step } = state

    const increase = () => {
        dispatch({ type: "stepinc", payload: 1 })
    }
    const decrease = () => {
        dispatch({ type: "stepdecc", payload: 1 })
    }
    const dateincrease = () => {
        dispatch({ type: 'inc', payload: step })
    }
    const datedeccrease = () => {
        dispatch({ type: 'dec', payload: step })
    }
    const datetime = new Date();
    datetime.setDate(datetime.getDate() + date)

    return (
        <div>
            <h1>It's Date Counter</h1>
            <div className="container" >
                <div className="center">

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
