import React, { useState } from 'react'

const Counter = () => {
    const [counterHandler, setcounterHandler] = useState(0)
    const [color, setcolor] = useState("dark")

    const myfunction = (type) => {
        setcounterHandler(prev => {
            let number;

            if (type === "increment") {
                number = prev + 1;
            } else if (type === "decrement") {
                number = prev - 1;
            } else if (type === "reset") {
                number = 0;
            }

            if (number > 0) {
                setcolor("success")
            } else if (number < 0) {
                setcolor("danger")
            } else {
                setcolor("dark")
            }
            return number
        })
    }
    return (
        < div className="container" >
            <p className={`text-center text-${color}`}>{counterHandler}</p>
            <div className='text-center'>
                <button className='mx-2' onClick={() => myfunction("increment")} >Increment</button>
                <button className='mx-2' onClick={() => myfunction("decrement")}>Decrement</button>
                <button className='mx-2' onClick={() => myfunction("reset")}>Reset</button>
            </div>
        </div >
    )
}

export default Counter

// import React, { useState } from 'react';

// const Counter = () => {
//     const [counterHandler, setCounterHandler] = useState(0);
//     const [color, setColor] = useState("dark");

//     const myFunction = (type) => {
//         setCounterHandler(prevCounter => {
//             let newCounter;

//             if (type === "increment") {
//                 newCounter = prevCounter + 1;
//             } else if (type === "decrement") {
//                 newCounter = prevCounter - 1;
//             } else if (type === "reset") {
//                 newCounter = 0;
//             }

//             // Update color based on the newCounter value
//             if (newCounter > 0) {
//                 setColor("success");
//             } else if (newCounter < 0) {
//                 setColor("danger");
//             } else {
//                 setColor("dark");
//             }

//             return newCounter;
//         });
//     };

//     return (
//         <div className="container">
//             <p className={`text-center text-${color}`}>{counterHandler}</p>
//             <div className='text-center'>
//                 <button className='mx-2' onClick={() => myFunction("increment")}>Increment</button>
//                 <button className='mx-2' onClick={() => myFunction("decrement")}>Decrement</button>
//                 <button className='mx-2' onClick={() => myFunction("reset")}>Reset</button>
//             </div>
//         </div>
//     );
// };

// export default Counter;
