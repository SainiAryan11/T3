import { useState } from 'react'

function US7() {
    const [data,setdata] = useState({})
    const hf = (e) => {
        const {name, value} = e.target
        setdata({...data, [name]: value})
    }
    return (
    <>
        <input type="text" placeholder="Enter your first name" name="fname" value={data.fname} onChange={hf}/>
        <input type="text" placeholder="Enter your last name" name="lname" value={data.lname} onChange={hf}/>
        <h1>My name is {data.fname} {data.lname}</h1> 
    </>
    )
} 

export default US7