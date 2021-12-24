import React,{useState} from "react";

let current = new Date().toLocaleTimeString();

const Time = () => {
    const [time, setTime] = useState(current)

    const UpCurr = () => {
        current = new Date().toLocaleTimeString();
        return setTime(current)
    }
    setInterval(UpCurr,1000)
    return (
      <>
        <h1>{time}</h1>
      </>
    );
}

export default Time;
