import React, { useState } from 'react';
import classes from './App.module.scss';

import { SelectionContext } from './shared/context/SelectionContext';
import { usePagination } from './shared/hooks/pagination-hook';
import { color as initialColor } from './shared/context/color';

import ColorSearch from './components/ColorSearch/ColorSearch';
import ColorCards from './components/ColorCards/ColorCards';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [color, setColor] = useState(initialColor);
  const { page, resultsPerPage, changePage, changeResult } = usePagination();

  return (
    <SelectionContext.Provider value={{ color, page, resultsPerPage }}>
      <div className={classes.App} style={{backgroundColor: color.seed.hex.value + "90"}}>
        <ColorSearch setColor={setColor} />
        <Pagination changePage={changePage} changeResult={changeResult}/>
        <ColorCards />
      </div>
    </SelectionContext.Provider>
  );
}

export default App;
