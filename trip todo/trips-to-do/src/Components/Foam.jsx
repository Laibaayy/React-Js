import React, { useState } from 'react'

const Foam = (props) => {
    const [description, setdescription] = useState("");
    const [quantity, setquantity] = useState(5);

    const nohandler = (e) => {

        setquantity(e.target.value);
    }
    const inputhandler = (e) => {
        setdescription(e.target.value);
    }
    const prevent = (e) => {
        e.preventDefault();
    }
    const clickhandler = () => {
        props.Addbuttonevent(quantity, description)
        setdescription("");
        setquantity(1);

    }
    return (
        <div className='bg-danger myclass'>
            <form action="" className="d-flex flex-row mb-3  justify-content-center  " onSubmit={prevent}>
                <div className='ms-1'>
                    What do you need for your trip?
                </div>
                <input className='ms-1' value={quantity} onChange={nohandler} type="number" name="" id="" min={1} max={20} />
                <input className='ms-1' value={description} onChange={inputhandler} type="text" name="" id="" placeholder='item...' />
                <button disabled={description === ""} className='ms-1 btn btn-primary' onClick={clickhandler} >Add</button>
            </form>

        </div>
    )
}

export default Foam
