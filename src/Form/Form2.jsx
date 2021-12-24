import React, { useState } from "react";

const Form = () => {
   const[fname, setFname] =useState("")
   const[pfname, setFPfname] =useState("")
    const[lname, setLname]=useState("")
    const [plname, setPlname] = useState("")
    
    const InputEventOne = (e) => {
        setFname(e.target.value)
    }
    const InputEventTwo = (e) => {
        setLname(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault();
        setFPfname(fname);
        setPlname(lname);

    }

    return (
      <>
          <form className="formField" onSubmit={Submit}>
            <h1>Hello, {pfname} {plname} !!!</h1>
            <input
              type="text"
              onChange={InputEventOne}
              placeholder="Enter Your First Name"
              value={fname}
            />
            <input
              type="text"
              onChange={InputEventTwo}
              placeholder="Enter Your Last Name"
              value={lname}
            />
            <button type="submit">Submit</button>
          </form>
      </>
    );
}

export default Form