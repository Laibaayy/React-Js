import React, { useState } from 'react'

const Listing = (props) => {
    const [checkedstatus, setcheckedstatus] = useState(false);

    const deleteeventhandler = () => {
        props.deletehandler(props.id);
    }
    const checkeventhandler = () => {
        if (checkedstatus === false) {
            setcheckedstatus(true)
        } else {
            setcheckedstatus(false)
        }

    }
    return (
        <div>
            <ul className='d-flex' >
                <li> <input type="checkbox" name="" id="" onChange={checkeventhandler} checked={checkedstatus} />
                </li>
                <li className='text-black' style={{ textDecoration: checkedstatus === true ? "line-through" : "" }}>{props.item.qty}{props.item.Name}</li>
                <p onClick={deleteeventhandler} className='del'>❌</p>
            </ul>
        </div>
    )
}
// style = { props.item.packed ? { textDecoration: "line-through" } : {} }
export default Listing
