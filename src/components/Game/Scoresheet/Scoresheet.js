import React, { Component } from 'react';

import './Scoresheet.css';


class Scoresheet extends Component {

  render() {
    return (
      <div className="scoresheet">

          <h2>Scoresheet</h2>

          <h3>Upper</h3>
          <table>
            <tr>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Bonus</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Upper Total</td>
              <td>0</td>
            </tr>
          </table>

          <h3>Lower</h3> 
          <table>
            <tr>
              <td>3-of-a-kind</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4-of-a-kind</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Full House</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Small Straight</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Large Straight</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Yahtzee</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Chance</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Lower Total</td>
              <td>0</td>
            </tr>
          </table>

          <div className='total_div'>
            <h3>Grand Total</h3>
            <p>0</p>
          </div>

      </div>
    );
  }
}


export default Scoresheet;