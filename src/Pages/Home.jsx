import React,{useContext} from 'react'
import { GitUserContext } from '../Context';
import Navbar from '../Components/Navbar/Navbar';
import './Home.css'
import Userinfo from '../Components/Userinfo/Userinfo';

export default function Home() {
    const {serachedUsers,currentuser,Userfound,searchtext} =useContext(GitUserContext);
   console.log("serached ",currentuser);
  return (
    <>
    <Navbar />
 

    {searchtext.length === 0 ?

    null:
    (Userfound===true)?
      (  <div className='userinfodiv'>
    <Userinfo user={currentuser} />
  </div>):(Userfound===false)&&(
<div className='userinfodiv'>
    <p>User not found</p>
  </div>)}


     
    </>
  )
}
