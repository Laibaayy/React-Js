import React from 'react';
import MoviesWatchedListing from './MoviesWatchedListing';
import MoviesYouHaveWatched from './MoviesYouHaveWatched';
import Moviedetail from './Moviedetail';
const MoviesWatchedListTodo = ({ moviewatched, selectedId, handleclose, watchedmoviedata, deletehandler }) => {

    return (

        <div className='stylingdatas'>

            {selectedId ? (<>   <p className='btnn' onClick={handleclose}>&larr;</p><Moviedetail selecteddata={selectedId} watchedmoviedata={watchedmoviedata} handleclose={handleclose} moviewatched={moviewatched} />  </>) :
                <>
                    <MoviesYouHaveWatched moviewatched={moviewatched} />
                    <p className='signs'>+</p>
                    {
                        moviewatched.map((watched) => {
                            return <MoviesWatchedListing watched={watched} key={watched.imdbID} deletehandler={deletehandler} />
                        })
                    }
                </>}
        </div>
    )

}

export default MoviesWatchedListTodo;
