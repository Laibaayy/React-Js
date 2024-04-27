import React from 'react'
import loading from './loading.gif';

const Spinner = () => {

    return (
        <div className='text-center'>
            <img src={loading} style={{ width: "30px" }} alt="" />
        </div>
    )
}


export default Spinner
