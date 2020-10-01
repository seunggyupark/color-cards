import React from 'react';
import classes from './ColorCards.module.scss';
import ColorCard from './ColorCard/ColorCard';

const ColorCards = props => {



    return (
        <div className={classes.CardBox}>
            <ColorCard 
            name={props.colors ? props.colors[0].name.value : "Salmon"} 
            hex={props.colors ? props.colors[0].hex.value : "#FF9AA2"} 
            rgb={props.colors ? props.colors[0].rgb.value : "rgb(255, 154, 162)"} />

            <ColorCard 
            name={props.colors ? props.colors[1].name.value : "Caper"} 
            hex={props.colors ? props.colors[1].hex.value : "#D3E8B0"} 
            rgb={props.colors ? props.colors[1].rgb.value : "rgb(211, 232, 176)"} />

            <ColorCard 
            name={props.colors ? props.colors[2].name.value : "Regent St Blue"} 
            hex={props.colors ? props.colors[2].hex.value : "#9FC9E0"} 
            rgb={props.colors ? props.colors[2].rgb.value : "rgb(159, 201, 224)"} />
        </div>
    )
};

export default ColorCards;