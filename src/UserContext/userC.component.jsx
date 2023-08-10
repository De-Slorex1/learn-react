import { useContext } from "react";
import { UserContext, ChannelContext } from "./userA.component";


const UserC = () => {
    const user = useContext(UserContext);
    const age = useContext(ChannelContext);

    return ( 
        <>
            <h2>I am {user} and I am is {age} years old.</h2>
        </>
     );
}
 
export default UserC;