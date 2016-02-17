var computerChoices = ['a','b','c ', 'd', 'e', 'f ', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	var wins = 0;
	var losses = 0;
	var guesses =9;


	function reset(){
	
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
return computerGuess;
	

	}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	document.onkeyup = function(event) {
   


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   
    
    
    alert("You clicked " + userGuess);
     //alert("computer chooses " +  computerGuess);

        
        if  (userGuess === computerGuess) {
            wins++;
            
            alert( "YOU GOT IT");computerGuess = reset(); guesses=9;
        
        }
        if (guesses>0)
        	{ guesses=guesses -1;  alert("you have  " + guesses + " guesses left"); 
    }


         if (guesses==0){losses++;
           alert("You Lose!");computerGuess = reset(); guesses=9;
        }


var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" + 
        "<p> Guesses:" +
        guesses +
        "</p>"
        ;

document.querySelector('#game').innerHTML = html;
}
