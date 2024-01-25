import React,{useContext} from 'react'
import { GitUserContext } from '../Context';
import Navbar from '../Components/Navbar/Navbar';
import './Home.css'
import Userinfo from '../Components/Userinfo/Userinfo';

function UserNotFound() {
  return (
    <div className='user-not-found'>
      <p>User not found.</p>
      
    </div>
  );
}

export default function Home() {
    const {currentuser,Userfound} =useContext(GitUserContext);
   
  return (
    <>
     <Navbar />
      { Userfound ? (
        <div className='userinfodiv'>
          <Userinfo user={currentuser} />
        </div>
      ) : null }
      
  </>
)

}