import { useState } from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
  const { setSearchTxt, fetchRandam } = useGlobalContext()
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    setSearchTxt(text)
  }
  const handleRandom = () => {
    setSearchTxt('')
    setText('')
    fetchRandam()
  }
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} className='form-input' placeholder='type your Favorate Meals' />
        <input type='submit' className='btn' value='search' />
        <input type='button' className='btn btn-hipster' value='surprice me' onClick={handleRandom} />
      </form>
    </header>
  )
}
export default Search