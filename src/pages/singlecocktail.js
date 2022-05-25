import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/loading'

function SingleCocktail() {
  const {id} = useParams(); 
  const [loading, setLoading] = useState(false)
  const [drink, setDrink] = useState(null)
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

  const fetchDrink = async()=>{

    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json(); 
      setLoading(false)
      if(data.drinks){
        const {idDrink, strDrink, strGlass, strInstructions, strDrinkThumb, strAlcoholic, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5} = data.drinks[0];
        const newDrink = {id: idDrink, name:strDrink, glass: strGlass, instructions: strInstructions, image: strDrinkThumb, alc:strAlcoholic, ingredients:[strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5], measures:[strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5]};
        setDrink(newDrink)
      } else {
        setDrink(null)
        setLoading(false)
      }
    } catch (error) {
      console.log(error, 'error')
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchDrink();
    setLoading(true);
  }, [])

  if(loading){
    return (
      <section className='section'>
        <Loading/>
      </section>
      
    )
  }

  if(!drink){
    return (
      <section className='section'>
        Error
      </section>
    )
  }

  return (
    <section className='section'>
      <h3>{drink.name}</h3>
      <p>This drink is {drink.alc}</p>
      <img className='single-drink-image' src={drink.image} alt={drink.name}></img>
      <div className='ingredients-container'>
        <ul className='measures-list'>
          {drink.measures.map((item, index)=>{
            return (item && <li key={index}>{item}</li>)
          })}
        </ul>
        <ul className='ingredients-list'>
          {drink.ingredients.map((item, index)=>{
            return (item && <li key={index}>{item}</li>)
          })}
        </ul>
      </div>
      <p>Serve in a {drink.glass}</p>
      <p className='instructions'>{drink.instructions}</p>
    </section>
  )
}



export default SingleCocktail;