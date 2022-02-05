import React from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola mundoooo" />



    </>
  );
}

export default App;
