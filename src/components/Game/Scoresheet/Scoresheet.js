import React, { Component } from 'react';
import pencil from './../../../img/pencil.png';
import './Scoresheet.css';


class Scoresheet extends Component {

  render() {
    return (
      <div className="scoresheet">

          <img className='pencil' src={ pencil } alt='a pencil' />

          <h2>Scoresheet</h2>

          <h3>Upper</h3>
          <table>
            <tbody>
              <tr onClick={() => this.props.selectScore(1) }>
                <td>1</td>
                <td>{ this.props.ones }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(2) }>
                <td>2</td>
                <td>{ this.props.twos }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(3) }>
                <td>3</td>
                <td>{ this.props.threes }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(4) }>
                <td>4</td>
                <td>{ this.props.fours }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(5) }>
                <td>5</td>
                <td>{ this.props.fives }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(6) }>
                <td>6</td>
                <td>{ this.props.sixes }</td>
              </tr>
              <tr className='totals'>
                <td>Bonus</td>
                <td>{ this.props.bonus }</td>
              </tr>
              <tr className='totals'>
                <td>Upper Total</td>
                <td>{ this.props.upperTotal }</td>
              </tr>
            </tbody>
          </table>

          <h3>Lower</h3> 
          <table>
            <tbody>
              <tr onClick={() => this.props.selectScore(7) }>
                <td>3-of-a-kind</td>
                <td>{ this.props.threeKind }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(8) }>
                <td>4-of-a-kind</td>
                <td>{ this.props.fourKind }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(25) }>
                <td>Full House</td>
                <td>{ this.props.fullhouse }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(30) }>
                <td>Small Straight</td>
                <td>{ this.props.smallStraight }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(40) }>
                <td>Large Straight</td>
                <td>{ this.props.largeStraight }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(50) }>
                <td>Yahtzee</td>
                <td>{ this.props.yahtzee }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(51) }>
                <td>Chance</td>
                <td>{ this.props.chance }</td>
              </tr>
              <tr className='totals'>
                <td>Lower Total</td>
                <td>{ this.props.lowerTotal }</td>
              </tr>
            </tbody>
          </table>

          <div className='total_div totals'>
            <h3>Grand Total</h3>
            <p>{this.props.upperTotal + this.props.lowerTotal}</p>
          </div>

      </div>
    );
  }
}


export default Scoresheet;