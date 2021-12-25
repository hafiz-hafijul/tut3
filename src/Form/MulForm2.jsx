import React, { useState } from "react";

const MulForm2 = () => {
  const [Fullname, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const InputEvent = (e) => {
    const { name, value, email, phone } = e.target;

    setFullname((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
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

export default MulForm2;
