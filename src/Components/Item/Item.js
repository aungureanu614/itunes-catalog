import React from 'react';

export const Item = ({artwork, name, genre, url}) => {
  //TODO: allow items to be marked as "favorites"
  return(
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img alt="album art" src={artwork}/>
      </a>
      <div>Name: {name}</div>
      <div>Genre: {genre}</div>
    </div>
  )

}
