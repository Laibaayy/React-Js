import React from 'react'

const MovieListing = (props) => {

    const myselection = () => {
        props.handleselectedId(props.movies)

    }
    // const istruw = props.movies.imdbID === props.selectedId
    // console.log(istruw);
    return (
        <div className='move'>
            <ul className='displaying' onClick={myselection}>
                <img className='size' src={props.movies.Poster} alt="" />
                <div className='data'>
                    <h3>{props.movies.Title}</h3>
                    <p>📅{props.movies.Year}</p>
                </div>

            </ul>
        </div>
    )
}

export default MovieListing
