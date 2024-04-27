import React from 'react'

const Bodycolor = (props) => {
    return (
        <div className='container'>
            <div>
                <button type="button" className="btn btn-primary my-3 mx-3" onClick={() => { props.changemode("primary") }}></button>
                <button type="button" className="btn btn-secondary  my-3 mx-3" onClick={() => { props.changemode("secondary") }}></button>
                <button type="button" className="btn btn-success  my-3 mx-3" onClick={() => { props.changemode("success") }}></button>
                <button type="button" className="btn btn-danger  my-3 mx-3" onClick={() => { props.changemode("danger") }}></button>
                <button type="button" className="btn btn-warning  my-3 mx-3" onClick={() => { props.changemode("warning") }}></button>
                <button type="button" className="btn btn-info  my-3 mx-3" onClick={() => { props.changemode("info") }}></button>
                <button type="button" className="btn btn-light my-3 mx-3" onClick={() => { props.changemode("light") }}></button>
                <button type="button" className="btn btn-dark my-3 mx-3" onClick={() => { props.changemode("dark") }}></button>
            </div>
        </div>
    )
}

export default Bodycolor

