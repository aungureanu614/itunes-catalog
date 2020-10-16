import React, {useState} from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Card } from './Components/Card';


function App() {
  //TODO: style the whole app
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <Search displayResults={searchResults => setDisplay(searchResults)} />
      <Card info={display} />
    </div>
  );
}

export default App;
