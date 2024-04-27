import React from 'react'
import Form from './Form'
import List from './List'
import Clear from './Clear'

const Todo = (props) => {
    return (
        <div>
            <Form addtask={props.addtask} edit={props.edit} editdatahandle={props.editdatahandle} Submiteditdatahandle={props.Submiteditdatahandle} />
            <List mytodo={props.mytodo} deletingtask={props.deletingtask} handleedit={props.handleedit} edit={props.edit} editdatahandle={props.editdatahandle} />
            <Clear mytodo={props.mytodo} clearalltask={props.clearalltask} />

        </div>
    )
}

export default Todo
