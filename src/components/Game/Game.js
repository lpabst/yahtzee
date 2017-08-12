import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scoresheet from './Scoresheet/Scoresheet.js';
import Board from './Board/Board.js';
import './Game.css';


class Game extends Component {

  render() {
    return (
      <div className="game">

        <Link className='link_rules' to='/rules'>Rules</Link>
        
        <Scoresheet />
        <Board />

      </div>
    );
  }
}


export default Game;