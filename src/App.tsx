import './App.css';

import React, { useEffect, useState, ChangeEvent } from 'react';

import { CardList } from './components/card-list/cardList';
import { SearchBox } from './components/search-box/SearchBox';
import { Monster } from './interfaces/monster.interface';

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');

  const getMonsters = async () => {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();

    setMonsters(response);
  };

  useEffect(() => {
    getMonsters();
  }, [monsters]);

  const onSearchChange = (event: ChangeEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    setSearchField(target.value);
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()),
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
