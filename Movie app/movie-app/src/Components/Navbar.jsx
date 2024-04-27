import React, { useEffect, useRef } from 'react'

const Navbar = ({ query, setquery, moviedata }) => {
    // const [inptvalue, setinputvalue] = useState("")
    const queryhandler = (e) => {
        setquery(e.target.value)
    }
    const submithandler = (e) => {
        e.preventDefault()

    }

    const inputEl = useRef(null)
    useEffect(() => {
        // inputEl.current.focus();

        console.log(inputEl.current);
        function callback(e) {
            if (document.activeElement === inputEl.current) return;
            if (e.code === "Enter") {
                inputEl.current.focus();
                setquery("")
            }
        }
        document.addEventListener("keydown", callback)
        return () => {
            document.addEventListener("keydown", callback);
        };

    }, [setquery])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark box">
                <div >
                    <p href="/">UsePopcorn</p>
                </div >
                <div>
                    <form className="d-flex" role="search" onSubmit={submithandler}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={queryhandler} ref={inputEl} />
                    </form>
                </div>
                <p>Found {moviedata.length} Result</p>

            </nav >
        </div >
    )
}

export default Navbar
