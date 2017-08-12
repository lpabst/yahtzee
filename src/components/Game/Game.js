import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Scoresheet from './Scoresheet/Scoresheet.js';
import Board from './Board/Board.js';
import cup from './../../img/cup.png';
import './Game.css';


class Game extends Component {

  constructor(props){
    super(props);

    this.state = {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      bonus: 0,
      threeKind: 0,
      fourKind: 0,
      fullhouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
      savedDice: [],
      diceOnTable: [1, 1, 1, 1, 1],
      rollNum: 1
    }

    this.rollDice = this.rollDice.bind(this);
  }

  rollDice(){
    if (this.state.rollNum === 1){
      this.setState({
        savedDice: []
      })
    }
    if (this.state.rollNum <= 3){
      let { diceOnTable } = this.state;
      let cup = document.getElementById('cup');
      cup.style.animation = 'rollDice 2s';

      for (let i = 0; i < diceOnTable.length; i ++){
        let r = Math.floor( Math.random()*6) + 1;
        diceOnTable[i] = r;
      }
      this.setState({
        diceOnTable: diceOnTable,
        rollNum: this.state.rollNum + 1
      })
    }else if (this.state.rollNum > 3){
      alert('Please select a scoring option')
    }
  }

  render() {

    let {
      ones,
      twos,
      threes,
      fours,
      fives,
      sixes,
      bonus,
      threeKind,
      fourKind,
      fullhouse,
      smallStraight,
      largeStraight,
      yahtzee,
      chance,
    } = this.state

    return (
      <div className="game">

        <Link className='link_rules' to='/rules'>Rules</Link>
        
        <Scoresheet ones={ones}
        twos={twos}
        threes={threes}
        fours={fours}
        fives={fives}
        sixes={sixes}
        bonus={bonus}
        upperTotal={ones+twos+threes+fours+fives+sixes+bonus}
        threeKind={threeKind}
        fourKind={fourKind}
        fullhouse={fullhouse}
        smallStraight={smallStraight}
        largeStraight={largeStraight}
        yahtzee={yahtzee}
        chance={chance}
        lowerTotal={threeKind+fourKind+fullhouse+smallStraight+largeStraight+yahtzee+chance}
        />

        <Board 
        diceOnTable={ this.state.diceOnTable }
        savedDice={ this.state.savedDice } 
        />

        <img id='cup' src={ cup } onClick={ this.rollDice } />

      </div>
    );
  }
}


export default Game;