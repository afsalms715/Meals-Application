import './App.css'
import Favorites from './components/Favorites'
import Meals from './components/Meals'
import Model from './components/Model'
import Search from './components/Search'
import { useGlobalContext } from './Context'

export default function App() {
  const { showModel, fevorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {fevorites.length > 0 && <Favorites />}
      <Meals />
      {showModel && <Model />}
    </main>
  )
}
