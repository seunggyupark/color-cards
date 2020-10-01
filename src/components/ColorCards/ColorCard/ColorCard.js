import React from 'react';
import classes from './ColorCard.module.scss';

const ColorCard = props => (
    <div style={{backgroundColor: props.hex}} className={classes.Card}>
        <h1>{props.name}</h1>
        <h3>{props.rgb}</h3>
        <h3>{props.hex}</h3>
    </div>
)

export default ColorCard;