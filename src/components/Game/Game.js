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
    let finalDice = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }

    for (var i = 0; i < 5; i ++){
      if (this.state.diceOnTable[i]){
        finalDice[this.state.diceOnTable[i]] ++
      }
      if (this.state.savedDice[i]){
        finalDice[this.state.savedDice[i]] ++
      }
    }
    
    let diceTotal = finalDice[1]+finalDice[2]*2+finalDice[3]*3+finalDice[4]*4+finalDice[5]*5+finalDice[6]*6

    switch (num){
      case 1:
        this.setState({
          ones: finalDice[1]
        })
        break;
      case 2:
        this.setState({
          twos: finalDice[2]*2
        })
        break;
      case 3:
        this.setState({
          threes: finalDice[3]*3
        })
        break;
      case 4:
        this.setState({
          fours: finalDice[4]*4
        })
        break;
      case 5:
        this.setState({
          fives: finalDice[5]*5
        })
        break;
      case 6:
        this.setState({
          sixes: finalDice[6]*6
        })
        break;
      case 7:
        let threeKindScore = 0;
        for (var key in finalDice){
          if (finalDice[key] >= 3){
            threeKindScore = diceTotal
          }
        }
        this.setState({
          threeKind: threeKindScore
        })
        break;
      case 8:
        let fourKindScore = 0;
        for (var fkkey in finalDice){
          if (finalDice[fkkey] >= 4){
            fourKindScore = diceTotal
          }
        }
        this.setState({
          fourKind: fourKindScore
        })
        break;
      case 25:
        let fullhouseScore = 0;
        for (var fhkey in finalDice){
          if (finalDice[fhkey] === 3){
            for (var fhkey2 in finalDice){
              if (finalDice[fhkey2] === 2){
                fullhouseScore = 25;
              }
            }
          }
        }
        this.setState({
          fullhouse: fullhouseScore
        })
        break;
      case 30:
        let smallStraightScore = 0;
        if ((finalDice[1] >= 1 && finalDice[2] >= 1 && finalDice[3] >= 1 && finalDice[4] >= 1) || (finalDice[2] >= 1 && finalDice[3] >= 1 && finalDice[4] >= 1 && finalDice[5] >= 1) || (finalDice[3] >= 1 && finalDice[4] >= 1 && finalDice[5] >= 1 && finalDice[6] >= 1) ){
          smallStraightScore = 30;
        }
        this.setState({
          smallStraight: smallStraightScore
        })
        break;
      case 40:
        let largeStraightScore = 0;
        if ((finalDice[1] === 1 && finalDice[2] === 1 && finalDice[3] === 1 && finalDice[4] === 1 && finalDice[5] === 1) || ((finalDice[2] === 1 && finalDice[3] === 1 && finalDice[4] === 1 && finalDice[5] === 1 && finalDice[6] === 1))){
          largeStraightScore = 40;
        }
        this.setState({
          largeStraight: largeStraightScore
        })
        break;
      case 51:
        this.setState({
          chance: diceTotal
        })
        break;
      default:
      console.log('default switch')
    }
    this.setState({
      rollNum: 1,
      diceOnTable: [...this.state.diceOnTable, ...this.state.savedDice],
      savedDice: []
    })
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
    let rollStyles = {
      fontSize: '36px'
    }
    if (rollNum > 3){
      rollNum = 'Please select a scoring option from the scoresheet'
      rollStyles = {
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

        <h4 className='roll_number' style={ rollStyles }>Roll: { rollNum }</h4>

      </div>
    );
  }
}


export default Game;