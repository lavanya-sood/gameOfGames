import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TicTacToe from './games/tictactoe/TicTacToe';
import Landing from './Landing';
import ground from './images/Ground.png';
import treesL from './images/TreesL.png';
import treesR from './images/TreesR.png';

function App() {
  return (
    <BrowserRouter>
      <div id="homepage">
        <h1> Game of Games </h1>
        <div id="mainsection">
          <Routes>
            <Route path="/tictactoe" element={<TicTacToe />} /> 
            <Route path="/" element={<Landing />} /> 
          </Routes>
        </div>
        <div id="background">
          <img src={ground} id="ground"/>
          <div id="trees">
            <img src={treesL} id="treesL"/>
            <img src={treesR} id="treesR"/>
          </div>
          
        </div>
        
      </div>
       
    </BrowserRouter>
   
  );
}

export default App;
