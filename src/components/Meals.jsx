import { useGlobalContext } from '../Context'
import { BsHandThumbsUp } from 'react-icons/bs'
const Meals = () => {
  const { meals, loading, selectMeal, addTofavorites } = useGlobalContext()
  if (loading) {
    return <section className="section">
      <h5>Loading...</h5>
    </section>
  }
  if (meals.length < 1) {
    return <section className='section'>
      <h5>there is no result available please try agin</h5>
    </section>
  }
  return (
    <section className='section-center'>
      {
        meals.map((meals) => {
          const { idMeal, strMeal: title, strMealThumb: image } = meals
          return (
            <article key={idMeal} className='single-meal' >
              <img src={image} alt='image' className='img' onClick={() => selectMeal(idMeal, false)} />
              <footer>
                <h4>{title}</h4>
                <button className='like-btn' onClick={() => addTofavorites(idMeal)}><BsHandThumbsUp /></button>
              </footer>
            </article>
          )
        })
      }

    </section>
  )
}
export default Meals