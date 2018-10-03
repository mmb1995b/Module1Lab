// program data:
var number = 22;
var guess;
var limit = 5;
var won = false;



for (i = 1; i <= limit; i++){
    // prompt user for their guess:
    guess = prompt("Please guess a number: ");

    // if correct: let the user know they won

        if (guess == number){
            document.write("Congratulations, that guess is correct! You win!");
            won = true;
            break;
        }

        // if incorrect: let the user know
        else{
            alert("I'm sorry, that guess is incorrect. You have " + (limit - i) + " guesses remaining.");

        }
    }
if (!won){
    document.write("I'm sorry, you have no more guesses. Better luck next time.");
}