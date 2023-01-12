# Rick-Morty Create React App
## github link
## https://github.com/sdmantha/Rick-and-Morty-react
## rick and morty api link
## https://rickandmortyapi.com/api/character
## netlify link
## 

This project was bootstrapped with [Create React App]

## Available Scripts

 ---
 I built a website with React and deployed it on netlify using an API acquired from the internet and used useEffect and useState from after importing REACT. Additionally, found a dataset online, pull data from it, and use this retrieved data to build my own model and seed my database.
 
### Technical Requirements
•Pick one UI Pattern and one API and combine the two. The data to populate the UI Pattern should come from the API. When the user loads the page, they should see the data from the API load into the UI pattern on the screen.

----
#### Steps
<img src="How-directory-should-look.png" alt="How-directory-should-look" width="200"/>

• Create a New folder and download the following

    •In terminal
        Create Directory
            npx create-react-app whateverTitleYouWantToNameTheFolder
        Open react in the web
            npm start
    •Clear code in App.js, App.css
        -Create Nav.jsx and a Character.jsx (make sure the first letter of the word is capitalized in .jsx folders)
        -import react in Nav.jsx file then useEffect and useState from react, in the App.js folder
        -the Nav.jsx file   
            is just the navigation folder that has a function to show set up of the "html" part of the project
        -the Character.jsx file
            is the file with the function of the Character and to show the set up of the "html" part of the project

---
## Below is the code explained in the project of each folder that was used

### App.js
``` js
//need to import css to make visual changes to the document 
import './App.css'
//need to import useEffect and useState from react (url for definitions of the useEffect and useState https://medium.com/recraftrelic/usestate-and-useeffect-explained-cdb5dc252baf )
import { useEffect, useState } from 'react'
//import nav because in the return we have the nav we want to show up on the screen 
import Nav from './Nav.jsx'




//Below will be the function to make all of the characters to show up with the pictures and all the information (we need constants for each character, characters (ea. individual) and a description or could do toggle (for the modal toggle to make sure you can select individual characters to pop their description up))
function App (){
  const [description,setDescription]= useState(false)
  //below, we did a character (with no  's') bc when you call the toggle you want it to only open the one character you want it to open 
  const [character, setCharacter] = useState ({})
  const [characters,setCharacters] = useState([])

  //the useEffect makes a change whenever something new pops up on the page (when your page loads, the content load)
    useEffect(()=> {
      apiCall ()
      //the hard closed bracket, makes sure the page fire once and only once. If thres something in there then the thing will fire until whats in the bracket changes
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
      // created a key so you dont get the error in the console. The onClick for each character was also added here with the handleclikc
      <div className= "Character-container" onClick={() => handleClick(character.image)} key= {index} >
        {/* created a new div for the images so when you click on it, it shows up */}
          {/* this onclick shows the display function in line 20 and each picture has it's own image in the .image */}
          <img className="Character-Name" src = {character.image} />
          {/* this will display the name of the character in the api */}
          <h3>{character.name}</h3>
        </div>
    ))} 
    </div>
        {/* turnary was created with the pictures  */}
        {description ?
        <div className='modal'>
          {/* make sure the api doesn't have any other nested key values, arrays, or object and make sure you call it if you want it (these are all seperated to show what information we want displayed, there are more values to add but I only added these*/}
          <div className='modal-content'>
          <p>Life Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
         <p>Origin: {character.origin.name}</p>
         <p>Location: {character.location.name}</p>
       </div>
       </div>
      //  the null is apart of the ternary statement and says if the description isnt activated then the description wont show (if else statement)
        : null
        };
      </div>
    );
};

export default App;


```
### Character.jsx

```js
import './App.css';

function Character() {
    return (
      <div>
        <nav>
          <h1>Rick and Morty</h1>
        </nav>
      </div>
    );
  }
  
  export default Character;
```

Nav.jsx

```js

import React from 'react'


function Nav (){
    return(
        <nav className='TitleName'>
            <h1> Rick and Morty</h1>
            {/* <button>Characters</button> */}
            <h2>Characters</h2>
        </nav>
    )
}

export default Nav
```

### App.css
```js

.App{
  color:#90d5c4;
  font-size: 17.99px;
}

body {
  background-color: #0e251f;
}
.Character-container{
  margin-left: 50px;
  margin-right: 30px
}
.container{
  right: 100px;
  left: 500px;
  color: #95d0c1;
  font-family: 'Great Vibes';
  
  
}
h3{
  text-align: center;
}
h2{
  font-size: 40px;
  background-color: aliceblue;
  border-radius: 98%;
  text-align: center;
}

.image{
  border-radius: 50px;
}


.container{
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      ". . ."
      ". . ."
      ". . ."; 
}

.modal {
    position: fixed; /* Stay in place */
    left: 0;
    top: 0;
    bottom: 30px;
   width: 100%;
   height:  100%;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); 
}

.modal-content{
  border-radius: 20%;
  margin-top: 20px;
  text-align: center;
  color: white;
  background-color: #4fb04f;
  opacity: .9; 
  position: absolute;
  left: 50%;
  top: 50%;
  height: 45vh;
  width: 45vw;
  transform: translate(-50%, -50%);
  font-family:Arial, Helvetica, sans-serif;
  font-size: 23px;

}


.TitleName{
  font-size: 300 cm;
  text-align: center;
  
}

.Character-container{
  border-radius: 50px;
}

Nav{
  background-image: url("./pictures/lmqrkt.jpg");
  
  
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
 
  
  

  font-size: 3em;
  border-radius: 10%;
  font-family: 'Get Schwifty';
  color: #08BAE3;
  z-index: 50;
  -webkit-text-stroke: 1px rgba(0,0,0,0.5);
}


@font-face {
  font-family: 'Get Schwifty';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3089507/get-schwifty.woff') format('woff');
}

```



