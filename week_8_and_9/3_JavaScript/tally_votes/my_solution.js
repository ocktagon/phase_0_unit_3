// U3.W8-9: Gradebook from Names and Scores

// I worked on this challenge [with: Yuzu Saijo]

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {"Alex":0, "Bob": 0, "Cindy":0, "Devin":0,"Ernest":0,"Fred":0,"Gail":0,"Hermann":0,"Ivy":0,
  "John":0, "Kerry":0,"Louise":0, "Mary":0, "Nate":0, "Oscar":0, "Paulina":0, "Quintin":0, "Romanda":0, "Steve": 0, "Tracy": 0, "Ullyses": 0, "Valorie": 0, "Wesley": 0, "Xavier": 0, "Yvonne":0, "Zane": 0},

  vicePresident: {"Alex":0, "Bob": 0, "Cindy":0, "Devin":0,"Ernest":0,"Fred":0,"Gail":0,"Hermann":0,"Ivy":0,
  "John":0, "Kerry":0,"Louise":0, "Mary":0, "Nate":0, "Oscar":0, "Paulina":0, "Quintin":0, "Romanda":0, "Steve": 0, "Tracy": 0, "Ullyses": 0, "Valorie": 0, "Wesley": 0, "Xavier": 0, "Yvonne":0, "Zane": 0},
  secretary: {"Alex":0, "Bob": 0, "Cindy":0, "Devin":0,"Ernest":0,"Fred":0,"Gail":0,"Hermann":0,"Ivy":0,
  "John":0, "Kerry":0,"Louise":0, "Mary":0, "Nate":0, "Oscar":0, "Paulina":0, "Quintin":0, "Romanda":0, "Steve": 0, "Tracy": 0, "Ullyses": 0, "Valorie": 0, "Wesley": 0, "Xavier": 0, "Yvonne":0, "Zane": 0},
  treasurer: {"Alex":0, "Bob": 0, "Cindy":0, "Devin":0,"Ernest":0,"Fred":0,"Gail":0,"Hermann":0,"Ivy":0,
  "John":0, "Kerry":0,"Louise":0, "Mary":0, "Nate":0, "Oscar":0, "Paulina":0, "Quintin":0, "Romanda":0, "Steve": 0, "Tracy": 0, "Ullyses": 0, "Valorie": 0, "Wesley": 0, "Xavier": 0, "Yvonne":0, "Zane": 0}
}

/* The name of each student receiving a vote for an office should become a property 
of the respective office in voteCount.  After Alex's votes have been tallied, 
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the 
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

// Pseudocode
// within voteCount, create a list including all the names with the default value 0
// go through votes 
// everytime there's a count for the name, add one to the hash 
// resort from highest to lowest
// return the first element in the hash for each role
// put the name into the officers hash

// __________________________________________
// Initial Solution

// Wanted to do a for within a for loop to iterate through each hash per voter, but syntax is not working. 

// for (var key in votes){
//   for each (var item in votes.key) {
//     if (item === "Bob"){
//       voteCount.item.Bob += 1
//     };
//     else if (item === "Cindy"){
//       voteCount.item.Cindy += 1
//     };
//   };
// };


for (var key in votes){

  if (votes[key].president === "Bob"){
... voteCount.president.Bob += 1
..};
  else if (votes[key].president === "Cindy")
    voteCount.president.Cindy += 1
  };

};

  
   Object.keys(voteCount.president)[0]; 
   ==> "Alex"

  // voteCount.president.Alex += 1
Object.keys(voteCount).forEach(function (key){
console.log(voteCount[key]);
});

Object.keys(voteCount.president).forEach(function (key){
console.log(voteCount.president[key]);
});

// __________________________________________
// Refactored Solution






// __________________________________________
// Reflection
// This was the hardest exercise for me to date.  
// Yuzu and I paired up and we spent most time trying to research how for each loops work.  
// The approach we got down to was trying to iterate through each key in the vote, and 
// then possibly nest another for loop within that to go through each key value pair within
// the vote.  Then if statements would take over to add to the voteCount if the value was there.  
// We got stuck on appropriate syntax to allow doing this, and ran out of time/sleep.  

// We'll have to try this again when we have more time.  





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
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)