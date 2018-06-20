 // Initial array of animals
 var animal = ["Horse","Parrot","Eagle","Blue Heron", "Duck" ,"Cat","Ostrich","Cow","Dog","Mouse","HedgeHog","Lion"];

 renderButtons();
 
 // Function for displaying animals data
 function renderButtons() {
     
     // Deleting the buttons prior to adding new animals
     // (this is necessary otherwise you will have repeat buttons)
     $("#buttons-view").empty();

     // Looping through the array of animals
     for (var i = 0; i < animal.length; i++) {

     // Then dynamically generating buttons for each movie in the array
     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
     var a = $("<button>");
     // Adding a class of animal to our button
     a.addClass("animal");
     // Adding a data-attribute
     a.attr("data-name", animal[i]);
     // Providing the initial button text
     a.text(animal[i]);
     a.on("click", function(event) {
         var animal = $(this).attr("data-name");
         displayAnimalGifs(animal);
     });
     // Adding the button to the buttons-view div
     $("#buttons-view").append(a);
 }
     };
     
     // This function handles events where one button is clicked
     $("#add-animal").on("click", function(event) {
         // Preventing the buttons default behavior when clicked (which is submitting a form)
         event.preventDefault();
         // This line grabs the input from the textbox
         var animals = $("#animal-input").val().trim();
         
         // Adding the animal from the textbox to our array
         animal.push(animals);
         
         // Calling renderButtons which handles the processing of our movie array
         renderButtons();
         
     });
     
     // Function for dumping the JSON content for each button into the div
 function displayAnimalGifs(animal) {

     // Constructing a queryURL using the animal name
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=oRrtGKhsY2YRArxNwYEg6EoYz4T36VYg&limit=10&rating=g";

     // Performing an AJAX request with the queryURL
     $.ajax({
         url: queryURL,
         method: "GET"
     })
     // After data comes back from the request
         .then(function(response) {
         console.log(queryURL);

         console.log(response);
     // storing the data from the AJAX request in the results variable
         var results = response.data;

     // Looping through each result item
         for (var i = 0; i < results.length; i++) {

     // Creating and storing a div tag
             var animalDiv = $("<div class='gif-item'>");

     // Creating a paragraph tag with the result item's rating
             var p = $("<p>").text("Rating: " + results[i].rating);

     // Creating and storing an image tag
             var animalImage = $("<img>");
     // Adding a class to image 
             animalImage.addClass('anImg');

     // Setting the src attribute of the image to a property pulled off the result item
             animalImage.attr("src", results[i].images.fixed_height.url);
            animalImage.attr('data-still', results[i].images.fixed_height_still.url)

             animalImage.attr('data-animate', results[i].images.fixed_height.url)

            //  .attr('data-state', 'still');
     
     // Appending the paragraph and image tag to the animalDiv
             animalDiv.append(p);
             animalDiv.append(animalImage);


     // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
             $("#gifs-appear-here").prepend(animalDiv);
             renderButtons();
         }

         $('.anImg').on('click', function() {
             
             var state = $(this).attr('data-state'); 
             console.log(this);

             if (state == 'still') {
             
             $(this).attr('src', $(this).data('animate'));
             
             $(this).attr('data-state', 'animate');

             } else {
                     
             $(this).attr('src', $(this).data('still'));
             
             $(this).attr('data-state', 'still');
             }      
             });
             })
             };
                             
             
