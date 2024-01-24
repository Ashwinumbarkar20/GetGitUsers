import React,{useContext}  from 'react'
import { GitUserContext } from '../../Context'
import { FaSearch } from "react-icons/fa";
import './Navbar.css'
export default function Navbar() {
    const {setSearchText,getuser} =useContext(GitUserContext);

  return (
    <>
      <nav className='navbar'>
        <div className='Logo'>Logo</div>
        
        <div className='Search'>
        
        <form action=""method="GET" onSubmit={getuser}>
        
            <input className="search-box"  type="text" placeholder='Enter Username ' onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className="search-btn" type="submit"><FaSearch className='sicon'/></button>
        </form>
        </div>
        
     </nav> 
    </>
  )
}
