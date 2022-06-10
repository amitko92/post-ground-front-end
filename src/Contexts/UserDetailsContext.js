import React, {useReducer, createContext} from 'react';
import User from '../Models/User';
import { userDetailsReducer } from '../Reducers/UserDetailsReducer';

export const UserDetailsContext = createContext();

export const UserDetailsProvider = props => {

    const initData = {
        isLoggedIn: false,
        userDetails: new User()
    };

    const [userDetails, setUserDetails] = useReducer(userDetailsReducer, initData);
    
    return (
        <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
            {props.children}
        </UserDetailsContext.Provider>
    );
}