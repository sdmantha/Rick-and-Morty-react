
import './App.css'
import { useEffect, useState } from 'react'
import Nav from './Nav.jsx'

function App (){
  const [description,setDescription]= useState(false)
  const [character, setCharacter] = useState ({})
  const [characters,setCharacters] = useState([])


    useEffect(()=> {
      apiCall ()
    }, [])

  function apiCall (){
      fetch("https://rickandmortyapi.com/api/character")
          .then((res)=> res.json())
          .then((data)=> setCharacters(data.results))
  }

  function display() {
      setDescription(prev => !prev)
  }

  function handleClick(characterInfo){
      setCharacter(characterInfo)
      display()
  }



  return (
      <div className="App">
          <Nav />
          <div className="container">
              {characters.map((character, index) => (
                <div className="Character-container" onClick={() => handleClick(character)} key={index}>
                    <img className='image'src={character.image} />
                    <div className="Character-Name">
                    <h3> {character.name} </h3>
                    </div>
                </div>
              )
              )
              }
          </div>
          


        {description ?
          <div className="modal">
            <div className="modal-content">
              <p>Status - {character.status}</p>
              <p>Species - {character.species}</p>
              <p>Gender - {character.gender}</p>
              <p>Origin - {character.origin.name}</p>
              <p>Location - {character.location.name}</p>
              <button onClick={display}>Close</button>
            </div>
          </div>
          :
          null
        };
      </div>
  );
};

export default App;