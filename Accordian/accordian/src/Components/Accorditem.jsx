import React, { useState } from 'react'

const Accorditem = (props) => {
    const [isopen, setisopen] = useState(false)

    const handleevent = () => {
        if (isopen) {
            setisopen(false)
        } else {
            setisopen(true)
        }

    }
    return (
        <div className='my-box'>
            <div className='d-flex align-items-center my-3 box' onClick={handleevent} >
                <h1 className='num'>{props.num < 10 ? `0${props.num + 1}` : props.num}</h1>
                <h2>{props.mytitle}</h2>
                <p className='icon'>{isopen ? '-' : '+'}</p>
            </div>
            {isopen && <p className='ans'>{props.ans}</p>}
        </div>

    )
};

export default Accorditem
