import React, { Component } from 'react';
import dice from './../../../img/dice.png';
import './Board.css';


class Board extends Component {

  render() {
    return (
      <div className='playing_area'>

        <div className='dice_holding_area'>
          <div className='dice_hole'></div>
          <div className='dice_hole'></div>
          <div className='dice_hole'></div>
          <div className='dice_hole'></div>
          <div className='dice_hole'></div>
        </div>

        <div className="board">
          <div className='single_die one'></div>
          <div className='single_die two'></div>
          <div className='single_die three'></div>
          <div className='single_die four'></div>
          <div className='single_die five'></div>
        </div>

      </div>
    );
  }
}


export default Board;