import React from 'react';
import classes from './ColorSearch.module.scss';

import ColorGenerator from './ColorGenerator/ColorGenerator';

const ColorSearch = props => {
    return (
        <div className={classes.Box}>
            <div style={{backgroundColor: props.hex}} className={classes.Card}>
                <h1>{props.name}</h1>
                <h3>{props.rgb}</h3>
                <h3>{props.hex}</h3>
            </div>
            <div className={classes.SearchbarContainer}>
                <select defaultValue="analogic-complement" className={classes.Dropdown} onChange={props.changedChoice}>
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
                value={props.input} 
                onChange={props.changed} />
            </div>
            <ColorGenerator />
        </div>
    )
};

export default ColorSearch;