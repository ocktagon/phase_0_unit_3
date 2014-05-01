// U3.W8-9: 


// I worked on this challenge [with: Anup Pradhan ].

// 2. Pseudocode
// JS Pseudocode
// CREATE OBJECT called grocerylist
//   Create array called grocerylist
//   CREATE PROPERTY add which takes arguments item & quantity
//     Adds item/quantity to array
//   CREATE PROPERTY delete which takes argument item 
//     Delete item from array
//   CREATE PROPERTY display
//     Print item and quantity to console


// 3. Initial Solution

// Define a class like this
function GroceryList(item, qty, price){
   this.item = item;
   this.qty = qty;
   this.price = price;
   this.list = [[item,qty,price]]
}

GroceryList.prototype.add = function(item, qty, price){
	 this.list.push([item,qty,price])
};

GroceryList.prototype.delete = function(item){
	for (var i = 0; i < this.list.length; i++) {
	  if (item === this.list[i][0])
	    this.list.splice(i,1);
	};
};

GroceryList.prototype.display = function(){
	console.log("Item, Quantity, Price");
	for (var i = 0; i < this.list.length; i++){
	 console.log(this.list[i][0] + ", " + this.list[i][1] + ", " + this.list[i][2]);
	};
};

// 4. Refactored Solution
// Cannot refactor anymore, code looks good to me.





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

var mylist = new GroceryList("aki", 1, 4.99);
mylist;
mylist.add("anup", 2, 5.99);
mylist.add("dbc", 3, 12.99);
mylist.delete("dbc");
mylist.display();

// 5. Reflection 
// // This exercise alone took me about 4 hours to complete.  
// Also tried pairing for this, but since our lessons with JavaScript has been light,
// it ended up being more of a pseudocode review with most time spent researching how to do things. 

// The reason for the time suck was that it is difficult to find research on how 
// exactly to write in JavaScript a class in Ruby for this particular scenario.  
// Spent at least 2 hours trying to figure out how to do that.  This
// ended up in 2 big learnings in this exercise.  

// 1. It's ok not to nest things like we do in Ruby. 
// The structure is set up to create the main function for the GroceryList first, 
// then add methods that point to the prototype.  This strategy worked in making
// the interaction with the function as Ruby-like as possible.  

// 2. Spent a lot of time in relearning how to manipulate multi-dimensional arrays.
// Learning how to point to individual positions within them and create loops to display them come in handy.  

// Sidenote - despise JS since it's so easy to have syntax errors.  
// I spent 15 minutes debugging a function only to realize that all I was
// missing was the parentheses at the end when I called it.  

