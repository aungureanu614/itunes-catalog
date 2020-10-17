import React from 'react';
import styles from './Item.module.css';

export const Item = ({artwork, name, genre, url}) => {
  //TODO: allow items to be marked as "favorites"
  return(
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img alt="album art" src={artwork}/>
      </a>
      <div>{name}</div>
      <div>{genre}</div>
    </div>
  )

}
