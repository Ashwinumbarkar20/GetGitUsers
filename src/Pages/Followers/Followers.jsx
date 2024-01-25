
import React,{useContext} from 'react'
import { GitUserContext } from '../../Context';
import {Link} from 'react-router-dom';
import './Followers.css'
export default function Followers() {
    const {followers,currentuser} =useContext(GitUserContext);
    
  return (
    <>
       <div className="followers-container">
     
      <h2>Followers of {currentuser.login}</h2>
      <ul className="followers-list">
        {followers.map((follower) => (
          <li className="Follower-name" key={follower.id}>{follower.login}</li>
        ))}
      </ul>
      <Link to="/" >
      <button className="go-back-link">Go Back</button>
      </Link>
    </div>
    </>
  )
}
