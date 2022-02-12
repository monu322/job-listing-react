import React from "react";
import './App.css';

import Header from './components/header/header.component';
import Content from './components/content/content.component';

import { SearchTagsContext } from "./contexts/searchTagsContext";

function App() {

  const [searchTags, setSearchTags] = React.useState([]);

  const searchTagsContext = {searchTags, setSearchTags};


  return (
    <div className="App">

    <SearchTagsContext.Provider value={searchTagsContext}>
      <Header/>
      <Content/>
    </SearchTagsContext.Provider>  
    </div>
  );
}

export default App;
