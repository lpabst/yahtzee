import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';


class Game extends Component {

  render() {
    return (
      <div className="game">

        <Link className='link_rules' to='/rules'>Rules</Link>
        
       

      </div>
    );
  }
}


export default Game;