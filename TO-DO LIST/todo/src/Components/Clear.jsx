import React from 'react'

const Clear = (props) => {

    const clearhandler = () => {
        props.clearalltask()
    }
    return (
        <>
            <div className='container'>
                <strong>You have {props.mytodo.length} Task</strong>
            </div>
            <div className='container my-3'>
                <button type="button" className="btn btn-outline-danger" onClick={clearhandler}>Clear All</button>
            </div>
        </>
    )
}

export default Clear
