import React from 'react';

import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <h1>{props.player.number}</h1>
        <h2>{props.player.name}</h2>
        <p>{props.player.email}</p>
    </div>
)