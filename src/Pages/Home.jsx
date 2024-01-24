import React,{useContext} from 'react'
import { GitUserContext } from '../Context'

export default function Home() {
    const {user} =useContext(GitUserContext);
    console.log(user);
  return (
    <div>
     <p>{user}</p> 
    </div>
  )
}
