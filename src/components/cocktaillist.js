import React from 'react'
import {useGlobalContext} from '../context'
import Cocktail from './cocktail'
import Loading from './loading';

function Cocktaillist() {
  const {loading, drinksList} = useGlobalContext(); 
  
  if(loading){
    return (
      <Loading/>
    )
  }

  if(drinksList.length < 1){
    return (
      <h4 className='sorry-message'>Sorry, your search didn't return anything....</h4>
    )
  }

  return (
    <div className='drinks-container'>
      <h4>cocktails selection</h4>
      <div className='drinks-list'>
        {drinksList.map((item)=>{
        return (
          <Cocktail key={item.id} {...item}/>
        )
      })}
      </div>
      

    </div>
  )
}



export default Cocktaillist;