/* eslint-disable react/prop-types */
import React from 'react'

export default function Repoinfo({repository}) {
  console.log(repository);
  return (
    <>
       
      <h2>{repository.name}</h2>
      <p>Description: {repository.description}</p>
     
    
    </>
  )
}
