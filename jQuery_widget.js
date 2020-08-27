//Code reference: https://www.tutorialrepublic.com/faq/how-to-load-local-json-file-using-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20%24.,using%20a%20GET%20HTTP%20request.

$(document).ready(function(){
        $.getJSON("worldnews.json", function(data){
            console.log(data.name); // Prints: Harry
            console.log(data.age); // Prints: 14
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });