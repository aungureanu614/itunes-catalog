import React, { useEffect, useState } from 'react';
import {useDebounce} from '../../Hooks/useDebounce';
import styles from './Search.module.css';

export const Search = ({ displayResults, setIsSearching, placeholderText }) => {
  const [term, setTerm] = useState('');

  const debouncedSearchTerm = useDebounce(term, 500);

  const getTerm = (e) => {
    setTerm(e.target.value);
  }

  const getMedia = async(term) => {
    try {
      const media = await fetch(`/api/search?term=${term}`);
      return await media.json();
    } catch(error) {
      console.error(error);
    }
  };

    useEffect(() => {
      if(term.length >= 3 && debouncedSearchTerm) {
        setIsSearching(true);
        const getResults = async() => {
        const mediaResult = await getMedia(debouncedSearchTerm);
          setIsSearching(false);
          displayResults(mediaResult);
        }
        getResults();
      } else {
        displayResults('');
      }
    },[debouncedSearchTerm]);

    return(
      <>
        <input className={styles.Search} type="text" placeholder={placeholderText} onChange={getTerm}></input>
      </>
    )
};
