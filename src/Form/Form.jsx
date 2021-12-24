import React, { useState } from "react";


const FormSubmit = () => {
    const [valu, setValu]=useState('')
    const [fullName, setFullName] = useState("");


    const inputEvent = (e) => {
        let val = e.target.value
        setValu(val)
    }

    const Submit = () => {
        setFullName(valu);
    }
    return (
        <>
            <div>
                <h1>Hello, { fullName} !!!</h1>
                <input type='text' placeholder="Enter Your Name" onChange={inputEvent} value={valu} />
                <button onClick={Submit}>Submit</button>
            </div>
        </>
    )
}

export default FormSubmit