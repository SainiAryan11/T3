// import {useReducer,useState} from 'react'

// function UR3() {
    
//     const [state, dispatch] = useReducer(reducer, "")
//     const [num1, setnum1] = useState("")
//     const [num2, setnum2] = useState("")

//     function reducer(state, action) {
//         const num1 = action.num1
//         const num2 = action.num2
//         switch (action.type) {
//             case "addition" : return num1 + num2
//             case "subtraction" : return num1 - num2
//             case "multiplication" : return num1 * num2
//             case "division" : return num2 !== 0 ? num1 / num2 : "Error (Div by 0)";
//             default : return state
//         }
//     }
//     return (
//         <>
//             <h1>Result : {state.result}</h1>
//             <input type="number" name="n1" id="" value={num1} onChange={(e) => setnum1(e.target.value)}/>
//             <input type="number" name="n2" id="" value={num2} onChange={(e) => setnum2(e.target.value)}/>
//             <button onClick={() => dispatch({type:"addition",num1,num2})}>Addition</button>
//             <button onClick={() => dispatch({type:"subtraction",num1,num2})}>Subtraction</button>
//             <button onClick={() => dispatch({type:"multiplication",num1,num2})}>Multiplication</button>
//             <button onClick={() => dispatch({type:"division",num1,num2})}>Division</button>
//         </>
//     )
// }
    
// export default UR3


import { useReducer, useState } from 'react'
export default function UR2() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        switch (action.type) {
            case "add":
                return num1 + num2
            case "subtract":
                return num1 - num2
            case "multiply":
                return num1 * num2
            case "divide":
                return num1 / num2
            default:
                return state
        }
    }
    return (
        <div>
            <h1>Result: {result}</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={() => dispatch({ type: "add" })}>Add</button>
            <button onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
            <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
            <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
        </div>
    )
}
