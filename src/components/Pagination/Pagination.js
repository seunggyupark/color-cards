import React, { useContext } from 'react';
import classes from './Pagination.module.scss';

import { SelectionContext } from '../../shared/context/SelectionContext';

const SearchOptions = props => {
    const selection = useContext(SelectionContext);
    const renderPages = () => {
        const numPages = Math.ceil(15 / selection.resultsPerPage);
        const pages = [];
        for (let i = 1; i <= numPages; i++) {
            pages.push((<li key={i}><button className={selection.page === i ? classes.Selected : null} onClick={props.changePage} value={i}>{i}</button></li>));
        }

        return pages;
    }

    return (
        <div className={classes.ParentContainer}>
            <div className={classes.Container}>
                <ol className={classes.ResultsPerPage}>
                    <li><button className={selection.resultsPerPage === 3 ? classes.Selected : null} onClick={props.changeResult} value={3}>3</button></li>
                    <li><button className={selection.resultsPerPage === 5 ? classes.Selected : null} onClick={props.changeResult} value={5}>5</button></li>
                    <li><button className={selection.resultsPerPage === 10 ? classes.Selected : null} onClick={props.changeResult} value={10}>10</button></li>
                    <li><button className={selection.resultsPerPage === 15 ? classes.Selected : null} onClick={props.changeResult} value={15}>15</button></li>
                </ol>
                results per page
            </div>
            <div className={classes.Container}>
                <ol className={classes.Pagination}>
                    {renderPages()}
                </ol>
                pages
            </div>
        </div>
    )
};

export default SearchOptions
