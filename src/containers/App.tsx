import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Card from '../components/Card/Card';
import CardList from '../components/CardList/CardList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Github profiles</h1>
      </header>


        <CardList />
    </div>
  );
};

export default App;
