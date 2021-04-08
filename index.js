// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo', 'bar'], function (str) { return str + str }));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  // Counter1 uses a local variable -count- as well as returns a function.  Counter 2 uses a global count variable and simply increments ath variable every time it is called. 
  
  2. Which of the two uses a closure? How can you tell?
  Well, technically both are using closures.  All functions are closures because they access variables within their available scope.  Both function do this whether it is global or local. 
  However, Counter 1 uses a more common scenario for which closures are mentioned.  It has a function within a function, and when called returns a the result of the function inside of that function.  So
  uniquely here we can access a function inside of another function by calling the outer function.   
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     Counter1 is better in most scenarios where you don't need to store data consistently to the variable.  Global variables take more cpu power and therfore if you don't need a global variable you should keep it local. 
     Counter2 is better for when you need to store data to that variable and make it available across other pages and functions.  
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counterMaker());
console.log(counterMaker());
console.log(counterMaker());
console.log(counterMaker());




/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning() {
  let randomScore = Math.floor(Math.random() * 3)
  return randomScore;
}

console.log(inning());


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/

function finalScore(callback, numOfInnings) {
  let finalScoreObj = { Home: 0, Away: 0 };
  let scoreHome = 0;
  let scoreAway = 0;

  for (let i = 0; i <= numOfInnings; i++) {
    scoreHome += callback();
    scoreAway += callback();
  }

  finalScoreObj.Home = scoreHome;
  finalScoreObj.Away = scoreAway;
  // finalScoreObj.innings = i;

  return finalScoreObj;
}

console.log(finalScore(inning, 9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(callback) {
  let score1 = callback();
  let score2 = callback();

  return { Home: score1, Away: score2 };
}

console.log(getInningScore(inning));


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScoreCB, inningCB, numOfInnings,) {
  // Defined Variables
  let finalgameScoreArr = [];
  let awayScoreTotal = 0;
  let homeScoreTotal = 0;
  let overtimeOrNo;

  // Recieve random scores using the callback functions.  
  for (let i = 0; i < numOfInnings.length; i++) {
    const newRandomScore = getInningScoreCB(inningCB);

    // Add up Scores based upon the random scores recieved 
    awayScoreTotal += newRandomScore.Away;
    homeScoreTotal += newRandomScore.Home;

    finalgameScoreArr.push(`Inning ${i + 1}: Away ${newRandomScore.Away} - Home ${newRandomScore.Home}`);
  }


  // If the numOf Innings argument is less than, assign strings for unplayed variables; if scores are equal than 
  // write that the game needs extra innings.  If the score is not the same after 9 innings then give final score.
  if (numOfInnings < 9) {
    for (let i = numOfInnings + 1; i < 9; i++) {
      finalgameScoreArr.push(`Inning ${i}: Not Yet Played`);
    }
  } else if (awayScoreTotal === homeScoreTotal) {
    overtimeOrNo = `This game will require extra innings: Away ${awayScoreTotal} - Home ${homeScoreTotal}`;
  } else {
    overtimeOrNo = `Final Score: Away ${awayScoreTotal} - Home ${homeScoreTotal}`;
  }

  finalgameScoreArr.push(overtimeOrNo);

  return finalgameScoreArr;
}

console.log(scoreboard(getInningScore, inning, 9), "invoking scoreboard");




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  //console.log('its working');
  return 'bar';
}
export default {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
