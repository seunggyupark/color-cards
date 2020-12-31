import React from 'react';
import classes from './ColorGenerator.module.scss';

const ColorGenerator = props => {
    return (
        <button className={classes.DiceButton} onClick={props.colorGeneratorHandler}><ion-icon name="dice-outline" /></button>
    );
};

export default ColorGenerator