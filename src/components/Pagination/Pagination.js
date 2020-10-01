import React from 'react';
import classes from './Pagination.module.scss';

const SearchOptions = props => {

    const renderPages = () => {
        const numPages = Math.ceil(15 / props.selectedResult);
        const pages = [];
        for (let i = 1; i <= numPages; i++) {
            pages.push((<li key={i}><button className={props.selectedPage === i ? classes.Selected : null} onClick={props.clickPage} value={i}>{i}</button></li>));
        }

        return pages;
    }



    return (
        <div className={classes.ParentContainer}>
            <div className={classes.Container}>
                <ol className={classes.ResultsPerPage}>
                    <li><button className={props.selectedResult === 3 ? classes.Selected : null} onClick={props.clickResults} value={3}>3</button></li>
                    <li><button className={props.selectedResult === 5 ? classes.Selected : null} onClick={props.clickResults} value={5}>5</button></li>
                    <li><button className={props.selectedResult === 10 ? classes.Selected : null} onClick={props.clickResults} value={10}>10</button></li>
                    <li><button className={props.selectedResult === 15 ? classes.Selected : null} onClick={props.clickResults} value={15}>15</button></li>
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
