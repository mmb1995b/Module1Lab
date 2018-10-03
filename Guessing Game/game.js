// program data:
var number = 22;
var guess;




// prompt user for their guess:
guess = prompt("Please guess a number: ");

// if correct: let the user know they won
if (guess == number){
    document.write("Congratulations, that guess is correct! You win!")
};

// if incorrect: let the user know
else{
    alert("I'm sorry, that guess is incorrect")

}