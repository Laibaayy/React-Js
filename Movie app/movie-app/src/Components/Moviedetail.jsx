import React, { useEffect, useState } from 'react'
import Star from './Star';
import Loading from './Loading';

const MyKey = "67d9b4fb";
const Moviedetail = ({ selecteddata, watchedmoviedata, handleclose, moviewatched }) => {
    const [moviedata, setmoviedata] = useState({})
    const [LoadingIs, setLoadingIs] = useState(false)
    const [userRating, setuserRating] = useState(0)


    const { Title, Released, Actors, Awards, Poster, Plot, Genre, Runtime, imdbRating, Year, Director, DVD, Country } = moviedata;
    const isRated = moviewatched.map((watch) => watch.imdbID).includes(selecteddata)
    const watchedUserRating = moviewatched.find((findid) => findid.imdbID === selecteddata)?.userRating


    useEffect(() => {
        async function DetailesOfMovie() {
            setLoadingIs(true);
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${MyKey}&i=${selecteddata}`
            );
            const res = await response.json();
            setmoviedata(res)
            setLoadingIs(false)
            console.log(res);
        }
        DetailesOfMovie()
    }, [selecteddata]);

    useEffect(() => {
        if (!Title) {
            return;
        }
        document.title = Title || "Loading...";
        return function () {
            document.title = "Usepopcorn"
        }
    }, [Title]);


    const onaddhandler = () => {

        const newwatched = {
            imdbID: selecteddata,
            Poster,
            Title,
            Year,
            imdbRating: Number(imdbRating),
            Runtime: Number(Runtime.split(' ').at(0)),
            userRating: Number(userRating),
        }

        console.log(newwatched.userRating);
        watchedmoviedata(newwatched)
        handleclose(null)

    }


    useEffect(() => {
        const keyhandler = (e) => {
            if (e.code === "Escape") {
                handleclose();
                console.log("no");
            }
        };

        document.addEventListener("keydown", keyhandler);
        return function () {
            document.removeEventListener("keydown", keyhandler);
        };
    }, [handleclose]);

    return (
        <>{!LoadingIs ?
            <div>
                <div className='movie'>
                    <div>
                        <img className='imgg' src={Poster} alt="" />
                    </div>
                    <div className='info'>
                        <h1>{Title}</h1>
                        <span>{Released} </span><span>- {Runtime}</span>
                        <p>Date fo dvd - {DVD}</p><p>{Country}</p>
                        <p>{Genre}</p>
                        <p>⭐{imdbRating} imdbRating</p>

                    </div>
                </div>
                <div>
                    {!isRated ? <div className='star'>
                        < Star setuserRating={setuserRating} maxlength={10}
                            color={"yellow"}

                            messages={[
                                "Terrible",
                                "Bad",
                                "Okay",
                                "Good",
                                "Great",
                                "Excellent",
                                "Outstanding",
                                "Amazing",
                                "Awesome",
                                "Incredible",
                            ]} /></div> : <p>You have already rated this movie {watchedUserRating}</p>}
                    {userRating ? <button className='mybtn' onClick={onaddhandler}>Add TO the list </button> : ""}
                    <div className='starss'>
                        <strong>Achived Awards {Awards}</strong>
                        <p> <em> {Plot}</em></p>
                        <p>Starring {Actors}</p>
                        <p>Directed By {Director}</p>

                    </div>
                </div> </div> : <Loading />
        }
        </>
    )
}

export default Moviedetail

