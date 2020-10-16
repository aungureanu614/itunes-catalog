import React, {useState} from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Card } from './Components/Card';


function App() {
  //TODO: style the whole app
  const [display, setDisplay] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="App">
      <Search setIsSearching={setIsSearching} displayResults={searchResults => setDisplay(searchResults)} />
      {isSearching ? <div>Searching...</div> : <Card info={display} />}
    </div>
  );
}

export default App;
