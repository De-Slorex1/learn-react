import { useState, useEffect } from "react";
import axios from 'axios'

const DataFetch = () => {

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] =useState(1);

    const handleClick = () => {
        setIdFromButton(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res => { 
            console.log(res)
            setPosts(res.data)
        }
        )
        .catch(error => console.log(error))
    }, [idFromButton])

    return ( 
        <div>
        <input type='text' value={id} onChange={(e) => {setId(e.target.value)}} />
        <p>{posts.title}</p>
        <button type="button" onClick={handleClick}>Fetch Data</button>
        </div>
     );
}
 
export default DataFetch;