import React, { useState } from "react";

const MulForm2_1 = () => {
  const [Fullname, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const InputEvent = (e) => {
    const { name, value, email, phone } = e.target;

    setFullname((preValue) => {
        return {
            ...preValue,
            [name]:value
        };
    });
  };

  const InputSubmit = (e) => {
      e.preventDefault();
      alert("Your Form Submitted")
  };
  return (
    <>
      <div>
        <form onSubmit={InputSubmit}>
          <h2>
            Hello, {Fullname.fname} {Fullname.lname}{" "}
          </h2>
          <p>{Fullname.email}</p>
          <p>{Fullname.phone}</p>
          <input
            type="text"
            name="fname"
            onChange={InputEvent}
            placeholder="Enter Your First Name"
                      value={Fullname.fname}
                      autoComplete="off"
          />
          <input
            type="text"
            name="lname"
            onChange={InputEvent}
            placeholder=" Enter Your Last Name"
                      value={Fullname.lname}
                      autoComplete="off"
          />
          <input
            type="email"
            name="email"
            onChange={InputEvent}
            placeholder=" Enter Your Email"
                      value={Fullname.email}
                      autoComplete="off"
          />
          <input
            type="number"
            name="phone"
            onChange={InputEvent}
            placeholder=" Enter Your Mobile Number"
                      value={Fullname.phone}
                      autoComplete="off"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default MulForm2_1;
