import React from 'react'

const MoviesYouHaveWatched = ({ moviewatched }) => {
    function average(array) {
        const sum = array.reduce((total, num) => total + num, 0);
        return sum / array.length;
    }
    const averagerating = Number(average(moviewatched.map((watched) => watched.imdbRating)))
    const averageuserrating = Number(average(moviewatched.map((watched) => watched.userRating)))
    const averageruntime = Number(average(moviewatched.map((watched) => watched.Runtime)))
    return (
        <div className='style2'>
            <h3>MOVIES YOU WATCHED</h3>
            <span>⭐{Number(averagerating).toFixed(2)} </span>
            <span> 🌟{Number(averageuserrating).toFixed(2)}</span>
            <span> ⏳{Number(averageruntime).toFixed(2)}</span>


        </div>
    )
}

export default MoviesYouHaveWatched