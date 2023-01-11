import Character from './Character.jsx'
import './App.css'
import { useEffect, useState } from 'react'
import Nav from './Nav.jsx'

function App (){
  const [description,setDescription]= useState(false)
  //below, we did a character (with no  's') bc when you call the toggle you want it to only open the one character you want it to open 
  const [character, setCharacter] = useState ({})
  const [characters,setCharacters] = useState([])

  //the useEffect makes a change whenever something new pops up on the page (when your page loads, the content load)
    useEffect(()=> {
      apiCall ()
      //the closed bracket, makes sure the page fire once and only once. If thres something in there then the thing will fire until whats in the bracket changes
    }, [])

   //this func is just pulling up the json file
    function apiCall (){
      fetch("https://rickandmortyapi.com/api/character")
      //this changes whatever the file is in to json 
        .then((res)=> res.json())
        .then((data)=> setCharacters(data.results))
}

    function display() {
      //the prev is making sure you can click the picture and click it again so it goes back to how it was (basically unclick)
      setDescription(prev => !prev)
  }

    function handleClick(characterInfo){
      //we use character (without the 's') bc we only want the toggle to work when one character is selected
      setCharacter(characterInfo)
      display()
    }



return (
  //create a big div because you can only have one item inside of the return
  <div className="App">
    {/* created a nav to customize, when i want to add more bars to the top */}
    <Nav />
    {/* created another div, as the container so we can customize the other divs */}
    <div className="container" >
      {/* character.map goes itterates through the array and returns a new array with how you want it */}
    {characters.map((character, index) => (
      // created a key so you dont get the error in the console
      <div  key= {index} >
        {/* created a new div for the images so when you click on it, it shows up */}
        <div className= "images">
          {/* this onclick shows the display function in line 20 and each picture has it's own image in the .image */}
          <img onClick={display} src = {character.image} />
          {/* this will display the name of the character in the api */}
          <h3>{character.name}</h3>
        </div>
        {/* turnary was created with the pictures  */}
        {description ?
        <div>
          {/* make sure the api doesn't have any other nested key values, arrays, or object and make sure you call it if you want it (these are all seperated to show what information we want displayed, there are more values to add but I only added these*/}
          <p>Life Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
         <p>Origin: {character.origin.name}</p>
         <p>Location: {character.location.name}</p>
       </div>
      //  the null is apart of the ternary statement and says if the description isnt activated then the description wont show (if else statement)
        : null}
      </div>
    ))}
    </div>
  </div>
);

}

export default App;