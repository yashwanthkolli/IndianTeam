import React from 'react'

import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardList=(props)=> (
        <div className='card-list'>
            {props.players.map(player => (
                <Card key={player.id} player={player} />
            ))}
        </div>
)
