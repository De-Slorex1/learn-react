import { ChannelContext, UserContext } from "./userA.component";
import UserC from "./userC.component";

const UserB = () => {
    return ( 
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {age => {
                                return (
                                    <div>
                                    
                                    </div>
                                )
                            }

                            }
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
            <UserC />
        </>
     );
}
 
export default UserB;