import React, {useEffect} from 'react'
import {useGlobalContext} from '../context'


function SearchBar() {
  const {setSearchTerm} = useGlobalContext();

  const termValue = React.useRef('')

  const handleChange = ()=> {
    setSearchTerm(termValue.current.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  useEffect(()=>{
    termValue.current.focus()
  },[])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search for a cocktail by name :</label>
        <input id='name' className='search-input' type='text' placeholder='mojito' ref={termValue} onChange={handleChange}></input>
      </form>
    </div>
  )
}



export default SearchBar;