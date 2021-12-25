import React,{useState} from 'react'


const MulForm = () => {
    const [Fullname, setFullname] = useState({
        fname: '',
        lname: '',
    })

    const InputEvent = (e) => {
        const name = e.target.name
        const value = e.target.value

        console.log(value);
        console.log(name);
        
        setFullname((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                }
                
            }else if (name==='lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                }
            }
        })
    }

    const InputSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div>
                <form onSubmit={InputSubmit}>
                    <h2>Hello, {Fullname.fname} {Fullname.lname} </h2>
                    <input type='text' name='fname' onChange={InputEvent}  placeholder='Enter Your First Name' value={Fullname.fname} />
                    <input type='text' name='lname' onChange={InputEvent}  placeholder=' Enter Your Last Name' value={Fullname.lname} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default MulForm;