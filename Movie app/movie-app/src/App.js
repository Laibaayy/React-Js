// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import MovieListTodo from "./Components/MovieListTodo";
import Navbar from "./Components/Navbar";
import MoviesWatchedListTodo from "./Components/MoviesWatchedListTodo";
import MoviesYouHaveWatched from "./Components/MoviesYouHaveWatched";
import Star from "./Components/Star";
import Loading from "./Components/Loading";
const MyKey = "67d9b4fb";
//Agr hm key kon andr likhy gy to wo bar bar recreate ho gi
function App(props) {
  const tempmoviedata = [
    {
      imbID: "tt56",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg",
    },
    {
      imdbID: "tt65",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/155659-tv-news-feature-what-is-the-best-order-to-watch-the-matrix-movies-image6-n4msmyjaxw.jpg",
    },
    {
      imdbID: "tt53",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg",
    },
  ];

  const tempwatcheddata = [];
  const [moviedata, setmoviedata] = useState([]);
  const [moviewatched, setmoviewatched] = useState([]);
  const [query, setquery] = useState("");
  const [isOpen, setisOpen] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [errordata, seterrordata] = useState("");
  const [selectedId, setselectedId] = useState(null);

  const watchedmoviedata = (movie) => {
    setmoviewatched((data) => [...data, movie]);

    // localStorage.setItem(
    //   "moviewatched",
    //   JSON.stringify([...moviewatched, movie]) hmy array deni pray gi ta k update hny k bad save ho local storage
    // );
  };
  //we can create the state using callback function
  // const [moviewatched, setmoviewatched] = useState(() => {
  //   const storedval = localStorage.getItem("moviewatched");
  //   return JSON.parse(storedval); parse kyun k data string m convert ho rha useefftect m so we need to convert it
  // });
  //     useEffect(() => {
  //       localStorage.setItem("moviewatched", JSON.stringify(moviewatched));
  // }, [moviewatched]);

  const handleselectedId = (input) => {
    setselectedId((data) => (data === input.imdbID ? null : input.imdbID));
  };

  const signhandler = () => {
    setisOpen(!isOpen);
  };

  const handleclose = () => {
    setselectedId(null);
  };

  useEffect(() => {
    const controller = new AbortController();
    async function mydata() {
      try {
        seterrordata("");
        setisLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${MyKey}&s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("There is some problem");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Movie not Found");
        setmoviedata(data.Search);
        seterrordata("");
        console.log(data.Search);
      } catch (err) {
        console.error(err.message);
        if (err.name !== "AbortError") {
          seterrordata(err.message);
        }
      } finally {
        setisLoading(false);
      }
    }

    if (query.length < 3) {
      seterrordata("");
      setmoviedata([]);
      return;
    }

    mydata();
    return function () {
      controller.abort();
    };
  }, [query]);

  const deletehandler = (input) => {
    const filteringarray = moviewatched.filter((data) => {
      return data.imdbID !== input;
    });
    setmoviewatched(filteringarray);
  };

  return (
    <div>
      <Navbar query={query} setquery={setquery} moviedata={moviedata} />
      <div className="style">
        <MovieListTodo
          moviedata={moviedata}
          isOpen={isOpen}
          setisOpen={setisOpen}
          signhandler={signhandler}
          isLoading={isLoading}
          errordata={errordata}
          handleselectedId={handleselectedId}
          selectedId={selectedId}
        />

        <MoviesWatchedListTodo
          watchedmoviedata={watchedmoviedata}
          moviewatched={moviewatched}
          selectedId={selectedId}
          handleselectedId={handleselectedId}
          handleclose={handleclose}
          deletehandler={deletehandler}
        />
      </div>
      <Star
        maxlength={10}
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
        ]}
      />
    </div>
  );
}

export default App;
