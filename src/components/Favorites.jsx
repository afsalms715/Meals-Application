import { useGlobalContext } from '../Context'

const Favorites = () => {
  const { fevorites, removeFromfavorites, selectMeal } = useGlobalContext()
  //console.log(useGlobalContext())
  console.log(fevorites)
  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorites-container'>
          {
            fevorites.map((meal) => {
              const{idMeal,strMealThumb:image}=meal
              return (
                <div className='favorites-item'>
                  <img src={image} alt='image' className='favorites-img img' onClick={()=>selectMeal(idMeal,true)}/>
                  <button className="remove-btn" onClick={()=>removeFromfavorites(idMeal)}>
                    remove
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
export default Favorites