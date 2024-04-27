import React from 'react'
import Accorditem from './Accorditem'

const Accord = (props) => {
    return (
        <div className='container my-3'>
            {props.faqs.map((element, index) => {
                return <Accorditem key={index} num={index} mytitle={element.title} ans={element.text} />
            })}
        </div>
    )
}

export default Accord
