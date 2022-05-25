import React, {useState, useEffect, useContext} from "react";
import { useCallback } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()



const AppProvider = ({children})=> {
    const [loading, setLoading] = useState(true); 
    const [searchTerm, setSearchTerm] = useState('a'); 
    const [drinksList, setDrinksList] = useState([]);

    const fetchData = useCallback( async() => {

            try {
                setLoading(true);
                const response = await fetch(`${url}${searchTerm}`);
                const data = await response.json(); 
                const {drinks} = data; 
                if(drinks){
                    setLoading(false)
                    let newDrinksList = drinks.map((item)=>{
                        const {idDrink, strDrink, strAlcoholic, strDrinkThumb} = item; 
                        return {id: idDrink, name: strDrink, alc:strAlcoholic, image:strDrinkThumb};
                    })
                    setDrinksList(newDrinksList);
                } else {
                    setLoading(false); 
                    setDrinksList([])
                }

            } catch (error) {
                console.log(error)
            }
        }, [searchTerm]
    )

        useEffect(()=>{
            setLoading(true); 
            fetchData()
        }, [searchTerm])

    return <AppContext.Provider
    value={{
        loading, 
        drinksList,
        setSearchTerm, 
        searchTerm,
    }}>
        {children}
    </AppContext.Provider>

  
}



export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }
