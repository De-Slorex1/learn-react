import { createContext } from "react";
import UserB from "./userB.component";

export const UserContext = createContext();
export const ChannelContext = createContext();

const UserA  = () => {
    return ( 
        <>
            <UserContext.Provider value={['Jacob', ' ', 'Samson']}>
                <ChannelContext.Provider value={23}>
                    <UserB />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </>
     );
}
 
export default UserA;