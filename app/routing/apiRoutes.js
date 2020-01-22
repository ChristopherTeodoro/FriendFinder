// Dependencies
var friends = require('../data/friends');
var path = require('path');

// This is where we export our route
module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    console.log(req.body);

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var newFriend = req.body;
    var userScores = newFriend.scores;

    var totalDifference = 0;

    for (var i=0; i<friends.length; i++) {
      
      console.log(friends[i].name);
      totalDifference = 0;
      
      for (var j=0; j<friends[i].scores[j]; j++) {
      
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        console.log(totalDifference);
        
        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    friends.push(newFriend);
    res.json(bestMatch)
  });

}