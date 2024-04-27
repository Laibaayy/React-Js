import React from 'react'
import Expandelement from './Expandelement'

const Expansion = ({ todo }) => {
    return (
        <div>
            {todo.map((element, index) => {
                return <Expandelement element={element} key={index} />
            })}
        </div>
    )
}

export default Expansion