import {useState, useEffect} from 'react'
import Character from './Character'

type CharacterType = {
  id: number,
  name: string,
  image: string
}
function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    const getData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const json = await response.json();
      setCharacters(json.results)
    }
    getData()
  },[])
  return (
    <>
      <div>
        {characters.map((character)=>{
          return (
            <Character key={character.id} obj={character} />
          )
        })}
      </div>
    </>
  )
}

export default App
