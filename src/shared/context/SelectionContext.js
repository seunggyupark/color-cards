import { createContext } from 'react';

export const SelectionContext = createContext({
    color: null,
    page: null,
    resultsPerPage: null,
});
