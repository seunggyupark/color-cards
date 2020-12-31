import React, { useState, useContext } from 'react';
import classes from './ColorSearch.module.scss';
import validator from 'validator';
import axios from 'axios';

import { SelectionContext } from '../../shared/context/SelectionContext';

import ColorCard from '../ColorCards/ColorCard/ColorCard';
import ColorGenerator from './ColorGenerator/ColorGenerator';

const ColorSearch = props => {
    const selection = useContext(SelectionContext);
    const [input, setInput] = useState("rgb(236, 126, 135)");
    const [choice, setChoice] = useState("analogic-complement");

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
            console.log(response.data);
            props.setColor(response.data)
            })
        }
    }

    const handlerInput = event => {
        let userInput = event.target.value;
        setInput(userInput);
        changeColor(userInput, choice);
    }

    const handlerChoiceInput = event => {
        setChoice(event.target.value);
        changeColor(input, event.target.value);
    }

    return (
        <div className={classes.Box}>
            <ColorCard 
                hex={selection.color.seed.hex.value}
                name={selection.color.seed.name.value}
                rgb={selection.color.seed.rgb.value} />
            <div className={classes.SearchbarContainer}>
                <select defaultValue="analogic-complement" className={classes.Dropdown} onChange={handlerChoiceInput}>
                    <option value="monochrome">monochrome</option>
                    <option value="monochrome-dark">monochrome-dark</option>
                    <option value="monochrome-light">monochrome-light</option>
                    <option value="analogic">analogic</option>
                    <option value="complement">complement</option>
                    <option value="analogic-complement">analogic-complement</option>
                    <option value="triad">triad</option>
                    <option value="quad">quad</option>
                </select>
                <input 
                className={classes.Searchbar} 
                type="text" spellCheck="false" 
                autoFocus 
                placeholder="rgb or hex #" 
                onChange={handlerInput} />
            </div>
            <ColorGenerator />
        </div>
    )
};

export default ColorSearch;