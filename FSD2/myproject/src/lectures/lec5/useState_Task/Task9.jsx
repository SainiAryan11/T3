import {useState} from 'react'

function US10() {   
    const [data, setData] = useState({fname: '',lname: '', email: '',password: '',message: '',gender: '',city: ''})
    const hs = (e) => {
        e.preventDefault()
        alert(`Welcome ${data.fname} ${data.lname}
            Your email is ${data.email}
            Your message is ${data.message}
            Your gender is ${data.gender}
            Your city is ${data.city}`)
    }
    const hc = (e) => {
        const {name,value} = e.target
        setData({...data, [name]: value})
    }

    return (    
        <form onSubmit={hs}>
            <input type="text" name="fname" placeholder="First Name" value={data.fname} onChange={hc} />
            <input type="text" name="lname" placeholder="Last Name" value={data.lname} onChange={hc} />
            <input type="email" name="email" placeholder="Email" value={data.email} onChange={hc} />
            <input type="password" name="password" placeholder="Password" value={data.password} onChange={hc} />
            <input type="text" name="message" placeholder="Message" value={data.message} onChange={hc} />
            <select name="gender" value={data.gender} onChange={hc}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="text" name="city" placeholder="City" value={data.city} onChange={hc} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default US10