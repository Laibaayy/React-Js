import React, { useState } from 'react'

const Form = (props) => {
    const [input, setinput] = useState("");

    const inputhandler = (e) => {
        setinput(e.target.value)
    }
    const uphandler = () => {
        setinput(input.toUpperCase());
        props.showalert("Converted to uppercase", "danger")
    }
    const lowhandler = () => {
        setinput(input.toLowerCase());
        props.showalert("Converted to Lowercase", "danger")
    }

    const Clearhandle = () => {
        setinput("");
        props.showalert("Clear Text area", "danger")
    }
    const Copyhandle = () => {
        // var myval = document.getElementById("mybox")
        // myval.select();
        // navigator.clipboard.writeText(myval.value)
        navigator.clipboard.writeText(input)
        // document.getSelection().removeAllRanges(); // Select is k bina b ho jata h but is sy
        props.showalert("Text is copied", "danger") //sara data blue color m select nhi ho ga or deselect rhy ga 
    }


    //They have use regex here 
    const Spacehandler = () => {
        let newtext = input.split(/[ ]+/); //jahan b ek ya ek sy ziada space ho gi wo split ho k ek array ban jai gi
        setinput(newtext.join(" "))  //here we join all words in array through join and with oonly one space
        props.showalert("Spaces are finished", "danger")
    }



    const capitalizeFirstLetter = () => {
        const words = input.split(" ");//Split words 
        const capitalizedWords = words.map(word => { //map words array-> 0 index p uppercase ho jai or baqi slice 
            return word.charAt(0).toUpperCase() + word.slice(1); // sy as it is print ho ga
        });
        setinput(capitalizedWords.join(" "));//this line joins the capitalized words back into a single string 
        props.showalert("Capitalized successfully", "danger")
    }


    return (
        <div className='container'><form>
            <div className="form-floating">
                <h1 className={`text-${props.mystyle === "light" ? "dark" : "light"}`} >Enter your text here</h1>
                <textarea name="" id="mybox" cols="130" rows="10" className='p-2' style={{ backgroundColor: props.mystyle === "light" ? "white" : "#685454", color: props.mystyle === "light" ? "black" : "white", border: props.mystyle === "light" ? "2px solid black" : "2px solid white" }} value={input} onChange={inputhandler}></textarea>
                <div>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={uphandler}>Convert to Upper Case</button>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={lowhandler}>Convert to Lower Case </button>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={Clearhandle}>Clear Text</button>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={Copyhandle}>Copy Text</button>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={capitalizeFirstLetter}>Capitalize Text</button>
                    <button disabled={input.length === 0} type="button" className="btn btn-primary me-1" onClick={Spacehandler}>Remove Extra Space</button>
                </div>
            </div>
        </form >
            <div className={`text-${props.mystyle === "light" ? "dark" : "light"} `}>
                <h2 className="my-2">Your Text Summary</h2>

                {/* it was for counting words but it if there is some wide space or if we click enter. then it was not counting correctly */}
                {/* <p >Your words are {input.split(" ").filter((element) => { return element.length !== 0 }).length}   and characters are {input.length}</p> */}

                <p >Your words are {input.split(/\s+/).filter((element) => { return element.length !== 0 }).length}   and characters are {input.length}</p>


                {/* <p>{0.008 * input.split(" ").length} Time to read</p> */}
                <p>{0.008 * input.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Time to read</p>
                <h1>Preview</h1>
                <p>{input.length > 0 ? input : "Write something in textbox to preview"}</p>
            </div>
        </div >

    )
}

export default Form
