import React from 'react'


const Listing = (props) => {

    const selectbtn = () => {
        props.handleselectedfrnd(props.item);
        props.setcalculatingammount(props.item)
    }

    const isSelected = props.item.id === props.selectedfrnd?.id

    return (
        <div>
            <ul>
                <div className={isSelected ? "yellow" : ""}>
                    <li><img src={props.item.image} alt="" /></li>
                </div>
                <div className='side'>
                    <li>{props.item.Name} </li>
                    <li>{props.item.price} </li>
                    <li>{props.item.price === 0 && <p className='black'>You and ${props.item.Name} are even </p>}</li>
                    <li>{props.item.price > 0 && <p className='green'>${props.item.Name} owes you ${props.item.price}</p>}</li>
                    <li>{props.item.price < 0 && <p className='red'>you owe ${props.item.price} to  ${props.item.Name} </p>}</li>
                    {/* <button onClick={selectbtn} >{isSelected ? "Close" : "Select"}</button> */}
                    <button onClick={selectbtn} >{isSelected ? "Close" : "Select"}</button>
                </div>

            </ul>

        </div>
    )
}

export default Listing
