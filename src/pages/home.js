import React, {useState, useEffect, useCallback} from 'react'
import SearchBar from '../components/searchbar'
import Cocktaillist from '../components/cocktaillist' 
import {Link} from 'react-router-dom'


function Home() {
  const[random, setRandom] = useState('');
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  const fetchRandomID = useCallback(async ()=>{
    try{
      const response = await fetch(url);
      const data = await response.json(); 
      if(data.drinks){
        setRandom(data.drinks[0].idDrink)
      } else {
        console.log('no drinks')
      }
    } catch(error){
      console.log(error, 'error')
    }

  },[])

  useEffect(()=>{
    fetchRandomID();
  }, [])
  

  return (
    <section className='section'>
      <h2>Home</h2>
      <SearchBar/>
      <div className='random-container'>
        <span className='random-span'>Or chose a random cocktail </span>
        <Link to={`pers_projects/coqtails/singlecocktail${random}`} className='btn-random'>random cocktail</Link>
      </div>
      <Cocktaillist/>
    </section>
    
  )
}



export default Home;