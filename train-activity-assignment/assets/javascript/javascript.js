// Initial Values
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;
var currentTime = moment();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA0iIHLwRezwvomqaZk_0j-4DzkU1RaOD8",
    authDomain: "train-activity-assign.firebaseapp.com",
    databaseURL: "https://train-activity-assign.firebaseio.com",
    projectId: "train-activity-assign",
    storageBucket: "train-activity-assign.appspot.com",
    messagingSenderId: "864482426197"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
       
        $("#submit-btn").click(function () {
            var trainName = $("#name-input").val().trim();
            var destination = $("#dest-input").val().trim();
            var firstTrain = $("#first-train").val().trim();
            var frequency = $("#freq-min").val().trim();
             console.log(trainName);
            database.ref().push({
                trainName: trainName,
                trainDest: destination,
                firstTrain: firstTrain,
                freq: frequency,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });
        });

    var firstTrainConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTrainConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextArrival = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));

        database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {
          var tBody = $("tbody");
          var tRow = $("<tr>");
          TrainName = $("<td>").html(childSnapshot.val().trainName);
          Destination = $("<td>").html(childSnapshot.val().trainDest);
          Frequency = $("<td>").html(childSnapshot.val().freq);
          NextArrival = $("<td>").html(nextArrival);
          MinutesAway = $("<td>").html(tMinutesTillTrain);
          tRow.append(TrainName,Destination,Frequency,NextArrival,MinutesAway);
          tBody.append(tRow);

         
      });
