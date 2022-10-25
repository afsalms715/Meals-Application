import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = createContext()
const allMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTxt, setSearchTxt] = useState('a')
  const [showModel, setShowModel] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  //
  const [fevorites, setFevorites] = useState(JSON.parse(localStorage.getItem('fevorites')) || [])
  const fetchRandam = () => {
    fetchMeals(randomMeal)
  }

  const fetchMeals = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios(url)
      console.log(data.meals)
      if (data.meals) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }
    }
    catch (error) {
      console.log(error.responce)
    }
    setLoading(false)
  }
  const selectMeal = (idMeal, favoriteMeal) => {
    let meal
    if (favoriteMeal) {
      meal = fevorites.find((meal) => meal.idMeal == idMeal)
    }
    else {
      meal = meals.find((meal) => meal.idMeal == idMeal)
    }
    setSelectedMeal(meal);
    setShowModel(true);
  }
  const closeModel = () => {
    setShowModel(false)
  }

  const addTofavorites = (idMeal) => {
    console.log("adding to favorites")
    const meal = meals.find((meal) => meal.idMeal == idMeal)
    const alreadyFav = fevorites.find((meal) => meal.idMeal == idMeal)
    if (alreadyFav) return;
    const newFevorites = [...fevorites, meal];
    setFevorites(newFevorites)
    localStorage.setItem("fevorites", JSON.stringify(newFevorites))
  }

  const removeFromfavorites = (idMeal) => {
    const newFevorites = fevorites.filter((meal) => meal.idMeal !== idMeal)
    setFevorites(newFevorites);
    localStorage.setItem("fevorites", JSON.stringify(newFevorites))
  }

  useEffect(() => {
    fetchMeals(allMeals)
  }, [])
  useEffect(() => {
    if (!searchTxt) return
    fetchMeals(`${allMeals}${searchTxt}`)
  }, [searchTxt])

  useEffect(() => {
    console.log(fevorites)
  }, [fevorites])


  return (
    <AppContext.Provider value={{ meals, loading, setSearchTxt, fetchRandam, showModel, selectedMeal, selectMeal, closeModel, addTofavorites, fevorites, removeFromfavorites }}>
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }