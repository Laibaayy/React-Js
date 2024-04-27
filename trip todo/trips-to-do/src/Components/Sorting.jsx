import React from 'react'

const Sorting = (props) => {

    const cleareventhandle = () => {
        props.clearhandle()
    }

    const sortEventHandler = (e) => {
        const selectedSortOrder = e.target.value;
        props.sortHandle(selectedSortOrder);
    }
    return (
        <div className="box">
            <select name="sort by input order" id="" className='btn btn-dark' onChange={sortEventHandler}>
                <option value="desc">Desending</option>
                <option value="asc">Ascending</option>
            </select>
            <button onClick={cleareventhandle} className='btn btn-dark'>Clear List</button>
        </div>
    )
}

export default Sorting
