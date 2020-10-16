import React, { useEffect, useState } from 'react';

export const Search = ({ displayResults }) => {
const [term, setTerm] = useState('');

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
