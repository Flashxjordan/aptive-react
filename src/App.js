import React from "react";
import {Routes , Route} from 'react-router-dom';
import Home from './Components/Home/Home.js'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
