import React, { Component } from 'react';

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
          
        </div>

      </div>
    );
  }
}


export default Board;