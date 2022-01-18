
'use strict';

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = "Correct Number ";
// document.querySelector('.number').textContent = "13 ";
// document.querySelector('.score').textContent = "10 ";

// document.querySelector('.guess').value = "13";
// console.log((document.querySelector('.guess').value));

let score = 20;
const number = Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = "No Number ";


    }else if(guess === number){
        document.querySelector('.message').textContent = "Correct Number ";
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "25rem";
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = guess;


    }else if(guess > number){
        if(guess > 1){
            document.querySelector('.message').textContent = "To High ";
            score--;   
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost The Game ";
        }
       
    }else if (guess < number){
        if(guess > 0){
            document.querySelector('.message').textContent = "To Low ";
            score--;   
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You Lost The Game ";
        }       
    }else{

    } 
});


document.querySelector('.again').addEventListener('click', function(){ 
    document.querySelector('.message').textContent = "Start guessing... ";
    document.querySelector('body').style.backgroundColor = "black";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    // document.querySelector('.highscore').textContent ='0';
    document.querySelector('.score').textContent ='20';
    document.querySelector('.guess').value = '';
});
