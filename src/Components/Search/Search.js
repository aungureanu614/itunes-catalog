import React, { useEffect, useState } from 'react';
import {useDebounce} from '../../Hooks/useDebounce';

export const Search = ({ displayResults }) => {
const [term, setTerm] = useState('');
const [isSearching, setIsSearching] = useState(false);
const debouncedSearchTerm = useDebounce(term, 500);

const getTerm = (e) => {
  setTerm(e.target.value);
}

  useEffect(() => {
    //TODO: create a debounce hook and use it on searching
    const getMedia = async() => {
      if(term.length >= 3) {
        const media = await fetch(`/api/search?term=${term}`);
        const mediaResult = await media.json();
        displayResults(mediaResult);
      } else {
        displayResults('');
      }
    }
    getMedia();
    
  },[term]);

  return(
    <div>
      <input type="text" placeholder="Search term" onChange={getTerm}></input>
    </div>
  )
};
