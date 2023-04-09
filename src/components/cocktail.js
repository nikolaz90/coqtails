import React from 'react'
//import {useGlobalContext} from '../context'
import {Link} from 'react-router-dom'



function cocktail({name, alc, image, id}) {
  return (
    <Link to={`pers_projects/coqtails/singlecocktail${id}`}>
      <article className='cocktail-in-list'>
        <div className='cocktail-image-container'>
          <img src={image} alt={name}></img>
        </div>
        <h4>{name}</h4>
        <p>{alc}</p>
      </article>
    </Link>
    
  )
}



export default cocktail
