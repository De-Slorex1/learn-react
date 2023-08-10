import {useState, useEffect} from 'react'

const Hooks = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('')

    const logMouseMove = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log(`useEffect is updated`);
        window.addEventListener('mousemove', logMouseMove)

        return () => {
            window.removeEventListener('mousemove', logMouseMove)
        }
    }, [])
    
    return ( 
        <div>
            <p>Axis: x:{x} and y:{y}</p>
        </div>
     );
}
 
export default Hooks;