# U3.W8-9: 


# I worked on this challenge [by myself].

# 2. Pseudocode
# METHOD is_fibonacci?, accept num as input
#   return true if num == 0
#   set checknum to 1
#   WHILE checknum is less than num
#     Keep on adding the number to itself
#     return true if checknum == num
#   END loop

#   RETURN true if num is is_fibonacci 
#   RETURN false if not. 



# 3. Initial Solution

# def is_fibonacci?(num)
# 	return true if num == 0
# 	checknums = [0,1]
# 	while checknums[1] <= num
# 		if checknums[1] == num
# 			return true
# 		else
# 			checknums.push(checknums.inject{|sum,x| sum + x })
# 			checknums.shift
# 		end
# 	end
# end



# 4. Refactored Solution

def is_fibonacci?(num)
	return true if num == 0
	checknums = [0,1]
	while checknums[1] <= num
	  return true if checknums[1] == num
		checknums.push(checknums.inject{|sum,x| sum + x })
		checknums.shift
	end
end





# 1. DRIVER TESTS GO BELOW THIS LINE
def assert
  raise "Assertion failed!" unless yield
end

puts "is_fibonacci? TEST"
puts "--------------"
puts "Testing 1"
puts is_fibonacci?(2) == true
puts "Testing 233"
puts is_fibonacci?(233) == true
puts "Testing 987"
puts is_fibonacci?(987) == true



# 5. Reflection 
# This was a interesting exercise where my pseudocode really didn't 
# indicate what my final solution would be.  In the beginning I 
# thought I would just have one check number for the fibonacci sequence
# starting with 1, and keep on adding to itself.  As I started
# solving the problem, quickly realized that I needed to checknums
# to store a new sum value while needing to remember the old values, 
# which made me switch to an array approach where I would always start with 
# 2 values, sum them up and push into array using inject, and then
# shifting off the front of the array.  That worked like a charm.

# Didn't have much to refactor other than flattening out the if/else statemnts to one-liners
# Love Ruby for it's elegant simplicity here. 
