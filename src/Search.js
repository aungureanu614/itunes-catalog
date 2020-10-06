import React, { useEffect, useState } from 'react';
import Card from './Card'

const Search = () => {
const [term, setTerm] = useState('');
const [searchResults, setSearchResults] = useState('');

const getTerm = (e) => {
  setTerm(e.target.value);
}


  useEffect(() => {
    //TODO: create a debounce hook and use it on searching
    const getMedia = async() => {
      if(term.length >= 3) {
        const media = await fetch(`/api/search?term=${term}`);
        const mediaResult = await media.json();
        setSearchResults(mediaResult)
      }
    }
    getMedia();
    
  },[term]);
  // is it good for card to be here or should it be in App.js?
  return(
    <div>
      <input type="text" placeholder="Search term" onChange={getTerm}></input>
      <Card info={searchResults} />
    </div>
  )
};

export default Search;