import React,{useState} from "react";


const EventHandling = () => {
    let purple = '#8e44ad'
    let fname = 'Click Me'
    const [Bg, setBg] = useState(purple)
    const [name, setName] = useState(fname)
    const SetColor = () => {
        let black = '#000000'
        setBg(black)
        setName('Woww...... ')
    }

    const OnBack = () => {
        setBg(purple)
        setName(fname)
    }

    return (
      <>
        <div style={{backgroundColor: Bg}}>
            <button onClick={SetColor} onDoubleClick={OnBack}>{ name}</button>
        </div>
      </>
    );
}

export default EventHandling;