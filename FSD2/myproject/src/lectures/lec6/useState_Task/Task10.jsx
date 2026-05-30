import {useState} from 'react';

function Task10() {
    const [data, setData] = useState({})
    const hc = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
    const hs = (e) => {
        e.preventDefault()
        if (data.pwd === data.cpwd) {
            alert(`Welcome user`)
        } else {
            alert(`Password and confirm password do not match`)
        }
    }

    return (
        <form onSubmit={hs}>
            <input type='email' name='email' placeholder='Email' value={data.email} onChange={hc} />
            <input type='password' name='pwd' placeholder='Password' value={data.pwd} onChange={hc} />
            <input type='password' name='cpwd' placeholder='Confirm Password' value={data.cpwd} onChange={hc} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Task10