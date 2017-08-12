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
              <th>1</th>
              <th></th>
            </tr>
            <tr>
              <th>2</th>
              <th></th>
            </tr>
            <tr>
              <th>3</th>
              <th></th>
            </tr>
            <tr>
              <th>4</th>
              <th></th>
            </tr>
            <tr>
              <th>5</th>
              <th></th>
            </tr>
            <tr>
              <th>6</th>
              <th></th>
            </tr>
            <tr>
              <th>Bonus</th>
            </tr>
            <tr>
              <th>Total</th>
            </tr>
          </table>

          <h3>Lower</h3> 
          <table>
            <tr>
              <th>3-of-a-kind</th>
              <th></th>
            </tr>
            <tr>
              <th>4-of-a-kind</th>
              <th></th>
            </tr>
            <tr>
              <th>Full House</th>
              <th></th>
            </tr>
            <tr>
              <th>Small Straight</th>
              <th></th>
            </tr>
            <tr>
              <th>Large Straight</th>
              <th></th>
            </tr>
            <tr>
              <th>Yahtzee</th>
              <th></th>
            </tr>
            <tr>
              <th>Chance</th>
              <th></th>
            </tr>
          </table>

          <h3>Total</h3>

      </div>
    );
  }
}


export default Scoresheet;