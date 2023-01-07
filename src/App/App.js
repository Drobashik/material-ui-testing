import React, { useState } from 'react';
import { Header } from '../components/Header';
import { UserListContainer } from '../components/containers/UserListContainer';
import { CreateUserContainer } from '../components/containers/CreateUserContainer';
import { HomeContainer } from '../components/containers/HomeContainer';
import './App.css';

const componentsArray = [
  { selected: false, Component: HomeContainer, path: 'home' },
  { selected: true, Component: UserListContainer, path: 'users' },
  { selected: false, Component: CreateUserContainer, path: 'create user' },
]

function App() {
  const [components, setComponents] = useState(componentsArray);

  const changePageComponent = (chosenPath) => {
    setComponents(prevArrayObject => (
      prevArrayObject.map((object) => {
        object.selected = false;
        return object.path === chosenPath ? (
          {...object, selected: true}
        ) : (
          {...object}
        )
      })
    ))
  }

  return (
    <>
      <Header changePageComponent={changePageComponent} />
      {components.map(({ selected, Component, path }) => {
        return selected ? <Component key={path} /> : null
      })}
    </>
  );
}

export default App;
