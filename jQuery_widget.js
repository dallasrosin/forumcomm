
        $.getJSON("worldnews.json", function(data){
            console.log(data);
        }).fail(function(){
            console.log("An error has occurred.");
        });
