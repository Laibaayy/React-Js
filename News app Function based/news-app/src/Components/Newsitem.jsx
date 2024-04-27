import React from 'react'


const Newsitem = (props) => {
    return (


        <div className="card my-3" style={{ width: '18rem' }}>

            <img src={!props.imageurl ? "https://img.koreaboo.com/2024/03/FI-1-4.jpg" : props.imageurl} style={{
                width: "21.6vw",
                height: "32vh"
            }} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}...</h5>
                <p className="card-text">{props.description}...</p>
                <p className="card-text"><small className="text-body-secondary">Last updated {new Date(props.date).toUTCString()} , {!props.author ? "Unknown" : props.author}</small></p>
                <a rel="noreferrer" href={props.detailurl} target='_blank' className="btn btn-dark">Read More</a>
                <p className='card-text'><small className='text-muted'></small></p>
            </div>
        </div>

        //  {new Date(date).toUTCString()}


    )
}

export default Newsitem

// https://newsapi.org/v2/top-headlines?country=us&apiKey=28cff8f54a0345dbac5f05909f0961e9