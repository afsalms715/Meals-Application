import { useGlobalContext } from '../Context'

const Model = () => {
  const { selectedMeal, closeModel } = useGlobalContext()
  const{strMeal:title,strMealThumb:image,strInstructions:text,strSource}=selectedMeal;
  return (
    <aside className='model-overlay'>
      <div className="model-container">
        <img src={image} alt={title} className='img model-img'/>
        <div className='model-content'>
        <h3>{title}</h3>
        <p>instractions</p>
        <p>{text}</p>
        <a href={strSource} target='_blank'>source</a> <br/> 
         <div className='model-btn'>
            <button className='btn close-btn' onClick={closeModel}>close</button>
          </div> 
        </div>       
      </div>
    </aside>
  )
}
export default Model