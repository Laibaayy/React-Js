// SplitForm.jsx
import React, { useState } from 'react';

const SplitForm = (props) => {

    const [amount, setamount] = useState('')
    const [expense, setexpense] = useState('')
    const [payingperson, setpayingperson] = useState('')


    const formhandle = (e) => {
        e.preventDefault()

    }
    const amounthandler = (e) => {
        setamount(Number(e.target.value))

    }
    const expensehandler = (e) => {
        setexpense(Number(e.target.value))

    }
    const payhandle = (e) => {
        setpayingperson(e.target.value)

    }
    const frndexpense = (e) => {
        console.log(e.target.value);

    }
    const splithandler = (e) => {
        if (payingperson === "you") {
            props.calculating(amount - expense)
            props.setselectedfrnd(null)
            setamount("");
            setexpense("")

        } else if (payingperson === "frnd") {
            props.calculating(-expense)
            props.setselectedfrnd(null)
            setamount("");
            setexpense("")
        }

    }


    return (
        <div>
            {props.selectedfrnd ?
                <form className="end" onSubmit={formhandle}>
                    <h1>Split Bill With {props.selectedfrnd && props.selectedfrnd.Name}</h1>
                    <div>
                        <label htmlFor="" className="lab">🤑 Bill value:</label>
                        <input type="text" className="inp" name="" id="" value={amount} onChange={amounthandler} />
                    </div>
                    <div>
                        <label htmlFor="" className="lab">🚺 Your Expense:</label>
                        <input type="text" name="" className="inp2" id="" value={expense} onChange={expensehandler} />
                    </div>
                    <div>
                        <label htmlFor="" className="lab">👩🏻‍🤝‍👩🏻{props.selectedfrnd && props.selectedfrnd.Name} Expense:</label>
                        <input type="text" className="inp" name="" id="" value={amount - expense} onChange={frndexpense} />
                    </div>
                    <div>
                        <label htmlFor="" className="lab">Who is paying the bill:</label>
                        <select name="" id="" className="inp" onChange={payhandle} >
                            <option value="you">Choose</option>
                            <option value="you">you</option>
                            <option value="frnd">{props.selectedfrnd && props.selectedfrnd.Name}</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={splithandler}>Split</button>
                    </div>
                </form> : ""}

        </div>
    );
};

export default SplitForm;
