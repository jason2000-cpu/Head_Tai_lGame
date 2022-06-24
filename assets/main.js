let choices = ["head", "tail"]
let HeadBtn = document.querySelector("#head");
let TailBtn = document.querySelector("#tail");
let compScores = document.querySelector("#CompScores");
let ParScores = document.querySelector("#ParScores")
let ParticipantChoice= "";

//Takes in player name and saves it in a variable named player
let player = prompt("Enter your name");
document.querySelector("#participant").innerText = `${player.toUpperCase()} Vs COMP`;
//document.querySelector("#participant2").innerText = "Opponent"

//listen for button clicks for both tail and head button
let btnClicks = 0;
TailBtn.addEventListener('click', ()=>{
  ParticipantChoice = 'tail';
  WinCount(ParticipantChoice)
  btnClicks++
})
HeadBtn.addEventListener('click', ()=>{
  ParticipantChoice = 'head';
  WinCount(ParticipantChoice);
  btnClicks++;
})


//variables for player and computer scores
let compCount = 0;
let playerCount = 0;


//This functions takes in the player choice and computes the scores 
function WinCount(x) {
  if(btnClicks > 4){
    //alert("GAME IS OVER!! \n Refresh The Tage to Start Over");
    document.querySelector("#results").innerText = `THE GAME IS OVER!!! \n  THE WINNER IS ${playerCount >= compCount ? player : "COMP"}`
    return false;
  }
    let randInt = Math.floor(Math.random() * 2);
    let compChoice = choices[randInt];
 
    if(ParticipantChoice === 'head' && compChoice === 'head'){
        compCount = compCount +1;
        playerCount = playerCount +1;
        alert("Its a tie!!!")
    }else if(ParticipantChoice === 'tail' && compChoice === 'head'){
      compCount = compCount + 1;
      alert("You loose!!!")
    }else if(ParticipantChoice === 'head' && compChoice === 'tail'){
      playerCount = playerCount +1;
      alert("You won!!!");
    }else{
      alert("You all loose!!!")
    }
    compScores.innerText = `Opponent score : ${compCount}`;
    ParScores.innerText = `${player}'s score : ${playerCount}`
  

}

