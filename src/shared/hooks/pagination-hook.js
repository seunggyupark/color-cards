import { useState } from 'react';

export const usePagination = () => {
    const [resultsPerPage, setResultsPerPage] = useState(3);
    const [page, setPage] = useState(1);
    
    const changeResult = event => {
        setResultsPerPage(parseInt(event.currentTarget.value));
        setPage(1);
    }

    const changePage = event => setPage(parseInt(event.currentTarget.value));

    return { resultsPerPage, page, changeResult, changePage };
};