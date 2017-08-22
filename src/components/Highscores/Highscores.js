import React, { Component } from 'react';
import './Highscores.css';

/************* build high scores link on home page and vice versa. 
 * make high scores page look decent
 * host app and email family to test and report bugs
*/
class Highscores extends Component {

  constructor(props){
    super(props);
    this.state = {
      highscores: [{}]
    }
  }

  componentDidMount(){
    axios.get('/api/highscores/classic')
    .then( res => {
      this.setState({
        highScores: res.data
      })
    })
  }

  render() {

    return (
      <div className='high_scores'>
        <p>Classic High Scores</p>
        <ul>
          {
            this.state.highscores.map( (data, i) => {
              return <li>{data.score} - {data.name}</li>
            })
          }
        </ul>
      </div>
    );

  }
}


export default Highscores;