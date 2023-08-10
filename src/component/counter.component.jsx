import {useState} from 'react'

const Counter = () => {
    const initialCounter = 0
    const [counter, setCounter] = useState(initialCounter)
    
    return (
        <div>
            <center>
                <button>{counter}</button><br />
                <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
                <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrement</button>
            </center>
        </div>
      );
}
 
export default Counter;