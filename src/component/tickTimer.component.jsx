import { useState, useEffect } from "react";

const Timer = () => {

    const [counter, setCounter] = useState(0)

    const tick = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [counter])

    return ( 
        <div style={{marginTop: '20px',fontWeight: 'bolder', fontSize: '40px'}}>
            {counter}
        </div>
     );
}
 
export default Timer;