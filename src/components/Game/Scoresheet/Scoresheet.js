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
                <td className='scoresheet_scores'>{ this.props.ones }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(2) }>
                <td>2</td>
                <td className='scoresheet_scores'>{ this.props.twos }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(3) }>
                <td>3</td>
                <td className='scoresheet_scores'>{ this.props.threes }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(4) }>
                <td>4</td>
                <td className='scoresheet_scores'>{ this.props.fours }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(5) }>
                <td>5</td>
                <td className='scoresheet_scores'>{ this.props.fives }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(6) }>
                <td>6</td>
                <td className='scoresheet_scores'>{ this.props.sixes }</td>
              </tr>
              <tr className='totals'>
                <td>Upper Total</td>
                <td className='scoresheet_scores'>{ this.props.upperTotal }</td>
              </tr>
              <tr className='totals'>
                <td>Bonus</td>
                <td className='scoresheet_scores'>{ this.props.bonus }</td>
              </tr>
            </tbody>
          </table>

          <h3>Lower</h3> 
          <table>
            <tbody>
              <tr onClick={() => this.props.selectScore(7) }>
                <td>3-of-a-kind</td>
                <td className='scoresheet_scores'>{ this.props.threeKind }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(8) }>
                <td>4-of-a-kind</td>
                <td className='scoresheet_scores'>{ this.props.fourKind }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(25) }>
                <td>Full House</td>
                <td className='scoresheet_scores'>{ this.props.fullhouse }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(30) }>
                <td>Small Straight</td>
                <td className='scoresheet_scores'>{ this.props.smallStraight }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(40) }>
                <td>Large Straight</td>
                <td className='scoresheet_scores'>{ this.props.largeStraight }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(50) }>
                <td>Yahtzee</td>
                <td className='scoresheet_scores'>{ this.props.yahtzee }</td>
              </tr>
              <tr onClick={() => this.props.selectScore(51) }>
                <td>Chance</td>
                <td className='scoresheet_scores'>{ this.props.chance }</td>
              </tr>
              <tr className='totals'>
                <td>Lower Total</td>
                <td className='scoresheet_scores'>{ this.props.lowerTotal }</td>
              </tr>
            </tbody>
          </table>

          <div className='total_div totals'>
            <h3>Grand Total</h3>
            <p className='scoresheet_scores'>{Number(this.props.upperTotal) + Number(this.props.lowerTotal) + Number(this.props.bonus)}</p>
          </div>

      </div>
    );
  }
}


export default Scoresheet;