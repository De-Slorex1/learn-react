import {useState, useEffect} from 'react';
import Hooks from './Hooks.component';

const MouseOver = () => {

    const [display, setDisplay] = useState(true);

    return ( 
        <div>
            <button onClick={() => {setDisplay(!display)}}>Toggle Display</button>
            {display && <Hooks />}
        </div>
     );
}
 
export default MouseOver;