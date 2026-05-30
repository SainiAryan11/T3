import { useReducer } from "react";

function UR1() {
    const [state,dispatch] = useReducer(reducer , 0)
    function reducer(state,action) {
        // if (action.type === "increment") { return state + 1 }
        // if (action.type === "decrement") { return state - 1 }
        // if (action.type === "reset") { return 0 }

        switch (action.type) {
            case "increment" : return state + 1
            case "decrement" : return state - 1
            case "reset" : return 0
            default : return state
        }
    }
    return (
        <>
            <h1>Counter : {state}</h1>
            <button onClick={() => dispatch({type:"increment"})}>Increment</button>
            <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type:"reset"})}>Reset</button>
        </>
    )
}

export default UR1