import React, { useContext } from 'react';
import classes from './ColorCards.module.scss';

import { SelectionContext } from '../../shared/context/SelectionContext';

import ColorCard from './ColorCard/ColorCard';

const ColorCards = () => {
    const selection = useContext(SelectionContext)
    const renderColorCards = () => {
        const cards = [];
        for (let i = 0; i < selection.resultsPerPage; i++) {
            const j = i + ((selection.page - 1) * selection.resultsPerPage);
            if (j >= 15) break;
            cards.push((
                <ColorCard
                    key={j}
                    name={selection.color.colors[j].name.value} 
                    hex={selection.color.colors[j].hex.value} 
                    rgb={selection.color.colors[j].rgb.value} />
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