import React, { useState, createContext,useEffect } from 'react';
export const GitUserContext = createContext();

const UserProvider = ({children}) => {
    
    const url="https://api.github.com/users";
    const [searchtext,setSearchText]=useState("");
    const[serachedUsers,setSerachedUsers]=useState([]);
      const[currentuser,setcurrent]=useState({});
      const[Userfound,setUserfound]=useState(false);
      const [repositories, setRepositories] = useState([]);
    const [followers, setFollowers] = useState([]);
    const[currentRepo,setCurrentRepo]=useState([]);

const getuser=async(e)=>{
e.preventDefault();
   const  existingUser = serachedUsers.find((u) => u.login === searchtext);
try{
      if (existingUser) {
        console.log('User already fetched:', existingUser);
        setcurrent(existingUser);
        setUserfound(true)
      } 
      else {
        const res = await fetch(`${url}/${searchtext}`);
        if (res.ok) 
        {
          const userData = await res.json();
          
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
useEffect(() => {
 
    
  }, [searchtext,currentuser,Userfound,followers,repositories,serachedUsers]);

    return (
        <GitUserContext.Provider value={{
          searchtext,
          setSearchText,
          getuser,
          currentuser,
          Userfound,
          followers, 
          setFollowers,
          repositories, 
          setRepositories,
          currentRepo,
          setCurrentRepo
          }}>{children}
        </GitUserContext.Provider>
    );
}
export default UserProvider;