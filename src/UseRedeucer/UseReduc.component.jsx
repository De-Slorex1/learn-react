import { useReducer } from "react";

const initialState = {
    firstCount: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case "Increase":
            return {firstCount: state.firstCount + 1}
        case "Decrease":
            return {firstCount: state.firstCount - 1}
        case "Reset":
            return {firstCount: state.initialState}
        default: 
            return {firstCount: state}
    }
}

const UseReduc = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={() => {dispatch({type: "Increase"})}}>Increase</button>
            <button onClick={() => {dispatch({type: "Decrease"})}}>Decrease</button>
            <button onClick={() => {dispatch({type: "Reset"})}}>Reset</button>
        </div>
     );
}
 
export default UseReduc;