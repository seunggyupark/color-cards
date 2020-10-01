import React, { useState } from 'react';
import validator from 'validator';
import axios from 'axios';
import classes from './App.module.scss';
import ColorSearch from './components/ColorSearch/ColorSearch';
import ColorCards from './components/ColorCards/ColorCards';

function App() {

  const [color, setColor] = useState(null);
  const [input, setInput] = useState("");

  const handlerInput = event => {
    let input = event.target.value;
    setInput(input);

    let call = "";
    input = input.replaceAll(' ', '');
    if (validator.isHexColor(input)) {
      input = input.replace('#', '');
      call = `https://www.thecolorapi.com/scheme?hex=${input}&mode=complement&count=3`;
    } else if (validator.isRgbColor(input, false)) {
      call = `https://www.thecolorapi.com/scheme?rgb=${input}&mode=complement&count=3`;
    }
    if (call) {
      axios.get(call)
      .then(response => {
        setColor(response.data)
      });
    }
  }

  const hex = color ? color.seed.hex.value : "#f9f9f9"

  return (
    <div className={classes.App} style={{background: hex}}>
      <ColorSearch 
      input={input}
      changed={handlerInput}
      name={color ? color.seed.name.value : "Alabaster"} 
      hex={hex} 
      rgb={color ? color.seed.rgb.value : "rgb(249,249,249)"}/>
      <ColorCards colors={color ? color.colors : null}/>
    </div>
  );
}

export default App;
