import { useState, useEffect } from 'react';

const HooksComp = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`useFfect - did updated`)
    document.title = `Clicked ${count} times`;
  }, [])

  return ( 
    <div>
        <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} />
        <button onClick={() => {setCount(count + 1)}}>Click {count} times</button>
    </div>
   );
}
 
export default HooksComp;

