import { useState } from 'react'

function US8() {
    const [data, setdata] = useState({})    
    const [result, setresult] = useState()
    const hf = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    const add = () => {
        setresult(parseInt(data.n1) + parseInt(data.n2))
    }   
    return (
        <>
            <input type="number" placeholder="Enter first number" name="n1" onChange={hf} />
            <input type="number" placeholder="Enter second number" name="n2" onChange={hf} />
            <button onClick={add}>Add</button>
            <h1>Addition of {data.n1} & {data.n2} is {result}</h1>
        </>
    )
}

export default US8