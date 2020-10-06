import React  from 'react';
import Item from './Item'

const Card = ({info}) => {
  return(
    <div>
     {Object.entries(info).map(([title, items], idx) => (
      <div key={idx}>
        <div>Section: {title}</div>
        {items.map((item, key) => {
          const {
            artwork,
            name,
            genre,
            url
          } = item;
          return (<Item key={key} artwork={artwork} name={name} genre={genre} url={url}/>)
        })}
      </div>
     ))}
    </div>
  )
};

export default Card;
