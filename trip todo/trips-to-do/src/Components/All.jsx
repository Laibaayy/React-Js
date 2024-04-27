import React from 'react'
import Foam from './Foam'
import Head from './Head'
import Todo from './Todo'


const All = (props) => {
    return (
        <div>
            <Head />
            <Foam addingitem={props.addingitem} Addbuttonevent={props.Addbuttonevent} />
            <Todo mylist={props.mylist} deletehandler={props.deletehandler} clearhandle={props.clearhandle}
                sortHandle={props.sortHandle} />

        </div>
    )
}

export default All
