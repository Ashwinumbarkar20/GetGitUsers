import React, { useState, createContext } from 'react';
export const GitUserContext = createContext();

const UserProvider = ({children}) => {
    
    const url="https://api.github.com/users";
    const [searchtext,setSearchText]=useState("");
    const[serachedUsers,setSerachedUsers]=useState([]);
      const[currentuser,setcurrent]=useState({});
      const[Userfound,setUserfound]=useState(false);
const getuser=async(e)=>{
e.preventDefault();
   const  existingUser = serachedUsers.find((u) => u.login === searchtext);
try{
      if (existingUser) {
        console.log('User already fetched:', existingUser);
        setcurrent(existingUser);
      } 
      else {
        
        const res = await fetch(`${url}/${searchtext}`);

        if (res.ok) 
        {
          const userData = await res.json();
          console.log('Fetched user data:', userData);
          setSerachedUsers([...serachedUsers, userData]);
          setcurrent(userData);
          setUserfound(true)
        } 
        else {
            setUserfound(false)
            console.log('Error fetching user:', res.statusText);
        }
      }
    } catch (error) {
      console.log('Error in API:', error);
    }
}


    return (
        <GitUserContext.Provider value={{searchtext,setSearchText,getuser,currentuser,Userfound}}>{children}
        </GitUserContext.Provider>
    );
}
export default UserProvider;