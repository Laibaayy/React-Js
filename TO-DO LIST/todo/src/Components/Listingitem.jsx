import React from 'react'

const Listingitem = (props) => {

    const deletehandler = () => {
        props.deletingtask(props.id);
        // console.log(props.id);
    }

    const editeventhandler = () => {
        props.handleedit({
            text: props.item,
            id: props.id
        });

    }

    return (
        <>
            <div className='container  card '>
                <ul className="list-group  list-group-flush  ">
                    <li className="list-group-item d-flex justify-content-between align-items-center me-3">{props.item}
                        <div>
                            <button className='mx-2 btn btn-dark' onClick={editeventhandler}>Edit</button>
                            <button className='btn btn-danger' onClick={deletehandler}>Delete</button>
                        </div>
                    </li>

                </ul>
            </div>


        </>
    )
}

export default Listingitem
