import React,{useContext, useEffect, useState} from 'react'
import Repoinfo from '../../Components/Repoinfo/Repoinfo'
import { useParams } from 'react-router-dom';
import { GitUserContext } from '../../Context';
export default function Repopage() {
  const {repositories, setRepositories} =useContext(GitUserContext);
  const {username,reponame}=useParams();
const[currentRepo,setCurrentRepo]=useState([]);

useEffect(()=>{
  const repodata=repositories.find((repo)=>repo.name === reponame);
  console.log(repodata)
  if(repodata!=null)
  {
    console.log("in useeffect if", repodata)
    setCurrentRepo(repodata);
    console.log(currentRepo)
  }
  else{
    console.log("in useeffect else", repodata)
    
  }
},[reponame])

 
  return (
   
    <>
    <h1>In Repo page</h1>
      <Repoinfo repository ={currentRepo}/>
    </>
  )
}
