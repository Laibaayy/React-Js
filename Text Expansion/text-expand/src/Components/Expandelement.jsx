
import React, { useState } from 'react'

const Expandelement = ({ element }) => {
    const [expandingtext, setexpandingtext] = useState(false)
    const Expanderhandler = () => {
        setexpandingtext(!expandingtext)
    }
    return (<>
        <div>{expandingtext ? element.text : element.text.slice(0, 150)}</div>
        <button onClick={Expanderhandler}>{expandingtext ? "Show Less" : "Show More"}</button>
    </>
    )
}

export default Expandelement