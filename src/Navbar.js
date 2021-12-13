import React from 'react';
import { useParams, Link, withRouter } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navbar">
            <Link to='/tictactoe' class="navlink" > Tic Tac Toe </Link>
            <Link to='/hangman' class="navlink" > Hangman </Link>
            <Link to='/snake' class="navlink" > Snake </Link>
            <Link to='/breakout' class="navlink" > Breakout </Link>
            <Link to='/slide' class="navlink" > Slide </Link>
        </div>
    );
};

export default Navbar;