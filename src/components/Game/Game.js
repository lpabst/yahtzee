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

        <Board />

        <img className='cup' src={ cup } />

      </div>
    );
  }
}


export default Game;