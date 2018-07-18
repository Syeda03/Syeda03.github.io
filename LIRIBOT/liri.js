require("dotenv").config();
// importing the keys.js file and storing it in keys variable.
var keys = require('./keys.js');


var request = require("request");
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var fs = require('fs');

// Storing all of the arguments in an array
var nodeArgs = process.argv;
var command = process.argv[2];

// Create an empty variable for holding input
var input = "";

// Loop through all the words in the node argument
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    input = input + "+" + nodeArgs[i];

  }

  else {

    input += nodeArgs[i];

  }
}

//switch case
switch(command){
  case "my-tweets":
    showTweets();
  break;

  case "spotify-this-song":
  if(input){
    spotifySong(input);
  } else{
    spotifySong("The Sign");
  }
break;

  case "movie-this":
    if(input){
      movie(input)
    } else{
      movie("Mr. Nobody")
    }
  break;

  case "do-what-it-says":
    doThing();
  break;

  default:
    console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
  break;
}


function showTweets(){
  //Display last 20 Tweets
  var screenName = {screen_name: 'SZehra31314510'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response){
    if(!error){
     
      for(var i = 0; i<tweets.length; i++){
        var date = tweets[i].created_at;
        console.log("@SZehra: " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");
        
        // //adds text to log.txt file
        fs.appendFile('log.txt', "@SZehra31314510: " + tweets[i].text + " Created At: " + date.substring(0, 19),(err)=> {
            if (err) throw err;
          });
        fs.appendFile('log.txt', "-----------------------",(err)=> {
            if (err) throw err;
          });
      }
      }
    else
      console.log('Error occurred');
    }
  )};


  function spotifySong(input){
    spotify.search({ type: 'track', query: input}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var songData = data.tracks.items[i];
          //artist
          console.log("Artist: " + songData.artists[0].name);
          //song name
          console.log("Song: " + songData.name);
          //spotify preview link
          console.log("Preview URL: " + songData.preview_url);
          //album name
          console.log("Album: " + songData.album.name);
          console.log("-----------------------");
          
        

          // //adds text to log.txt
          fs.appendFile('log.txt', songData.artists[0].name,(err)=> {
            if (err) throw err;
          });

          fs.appendFile('log.txt', songData.name,(err)=> {
            if (err) throw err;
          });
          fs.appendFile('log.txt', songData.preview_url,(err)=> {
            if (err) throw err;
          });
          fs.appendFile('log.txt', songData.album.name,(err)=> {
            if (err) throw err;
          });
          fs.appendFile('log.txt', "-----------------------",(err)=> {
            if (err) throw err;
          });
        }
      } else{
        console.log('Error occurred.');
      }
    });
  }


function movie(input){
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=5d4d6c34";

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {
  
    // Parse the body of the site.
    
    var body = JSON.parse(body);
    // console.log (body);
    console.log("!!------------------------------------------------------------!!")

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.Ratings);
      console.log("Website URL: " + body.Website);
console.log("!!------------------------------------------------------------!!")


      // //adds text to log.txt
      fs.appendFile('log.txt', "Title: " + body.Title,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "Release Year: " + body.Year,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "Country: " + body.Country,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "Language: " + body.Language,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "Plot: " + body.Plot,(err)=> {
        if (err) throw err;
      });
      fs.appendFile('log.txt', "Actors: " + body.Actors,(err)=> {
        if (err) throw err;
      });
    

    } else{
      console.log('Error occurred.')

    }

    if(movie === "Mr. Nobody"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");

      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      fs.appendFile('log.txt', "It's on Netflix!");
    
    }
  });
}
function doThing(){
  fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');

    spotifySong(txt[1]);
  });
}
