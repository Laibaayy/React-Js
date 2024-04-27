import React, { useState, useEffect } from 'react'

const Converter = () => {
    const [selectedvalue, setselectedvalue] = useState("USD")
    const [convertselectedvalue, setconvertselectedvalue] = useState("USD")
    const [inputvalue, setinputvalue] = useState(1)
    const [converteddata, setconverteddata] = useState(0)
    const [isLoading, setisLoading] = useState(false)

    const selecthandler = (e) => {
        (setselectedvalue(e.target.value))
    }
    const selecthandlerconverting = (e) => {
        setconvertselectedvalue(e.target.value)
    }
    const inputvaluehandler = (e) => {
        setinputvalue(Number(e.target.value))
    }


    useEffect(() => {
        const controlleer = new AbortController()
        async function mydata() {
            setisLoading(true)
            try {
                const response = await fetch(`https://api.frankfurter.app/latest?amount=${Number(inputvalue)}&from=${selectedvalue}&to=${convertselectedvalue}`, { signal: controlleer.signal })
                const res = await response.json()
                console.log(res);
                setconverteddata(res.rates[convertselectedvalue])
                setisLoading(false)
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.log(err.message);
                }
            }
        }
        if (selectedvalue === convertselectedvalue) {
            setconverteddata(inputvalue)
            return;
        }
        mydata()
        return function () {
            controlleer.abort();
        }
    }, [convertselectedvalue, inputvalue, selectedvalue])

    return (
        <div >
            <input type="text" value={Number(inputvalue)} onChange={inputvaluehandler} disabled={isLoading} />
            <select name="" id="" value={selectedvalue} onChange={selecthandler} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select name="" id="" value={convertselectedvalue} onChange={selecthandlerconverting} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{converteddata} {convertselectedvalue}</p>

        </div>
    )
}

export default Converter
