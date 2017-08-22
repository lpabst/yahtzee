import React, { Component } from 'react';
import './Highscores.css';


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