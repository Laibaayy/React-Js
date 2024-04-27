import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const Add = (props) => {

    const [Name, settext] = useState(Number(""))
    const [image, setimage] = useState("https://i.pravatar.cc/48")
    const texthandle = (e) => {
        settext(e.target.value)

    }
    const imagehandler = (e) => {
        setimage(e.target.value)

    }
    const mysubmithandler = (e) => {
        e.preventDefault();
        if (!Name || !image) return;

        const id = uuidv4();
        const mysubmit = {
            image: `${image}?=${id}`,
            // id: uuidv4(),
        }
        props.todorender(Name, mysubmit.image, 0, id)
        console.log(mysubmit.id);
        settext("");
        setimage("https://i.pravatar.cc/48");
    }
    return (
        <>
            {props.AddForm ?
                < div className='container' id='form-cont' >
                    <form onSubmit={mysubmithandler}>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Name: </label>
                            <input type="text" name="" id="" value={Name} onChange={texthandle} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Email: </label>
                            <input type="text" name="" id="" value={image} onChange={imagehandler} />

                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div > : ""}
        </>
    )
}

export default Add
