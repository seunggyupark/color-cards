import React from 'react';
import classes from './ColorCards.module.scss';
import ColorCard from './ColorCard/ColorCard';

const ColorCards = props => {

    const renderColorCards = () => {
        const cards = [];
        for (let i = 0; i < props.resultsPerPage; i++) {
            const j = i + ((props.page - 1) * props.resultsPerPage);
            if (j >= 15) break;
            cards.push((
                <ColorCard
                    key={j}
                    name={props.colors ? props.colors[j].name.value : "Salmon"} 
                    hex={props.colors ? props.colors[j].hex.value : "#FF9AA2"} 
                    rgb={props.colors ? props.colors[j].rgb.value : "rgb(255, 154, 162)"} />
            ))
        }
        return cards;
    }

    return (
        <div className={classes.CardBox}>
            {renderColorCards()}
        </div>
    )
};

export default ColorCards;