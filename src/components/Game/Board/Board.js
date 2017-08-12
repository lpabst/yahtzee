import React, { Component } from 'react';
import dice from './../../../img/dice.png';
import './Board.css';


class Board extends Component {

  render() {
    return (
      <div className='playing_area'>

        <div className='dice_holding_area'>
          {
            this.props.savedDice.map( (die, i) => {
              if (die === 1){
                return <div className='saved_die one'></div>
              }else if (die === 2){
                return <div className='saved_die two'></div>
              }else if (die === 3){
                return <div className='saved_die three'></div>
              }else if (die === 4){
                return <div className='saved_die four'></div>
              }else if (die === 5){
                return <div className='saved_die five'></div>
              }else if (die === 6){
                return <div className='saved_die six'></div>
              }else {
                return <div className='one'></div>
              }
            })
          }
        </div>

        <div className="board">
          {
            this.props.diceOnTable.map( (die, i) => {
              if (die === 1){
                return <div className='single_die one' key={i}></div>
              }else if (die === 2){
                return <div className='single_die two' key={i}></div>
              }else if (die === 3){
                return <div className='single_die three' key={i}></div>
              }else if (die === 4){
                return <div className='single_die four' key={i}></div>
              }else if (die === 5){
                return <div className='single_die five' key={i}></div>
              }else if (die === 6){
                return <div className='single_die six' key={i}></div>
              }else{
                return <div className='one' key={i}></div>
              }
            })
          }
        </div>

      </div>
    );
  }
}


export default Board;