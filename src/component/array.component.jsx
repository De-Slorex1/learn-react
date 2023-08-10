import { useState } from "react";

const ArrayHooks = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 2
        }]
        )
    }

    return ( 
        <div>
            <ul>
            <button onClick={addItem}>Add Item</button>
                {items.map(item => {
                    <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </div>
     );
}

export default ArrayHooks;