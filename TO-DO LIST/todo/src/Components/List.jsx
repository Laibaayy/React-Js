import React from 'react'
import Listingitem from './Listingitem'
const List = (props) => {
    return (
        <div className='container my-3'>
            {props.mytodo.map((item, index) => {
                return <Listingitem item={item} key={index} id={index} deletingtask={props.deletingtask} handleedit={props.handleedit} edit={props.edit} editdatahandle={props.editdatahandle} />
            })}
        </div>
    )
}

export default List
