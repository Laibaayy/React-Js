import React, { useState } from 'react'

const Form = () => {
    const [bill, setbill] = useState('')
    const [tip, settip] = useState("")
    const [frndtip, setfrndtip] = useState("")
    let tipholder = Number(tip) + Number(frndtip);
    const billhandler = (e) => {
        setbill(e.target.value);
        console.log(e.target.value);
    }
    const tiphandler = (e) => {
        const selectedTip = e.target.value;
        settip(selectedTip);

    }

    const frndtiphandler = (e) => {
        const selectedfrndTip = e.target.value;
        setfrndtip(selectedfrndTip);

    }

    const changehandler = (e) => {
        e.preventDefault();
        setbill('')
        settip("")
        setfrndtip("")

    }
    return (
        <div >
            <form action="" onSubmit={changehandler}>
                <label htmlFor="">How much was the bill ?</label>
                <input type="text" value={bill} onChange={billhandler} />
                <label htmlFor="Service">How did you like the service ?</label>
                <select disabled={bill === "" ? true : false} name="Service" id="Service" value={tip} onChange={tiphandler}>
                    <option value="">Select your option</option>
                    <option value="10">It was good 10%</option>
                    <option value="5">it was good 5%</option>
                    <option value="0">dissatisfied 0%</option>

                </select>

                <label htmlFor="friendService">How did your friend like the service ?</label>
                <select disabled={bill === "" ? true : false} name="friendService" id="friendService" value={frndtip} onChange={frndtiphandler}>
                    <option value="">Select your option</option>
                    <option value="10">It was good 10%</option>
                    <option value="5">it was good 5%</option>
                    <option value="0">dissatisfied 0%</option>

                </select>
                <p>You Pay : ${Number(bill) + Number(tipholder)} (${!bill ? "0" : bill}+${tipholder}tip)</p>

                <button className='rest'>Reset</button>
            </form>

        </div>
    )
}

export default Form
