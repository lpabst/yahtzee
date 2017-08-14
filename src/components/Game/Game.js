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
      showAreYouSure: false,
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
      diceOnTable: [6, 6, 6, 6, 6],
      rollNum: 1,
      userScoreSelection: ''
    }

    this.assertSelection = this.assertSelection.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.selectScore = this.selectScore.bind(this);
    this.rollDice = this.rollDice.bind(this);
    this.setDiceAside = this.setDiceAside.bind(this);
    this.returnDiceToTable = this.returnDiceToTable.bind(this);
  }

  assertSelection(){
    let num = this.state.userScoreSelection
    console.log(num) //THIS IS WORKING, NOW WE DO A SWITCH AND PATCH BUGS
    this.closeModal();
  }

  closeModal(){
    this.setState({
      showAreYouSure: false
    })
  }

  selectScore(num){
    if (this.state.rollNum <= 1){
      return alert('Please roll the dice first by clicking on the cup')
    }
    this.setState({
      showAreYouSure: true,
      userScoreSelection: num
    })
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
      alert('Please select a scoring option first by clicking on the scoresheet')
    }
  }

  setDiceAside(index){
    if (this.state.rollNum <= 1){
      return alert('Please roll the dice first by clicking on the cup')
    }
    let num = this.state.diceOnTable[index];
    let diceOnTable = this.state.diceOnTable.slice()
    let savedDice = this.state.savedDice.slice();
    diceOnTable.splice(index, 1);
    savedDice.push(num);
    this.setState({
      savedDice: savedDice,
      diceOnTable: diceOnTable
    })
  }

  returnDiceToTable(index){
    let num = this.state.savedDice[index];
    console.log(num)
    let savedDice = this.state.savedDice.slice();
    let diceOnTable = this.state.diceOnTable.slice();
    savedDice.splice(index, 1);
    diceOnTable.push(num);
    this.setState({
      savedDice: savedDice,
      diceOnTable: diceOnTable
    })
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

    let areYouSure = null;
    if (this.state.showAreYouSure){
      areYouSure =  <div className='are_you_sure'>
                      <p>Are You Sure?</p>
                      <button onClick={ this.assertSelection } >Yes</button>
                      <button onClick={ this.closeModal } >No</button>
                    </div>
    }else{
      areYouSure = null;
    }

    let rollNum = this.state.rollNum;
    let fontSize = {
      fontSize: '36px'
    }
    if (rollNum > 3){
      rollNum = 'Please select a scoring option from the scoresheet'
      fontSize = {
        fontSize: '16px',
        lineHeight: '16px'
      }
    }

    return (
      <div className="game">

        { areYouSure }

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
        selectScore={this.selectScore}
        />

        <Board 
        diceOnTable={ this.state.diceOnTable }
        savedDice={ this.state.savedDice } 
        setDiceAside={ this.setDiceAside }
        returnDiceToTable={ this.returnDiceToTable }
        />

        <img id='cup' src={ cup } onClick={ this.rollDice } alt='yahtzee dice cup' />

        <h4 className='roll_number' style={ fontSize }>Roll: { rollNum }</h4>

      </div>
    );
  }
}


export default Game;