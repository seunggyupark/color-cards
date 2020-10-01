import React, { useState, useEffect } from 'react';
import validator from 'validator';
import axios from 'axios';
import classes from './App.module.scss';
import ColorSearch from './components/ColorSearch/ColorSearch';
import ColorCards from './components/ColorCards/ColorCards';
import Pagination from './components/Pagination/Pagination';

function App() {

  const [color, setColor] = useState(null);
  const [input, setInput] = useState("");
  const [choice, setChoice] = useState("analogic-complement");
  const [resultsPerPage, setResultsPerPage] = useState(3);
  const [page, setPage] = useState(1);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  useEffect(() => {
    const randomRGB = `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`
    setInput(randomRGB);
    changeColor(randomRGB, choice);
  }, [])


  const changeColor = (userInput, option) => {
    let call = "";
    userInput = userInput.replaceAll(' ', '');
    if (validator.isHexColor(userInput)) {
      userInput = userInput.replace('#', '');
      call = `https://www.thecolorapi.com/scheme?hex=${userInput}&mode=${option}&count=15`;
    } else if (validator.isRgbColor(userInput, false)) {
      call = `https://www.thecolorapi.com/scheme?rgb=${userInput}&mode=${option}&count=15`;
    }
    if (call) {
      axios.get(call)
      .then(response => {
        setColor(response.data)
      });
    }
  }

  const handlerInput = event => {
    let userInput = event.target.value;
    setInput(userInput);
    changeColor(userInput, choice);
  }

  const handlerChoiceInput = event => {
    setChoice(event.target.value);
    let userInput = input;
    changeColor(userInput, event.target.value);
  }

  const handlerResultsPerPage = event => {
    setResultsPerPage(parseInt(event.currentTarget.value));
    setPage(1);
  }

  const handlerChangePage = event => {
    setPage(parseInt(event.currentTarget.value));
  }

  const hex = color ? color.seed.hex.value : "#f9f9f9"

  return (
    <div className={classes.App} style={{backgroundColor: hex + "90"}}>

      <ColorSearch 
      input={input}
      changed={handlerInput}
      name={color ? color.seed.name.value : "Alabaster"} 
      hex={hex} 
      rgb={color ? color.seed.rgb.value : "rgb(249,249,249)"}
      changedChoice={handlerChoiceInput}/>
      
      <Pagination 
      clickResults={handlerResultsPerPage}
      selectedResult={resultsPerPage}
      clickPage={handlerChangePage}
      selectedPage={page}/>
      
      <ColorCards 
      colors={color ? color.colors : null}
      resultsPerPage={resultsPerPage}
      page={page} />

    </div>
  );
}

export default App;
