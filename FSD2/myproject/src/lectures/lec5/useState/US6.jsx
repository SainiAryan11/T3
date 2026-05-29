import { useState } from 'react'

function US6() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const hf = (e) => {
        setFname(e.target.value)
    }
    const hl = (e) => {
        setLname(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="Enter your first name" name="fname" value={fname} onChange={hf}/>
            <input type="text" placeholder="Enter your last name" name="lname" value={lname} onChange={hl}/>
            <h1>My name is {fname} {lname}</h1>
        </div>
    )
}
export default US6