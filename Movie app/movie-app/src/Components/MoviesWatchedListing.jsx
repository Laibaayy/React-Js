import React from 'react'

const MoviesWatchedListing = (props) => {
    const deletewatchedmovie = () => {
        props.deletehandler(props.watched.imdbID)
    }
    return (

        <div className='displaying work move'>
            <img className='size' src={props.watched.Poster} alt="" />
            <div className='box5'>
                <h3>{props.watched.Title}</h3>
                <span>⭐{props.watched.imdbRating}</span>
                <span> 🌟{props.watched.userRating}</span>
                <span> ⏳{Number(props.watched.Runtime)} min</span>
                <button onClick={deletewatchedmovie} >❌</button>
            </div>


        </div>
    )
}

export default MoviesWatchedListing