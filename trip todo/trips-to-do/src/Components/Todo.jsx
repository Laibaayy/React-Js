import React from 'react'
import Listing from './Listing';
import Sorting from './Sorting';

const Todo = (props) => {
    return (
        <div className='display bg-success myc'>
            <div>
                {props.mylist.map((item, index) => {
                    return <Listing item={item} key={index} id={index} deletehandler={props.deletehandler} />;
                })}
            </div>
            <div className='d-flex flex-row mb-3  justify-content-center'>
                <Sorting clearhandle={props.clearhandle} sortHandle={props.sortHandle} />
            </div>

        </div>
    )
}

export default Todo
