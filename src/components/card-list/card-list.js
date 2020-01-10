import React from 'react';
import './card-list.css';
import Card from '../card/card.js';

const CardList = (props) => {
    return(
    <div className='card-list'> 
        {props.monsters.map(monster => (
         <Card key={monster.id} monster={monster} />
        ))}
    </div>
)}


export default CardList;