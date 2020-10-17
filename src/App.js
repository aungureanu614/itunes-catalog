import React, {useState} from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Card } from './Components/Card';


function App() {
  const [display, setDisplay] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      <div className="Header-container">
        <h3 className="App-header">iTunes Search</h3>
        <Search setIsSearching={setIsSearching} displayResults={searchResults => setDisplay(searchResults)} placeholderText="Search iTunes..."/>
      </div>
      {isSearching ? <div>Searching...</div> : <Card info={display} />}
    </div>
  );
}

export default App;
