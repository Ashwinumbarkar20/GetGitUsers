import React,{useContext, useEffect} from 'react'
import Repoinfo from '../../Components/Repoinfo/Repoinfo'
import { useParams } from 'react-router-dom';
import { GitUserContext } from '../../Context';
import './Repopage.css'
import{Link} from 'react-router-dom'
export default function Repopage() {
  const {repositories,currentuser,setCurrentRepo,currentRepo} =useContext(GitUserContext);
  const {username,reponame}=useParams();


useEffect(()=>{
  const repodata=repositories.find((repo)=>repo.name === reponame);
    if(repodata!=null)
  {
        setCurrentRepo(repodata);
    
  }
  else{
        console.log("error")
  }
},[repositories,reponame,currentRepo])

   return (
   
    <>
    
<div className='Wrapper'>

    <div className='userinformation'>
     <div className='userimgdiv'><img className='useravator' src={`${currentuser.avatar_url}`} alt="" /></div>
    <h2 className='username'><span>{currentuser.login}</span></h2>
      <p className='totalfolloer'><span>{currentuser.followers} </span> Followers </p>
          
    </div>
     
    <Repoinfo/>
 </div>
 
 <div className='backbtn'><Link to="/"><button className='gobackbtn'>Go Back</button> </Link></div>
            </>
  )
}
