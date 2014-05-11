# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
# METHOD super_fizzbuzz take an array
#   IF num is multiple of 15 replace with "FizzBuzz"
#     IF num is multiple of 5 replace with "Buzz"
#       IF num is multiple of 3 replace with "Fizz"
# RETURN fizzbuzzed array




# 3. Initial Solution

# def super_fizzbuzz(array)
# 	new_array = []
# 	array.each { |k| 
# 		if k % 15 == 0
# 			new_array << "FizzBuzz"
# 		elsif k % 5 == 0 
# 		  new_array << "Buzz"
# 		elsif k % 3 == 0
# 			new_array << "Fizz"
# 		else 
# 			new_array << k
# 		end
# 	}
# 	return new_array
# end




# 4. Refactored Solution

def super_fizzbuzz(array)
	new_array = []
	array.each {|k| 
		case 
		when k % 15 == 0 
		  new_array << "FizzBuzz"
		when k % 5 == 0
			new_array << "Buzz"
		when k % 3 == 0
			new_array << "Fizz" 
		else
			new_array << k
		end
	}
	return new_array
end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def assert
  raise "Assertion failed!" unless yield
end

assert { super_fizzbuzz([3,5,15]) == ["Fizz", "Buzz", "FizzBuzz"] }




# # 5. Reflection 
# Did a lot of research online on this but couldn't find a good way to refactor a full if/elsif/else statemet
# like the above.  There is a good shorthand if/else example I found (below), but didn't really help me.   
# today == ChristmasEve ? (puts &quot;Santa's On His Way!&quot;) : (puts &quot;Snow&quot;))

# Also, couldn't do one-liner if statements either as I found the new_array was written to more than I wanted
# in the loop when combined with the other elsif statements. 

# I ended up refactoring using case statement, but it didn't really give me less code.  

# Note to self to ask if there is any smarter way to write this code to cohort group.






