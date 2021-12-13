import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TicTacToe from './games/tictactoe/TicTacToe';
import Slide from './games/slide/Slide';
import Snake from './games/snake/Snake';
import Breakout from './games/breakout/Breakout';
import Hangman from './games/hangman/Hangman';
import Landing from './Landing';
import Navbar from './Navbar';
import ground from './images/Ground2.png';


function App() {
  return (
    <BrowserRouter>
      <div id="homepage">
        <h1> Game of Games </h1>
        <Navbar/>
        <div id="mainsection">
          <Routes>
            <Route path="/tictactoe" element={<TicTacToe />} /> 
            <Route path="/snake" element={<Snake />} /> 
            <Route path="/breakout" element={<Breakout />} /> 
            <Route path="/hangman" element={<Hangman />} /> 
            <Route path="/slide" element={<Slide />} /> 
            <Route path="/" element={<Landing />} /> 
          </Routes>
        </div>
        <div id="background">
          <img src={ground} id="ground"/>
          
        </div>
        
      </div>
       
    </BrowserRouter>
   
  );
}

export default App;
