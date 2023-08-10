import { useReducer } from "react";

const initializer = 0;
const reducer = (state, action) => {
    switch(action) {
        case "I ncrement":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initializer
        default:
            return state
    }
}

const UserReducer = () => {
    const [count, dispatch] = useReducer(reducer, initializer)
    return ( 
        <div>
            <h2>{count}</h2>
            <button onClick={() => {dispatch("Increment")}}>Increment</button>
            <button onClick={() => {dispatch("Decrement")}}>Decrement</button>
            <button onClick={() => {dispatch("Reset")}}>Reset</button>
        </div>
     );
}
 
export default UserReducer;