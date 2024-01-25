/* eslint-disable react/prop-types */
import React,{useContext} from 'react'
import { GitUserContext } from '../../Context';
import './Repoinfo.css'


export default function Repoinfo() {
  const {currentRepo} =useContext(GitUserContext);
  return (
    <>
    {currentRepo.length!==0 ?(
      <div className='Repo-info-card'>
        <div className='imgdiv'><img src={currentRepo.owner.avatar_url} alt="avtar" /></div>
          <div className='infodiv'>
          <div className='info'><h4>Repo Name</h4><p>{currentRepo.name}</p></div> 
          <div className='info'><h4>Repo FullName</h4><p>{currentRepo.full_name}</p></div>
          <div className='info'><h4>Description</h4><p>{currentRepo.description}</p></div>
          <div className='info'><h4>Created At</h4><p>{currentRepo.created_at}</p></div>
          </div>
       </div>
    ):<div>Loading...</div> }
       
    
    </>
  )
}
