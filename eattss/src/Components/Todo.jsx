import React from 'react'

import Listing from './Listing'

const todo = (props) => {
    return (
        <div className='container'>
            {props.todolist.map((item) => {

                return <Listing item={item} key={item.id}
                    handleselectedfrnd={props.handleselectedfrnd} selectedfrnd={props.selectedfrnd} setcalculatingammount={props.setcalculatingammount} />
            })}

        </div>
    )
}

export default todo
