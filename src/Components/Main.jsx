import React,{useState} from "react";
import './Main.css'


const Result = () => {
    const [count, setCount] = useState(0)
    const InCre = () => {
        return setCount(count +1)
    }
    const DeCre = () => {
        return setCount(count -1)
    }
    return (
        <>
            <div className="main">
                <h1>Result { count }</h1>
                <button onClick={InCre}>Increment</button>
                <button onClick={DeCre}>decrement</button>
            </div>
        </>
    )
}

export default Result;