import React, { useState } from 'react'

const Counter2 = () => {
    const [rangee, setrangee] = useState(1)
    const [count, setcount] = useState(0)
    const inputclick = (e) => {
        setrangee(Number(e.target.value))
    }
    const pos = () => {
        setcount(Number(count + rangee))

    }
    const neg = () => {
        setcount(Number(count - rangee))

    }
    const texthandle = (e) => {
        setcount(e.target.value)
    }
    const dateetime = new Date();
    dateetime.setDate(dateetime.getDate() + count)
    return (
        <div className='container'>
            <div >

                <p>Steps:{rangee}</p>
                <input type="range" min={0} max={10} value={Number(rangee)} onChange={inputclick} />
            </div>
            <div>
                <button onClick={pos}>+</button>
                <input type="text" value={Number(count)} onChange={texthandle} />
                <button onClick={neg}>-</button>

            </div>
            <div>
                <p>{count === 0 && `Today is :`}</p>
                <p>{count > 0 && `After ${count} day Date will be :`}</p>
                <p>{count < 0 && ` ${count} day ago Date will be :`}</p>
                <p>{dateetime.toLocaleString()}</p>
            </div>

        </div>

    )
}

export default Counter2
