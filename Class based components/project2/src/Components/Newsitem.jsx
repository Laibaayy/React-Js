import React, { Component } from 'react'


export class Newsitem extends Component {


    render() {
        let { title, description, imageurl, detailurl, author, date } = this.props
        let a = date;
        let d = new Date(a);


        return (


            <div className="card my-3" style={{ width: '18rem' }}>

                <img src={!imageurl ? "https://img.koreaboo.com/2024/03/FI-1-4.jpg" : imageurl} style={{
                    width: "21.6vw",
                    height: "32vh"
                }} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated {d.toUTCString()} , {!author ? "Unknown" : author}</small></p>
                    <a rel="noreferrer" href={detailurl} target='_blank' className="btn btn-dark">Read More</a>
                    <p className='card-text'><small className='text-muted'></small></p>
                </div>
            </div>

            //  {new Date(date).toUTCString()}


        )
    }
}

export default Newsitem

// https://newsapi.org/v2/top-headlines?country=us&apiKey=28cff8f54a0345dbac5f05909f0961e9