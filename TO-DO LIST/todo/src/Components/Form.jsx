import React, { useState } from 'react'

const Form = (props) => {
    const [userinput, setuserinput] = useState("")

    const inputhandler = (e) => {
        setuserinput(e.target.value);
        // console.log(e.target.value);
    }
    const addeventhandler = () => {
        props.addtask(userinput);
        setuserinput("");

        // console.log(userinput);
    }
    const editformhandler = (e) => {
        // setuserinput(e.target.value)
        props.editdatahandle(e.target.value);
    }
    const submithandler = (e) => {
        props.Submiteditdatahandle();
        console.log(e.target.value);
    }
    return (
        <>
            {props.edit.condition ?
                < div className='container my-5'>
                    <div className="input-group mb-3 input-group-lg">
                        <input type="text" className="form-control" placeholder="Enter Your Task" aria-label="Enter Your Task" aria-describedby="basic-addon2" value={props.edit.item.text} onChange={editformhandler} />
                        <div className="input-group-append">
                            <button className="input-group-text btn btn-primary" id="basic-addon2" onClick={submithandler} >Edit</button>
                        </div>
                    </div>
                </div >
                :
                <div className='container my-5'>
                    <div className="input-group mb-3 input-group-lg">
                        <input type="text" className="form-control" placeholder="Enter Your Task" aria-label="Enter Your Task" aria-describedby="basic-addon2" value={userinput} onChange={inputhandler} />
                        <div className="input-group-append">
                            <button className="input-group-text" id="basic-addon2" onClick={addeventhandler}>ADD</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Form
