import { useState } from "react";

const ObjectHooks = () => {
    const [names, setNames] = useState({firstName: '', lastName: ''})
    
    return ( 
        <div>
            <form>
                <input type='text' 
                value={names.firstName} 
                onChange={e => setNames({...names,firstName: e.target.value})}
                />
                <input type='text' 
                value={names.lastName}
                onChange={e => setNames({...names,lastName: e.target.value})}
                />
                <h3>My First Name is: {names.firstName}</h3>
                <h3>My First Name is: {names.lastName}</h3>
            </form>
        </div>
     );
}
 
export default ObjectHooks;