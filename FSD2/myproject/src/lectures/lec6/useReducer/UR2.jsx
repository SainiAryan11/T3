import {useReducer} from 'react'

function UR2() {

    const reducer = (state, action) => state + action

    const [state, dispatch] = useReducer(reducer, 20)

    // function reducer(state, action) {
    //     return state + action
    // }

    // Error : const cannot be changed after assignment
    // const reducer = (state, action) => {state + action} 
    
    return (
        <>
            <h1>Counter : {state}</h1>
            {/* <button onClick={() => dispatch(5)}>Click to add 5</button> */}
            <button onClick={() => dispatch(s)}>Click</button>
        </>
    )
}

export default UR2