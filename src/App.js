import React from 'react';
import GlobalState from './GlobalState'
import ShoppingItem from './shoppingItem'
import TopNav from './TopNav'
import './App.css';

function App() {
  return (
    <GlobalState>
      <TopNav />
      <ShoppingItem />
    </GlobalState>
  )
}

export default App;
