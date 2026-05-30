import { useState } from 'react'

function US5() {
    const [obj, setObj] = useState({ brand: 'BMW', color: 'titangrey', model: 'X5',year: '2000' })
    const hs = () => {
        setObj({ brand: 'audi', color:'perlsilver', model: 'Q5', year: '2002'})
    }
    return (
        <>
            <h1>My Car {obj.brand} {obj.color} {obj.model} {obj.year}</h1>
            <button onClick={hs}>Click</button>
        </>
    )
}
export default US5