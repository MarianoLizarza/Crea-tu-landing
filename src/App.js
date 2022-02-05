import React from 'react'
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer'
import Clicker from './Components/Clicker/Clicker'
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola mundoooo" />
      <Clicker stock="10" />


    </>
  );
}

export default App;
