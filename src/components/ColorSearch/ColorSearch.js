import React from 'react';
import classes from './ColorSearch.module.scss';

const ColorSearch = props => {

    return (
        <div className={classes.Box}>
            <h1 style={{padding: 0}}>{props.name}</h1>
            <h3>{props.rgb}</h3>
            <h3>{props.hex}</h3>
            <input className={classes.Searchbar} type="text" spellCheck="false" autoFocus placeholder="rgb or hex #" value={props.input} onChange={props.changed}/>
        </div>
    )
};

export default ColorSearch;