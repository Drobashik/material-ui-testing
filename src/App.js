import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { UserListContainer } from './components/containers/UserListContainer';

function App() {
  return (
    <>
      <Header />
      <UserListContainer />
    </>
  );
}

export default App;
