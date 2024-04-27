import React from 'react'
import MovieListing from './MovieListing'
import Loading from './Loading'
import Errortask from './Errortask'

const MovieListTodo = ({ moviedata, signhandler, isOpen, isLoading, errordata, handleselectedId, selectedId }) => {

    return (
        <div className='stylingdata' >
            {isLoading && <Loading />}
            {!isLoading && !errordata && <div>
                <p className='sign' onClick={signhandler}>{isOpen ? "-" : "+"}</p>

                {isOpen && moviedata.map((movies) => {

                    return <MovieListing movies={movies} key={movies.imdbID} handleselectedId={handleselectedId} selectedId={selectedId} />
                })}

            </div>}
            {errordata && <Errortask message={errordata} />}
        </div>
    )
}

export default MovieListTodo
