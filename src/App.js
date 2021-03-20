import React, { useState } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

const App = () => {
  const [players, setPlayers] = useState([
    {name:'Virat Kohli', email: 'viratkohli18@gmail.com', number: '18'},
    {name:'Rohit Sharma', email: 'rohitsharma45@gmail.com', number: '45'},
    {name:'Ravichandran Ashwin', email: 'rashwin99@gmail.com', number: '99'},
    {name:'Hardik Pandya', email: 'hardikpandya33@gmail.com', number: '33'},
    {name:'Shreyas Iyer', email: 'shreyasiyer41@gmail.com', number: '41'},
    {name:'Bhuvaneshwar Kumar', email: 'bhuvaneshwar15@gmail.com', number: '15'},
    {name:'Rishabh Pant', email: 'rishabhpant17@gmail.com', number: '17'},
    {name:'KL Rahul', email: 'klrahul1@gmail.com', number: '01'},
    {name:'Jasprit Bumrah', email: 'jaspritbumrah93@gmail.com', number: '93'},
    {name:'Washington Sundar', email: 'washingtonsundar55@gmail.com', number: '55'},
    {name:'Shikhar Dhawan', email: 'shikhardhawan42@gmail.com', number: '42'}
  ])

  const [searchField, setSearchField] = useState('')

  const handleChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <h1 className='title'>Indian Team</h1>
      <SearchBox
        placeholder='Search Player'
        handleChange={handleChange}
      />
      <CardList players={filteredPlayers} />
    </div>
  );
}

export default App;
