import React, { Component } from 'react';
import pencil from './../../../img/pencil.png';
import './Scoresheet.css';


class Scoresheet extends Component {

  render() {
    return (
      <div className="scoresheet">

          <img className='pencil' src={ pencil } />

          <h2>Scoresheet</h2>

          <h3>Upper</h3>
          <table>
            <tr>
              <td>1</td>
              <td>{ this.props.ones }</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{ this.props.twos }</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{ this.props.threes }</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{ this.props.fours }</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{ this.props.fives }</td>
            </tr>
            <tr>
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
          </table>

          <h3>Lower</h3> 
          <table>
            <tr>
              <td>3-of-a-kind</td>
              <td>{ this.props.threeKind }</td>
            </tr>
            <tr>
              <td>4-of-a-kind</td>
              <td>{ this.props.fourKind }</td>
            </tr>
            <tr>
              <td>Full House</td>
              <td>{ this.props.fullhouse }</td>
            </tr>
            <tr>
              <td>Small Straight</td>
              <td>{ this.props.smallStraight }</td>
            </tr>
            <tr>
              <td>Large Straight</td>
              <td>{ this.props.largeStraight }</td>
            </tr>
            <tr>
              <td>Yahtzee</td>
              <td>{ this.props.yahtzee }</td>
            </tr>
            <tr>
              <td>Chance</td>
              <td>{ this.props.chance }</td>
            </tr>
            <tr className='totals'>
              <td>Lower Total</td>
              <td>{ this.props.lowerTotal }</td>
            </tr>
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