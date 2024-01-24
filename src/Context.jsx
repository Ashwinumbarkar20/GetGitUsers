import React, { useState, createContext } from 'react';
export const GitUserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState("Ashwin");
    return (
        <GitUserContext.Provider value={{user,setUser}}>{children}
        </GitUserContext.Provider>
    );
}
export default UserProvider;