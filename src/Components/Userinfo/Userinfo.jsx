/* eslint-disable react/prop-types */
import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { GitUserContext } from '../../Context';
import'./Userinfo.css'
export default function Userinfo({user}) {
    const navigate = useNavigate();
    const {repositories, setRepositories, setFollowers} =useContext(GitUserContext);

    useEffect(() => {
       
        const fetchRepositories = async () => {
          try {
            const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
            if (response.ok) {
              const data = await response.json();
              setRepositories(data);
              
            } else {
              console.error('Error fetching repositories');
            }
          } catch (e) {
            console.error('Error fetching repositories:', e);
          }
        };
    
        fetchRepositories();
    
      
        const fetchFollowers = async () => {
          try {
            const response = await fetch(`https://api.github.com/users/${user.login}/followers`);
            if (response.ok) {
              const data = await response.json();
              setFollowers(data);
            } else {
              console.error('Error fetching followers');
            }
          } catch (error) {
            console.error('Error fetching followers',);
          }
        };
    
        fetchFollowers();
      }, [user.login]);

      const handleRepositoryClick = (repository) => {
       navigate(`/Repopage/${user.login}/${repository.name}`);
       
      };
    
      const handleFollowersClick = () => {
      
        navigate(`/followers/${user.login}`);
      };

  return (
    <>
    <div className='user-info'>
      <h2 className='username'>Git Useranme: <span>{user.login}</span> </h2>
      <h3 className='totalfolloer'> Total Followers: <span>{user.followers}</span></h3>
      <h3 >Total Repositories: <span>{repositories.length}</span></h3>
      <h5 className='ul-heading'>List of Repositories</h5>
      <ul>
      
        {repositories.map((repo) => (
          <li className="reponame" key={repo.id} onClick={() => handleRepositoryClick(repo)}>
            {repo.name}
          </li>
        ))}
      </ul>
      <div>
      <button className='viewfollwers' onClick={handleFollowersClick}>View Followers</button>
    </div>
    </div>
   
  </>
  )
}
