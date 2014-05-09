// U3.W8-9: Challenge you're converting


// I worked on this challenge [with: Devin Johnson].

// 2. Pseudocode
// CREATE FUNCTION Dispenser takes an array of flavors
//   Declare this.flavors = parameter to function
  
//   Declare this.addpez = function
//     Take a flavor as a parameter and add to end of this.flavors
  
//   Declare this.pez_count
//     Return length of flavor's array
  
//   Declare this.get_pez
//     Return first value in pez array
  
//   Declare this.see_all_pez
//     Return everything in array


// 3. Initial Solution

// class PezDispenser
//   attr_accessor :pez
//   def initialize(*flavors)
//     @pez = []
//     flavors.flatten.each{ |flavor| pez << flavor}
//   end
  
//   def pez_count
//     pez.length
//   end
  
//   def get_pez
//     my_pez = pez.sample
//     pez.delete(my_pez)
//   end
  
//   def add_pez(*flavor)
//     flavor.flatten.each{ |flavor| pez << flavor }
//   end
  
//   def see_all_pez
//     pez
//   end

// end

// 4. Refactored Solution

function Dispenser(flavors){
    this.flavors = flavors;
};

Dispenser.prototype.add_pez = function(flavor){
    this.flavors.push(flavor);
};

Dispenser.prototype.see_all_pez = function(){
    for(i in this.flavors) {
        console.log(this.flavors[i])
    };
};

Dispenser.prototype.get_pez = function(){
    return this.flavors.shift()
};





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
var flavor_list = ['cherry', 'grape', 'lime']

var yoda = new Dispenser(flavor_list)

yoda.flavors == ['cherry', 'grape', 'lime']

yoda.addpez('lemon')

yoda.see_all_pez()

yoda.get_pez()




// 5. Reflection 
// Translating the pez dispenser into JavaScript was challenging, but have a better feel for JS now as a result.
// Similar to the GroceryList exercise, found that calling the main function first and adding methods to the prototype
// easy to understand and readable like Ruby.  Although there is no hard requirement to do it in this manner,
// the article here (http://www.phpied.com/3-ways-to-define-a-javascript-class/) was convincing enough for me 
// to continue using this as my go-to methodology going forward when building these classes out.  

// The most frustrating thing where Devin and I spent the most time was syntax problem of calling the methods.  
// The easiest one to miss was parentheses - for example, calling yoda.see_all_pez does not work, and node returns 
// FUNCTION, which is hard to understand what's going wrong.  We spun on this issue for at least 20 min, later realizing 
// that the problem was very simple - there was nothing wrong with the function itself, but it had to be called
// as yoda.see_all_pez() with parentheses!  This was a good lesson for future to not make the same mistake, but frustrating
// since there was ultimately nothing wrong with the function/method code.  





