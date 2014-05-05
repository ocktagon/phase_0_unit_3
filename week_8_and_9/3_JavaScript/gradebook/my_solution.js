/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge [by myself]

*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

// __________________________________________
// Write your code below.

// ## Release 0: Create a variable `average`
// Assign it the value of a function... 

// ## Release 1: Modify `average`
// Have `average` accept an array of numbers and returns the average of those numbers

function average(nums){
  var sum = 0
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  };
  average = sum/nums.length;
  return average;  
};

// ## Release 2: Create `gradebook`
// The variable `gradebook` and assign it the value of a new object
// ## Release 3: Add property to `gradebook`
// Make each student name in students a property of gradebook and assign each the value of a new object.

var gradebook = new Object();

gradebook.Joseph = new Object();
gradebook.Susan = new Object();
gradebook.William = new Object();
gradebook.Elizabeth = new Object();

// ## Release 4: `testScores`
// Give each student property of gradebook its own testScores property and assign it the value of the respective students scores from scores.

gradebook.Joseph.testScores = [80,85,75,100];
gradebook.Susan.testScores = [70,80,70,90];
gradebook.William.testScores = [70,90,80,95];
gradebook.Elizabeth.testScores = [100,90,75,85];


// ## Release 5: `addScore`
// - addScore property to gradebook (assign it the value of a function that accepts name and score arguments)
// - Have it push the score to the value of the testScore property of the gradebook property that matches the value of the name argument.  
// For example, 
//     gradebook.addScore("Susan", 80) // would push the score 80 into the value of gradebook.Susan.testScores.

gradebook.addScore = function(name,score){
  gradebook[name].testScores.push(score);
};

// ## Release 6: `getAverage`
// A getAverage property to gradebook and assign it the value of a function ...

gradebook.getAverage = function(name){
  return average(gradebook[name].testScores);
};

// ## Release 7: Modify `getAverage`
// So that it accepts a name as a String (e.g., "Joseph") and returns the named students average.


// __________________________________________
// Reflect
// The most troublesome problem I had when solving this was to point to the student test scores 
// in the right way when I was was creating addScore and getAverage methods. 
// For the longest time the function would not work properly when I did something like this:
// function(name,score){
//   gradebook.name.testScores.push(score);
// }
// After some research and looking at other student examples, finally realized that this notation
// did not work, and had to put the name into bracket notation instead for the methods to work 
// on the right objects.  This was a good learning to understand the mechanics of properties. 









// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)