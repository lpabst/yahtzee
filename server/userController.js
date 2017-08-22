var app = require('./index.js');

module.exports = {

  getHighScores: function(req, res, next){
    const db = app.get('db');
    let gameplay = req.params.gameplay
    db.getHighScores([gameplay]).then( scores => {
      return res.status(200).send(scores)
    })
    .catch( err => {
      return res.status(300).send("The following error occured while trying to get the highscores from the database: ", err)
    })
  },

  updateHighScores: function(req, res, next){
    const db = app.get('db');
    let gameplay = req.params.gameplay;
    db.updateHighScores([]).then( res => {
      db.getHighScores([gameplay]).then( scores => {
        return res.status(200).send(scores)
      })
      .catch( err => {
        return res.status(300).send('The scores were updated, but there was an error in retrieving them: ', err)
      })
    })
    .catch( err => {
      return res.status(300).send('The following error occured while trying to update the highscores in the database: ', err)
    })
  }

};
