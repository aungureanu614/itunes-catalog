import React  from 'react';
import { Item } from '../Item';
import styles from './Card.module.css';

export const Card = ({info}) => {
  return(
    <div>
     {Object.entries(info).map(([title, items], idx) => (
      <div className={styles.Section} key={idx}>
        <h2 className={styles.SectionHeader}>{title.toUpperCase()}</h2>
        <div className={styles.SectionItems}>
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
      </div>
     ))}
    </div>
  )
};
