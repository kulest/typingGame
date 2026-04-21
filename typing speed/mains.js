window.addEventListener('load', init);

const levels = {
    easy: 3,
    medium: 5,
    hard: 2
}
 // level changer

 const currentLevel = levels.hard;
 
 let time = currentLevel;
 let score = 0;
 let isPlaying;

 // Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');







const words =[
  'hat',
  'cat',
  'lucky',
  'cock',
  'run',
  'joke',
  'develop',
  'boy',
  'girl',
  'most',
  'ran',
  'able',
];

//  intialize Game
function init() {
    //show numberof seconds in the UI
    seconds.innerHTML = currentLevel;
    // load word from array
   showWord(words);
   // start matching on word input
   wordInput.addEventListener('input', startMatch);
   // call countdown every seconds
   setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50);
}

// Start match 
 function startMatch() {
    if(matchWords()) {
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }
    if(score === -1) {
        return 0;
    }else {
   scoreDisplay.innerHTML = score; 
  }
}
  // Match word to input
  function matchWords(){
      if(wordInput.value === currentWord.innerHTML){
          message.innerHTML = 'correct!!!';
          return true;
      } else {
        message.innerHTML = '';
        return false;
      }
 
}
// pick & show random words
    function showWord(words) {
   // generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
   // Output random word
   currentWord.innerHTML = words[randIndex];
   
 }
 // Countdown timer
 function countdown() {
   if(time > 0) {
    // decrement time
    time--;
   } else if(time === 0){
    // Game is Over
    isPlaying = false;
   }     
   timeDisplay.innerHTML = time;
 }

 function checkStatus() {
     if(!isPlaying && time === 0) {
        message.innerHTML = 'Gameover!!!';
        score = -1; 
     }
 }


