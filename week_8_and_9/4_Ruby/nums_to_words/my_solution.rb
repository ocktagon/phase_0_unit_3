# U3.W8-9: Numbers to English Words


# I worked on this challenge [by myself].

# 2. Pseudocode
# METHOD in_words takes a number
#   Create a num=>word hash for every digit
#   if array length is great than 4, return error
#   else 
#   	split integer into an array
#   	for each element in array, return and store hash into new array
#   	return array joined with spaces	
#   end IF 
# end METHOD

# 3. Initial Solution

def in_words(num)
	hash = {0=>"zero",1=>"one",2=>"two",3=>"three",4=>"four",5=>"five",6=>"six",7=>"seven",8=>"eight",9=>"nine", 10=>"ten",11=>"eleven",12=>"twelve",13=>"thirteen",14=>"fourteen",15=>"fifteen",16=>"sixteen", 17=>"seventeen", 18=>"eighteen", 
		       19=>"nineteen", 20=>"twenty", 27=>"twenty seven", 30=>"thirty",40=>"forty",50=>"fifty",60=>"sixty",70=>"seventy",80=>"eighty",90=>"ninety", 92=>"ninety two"}

	return hash[num] if hash.has_key?(num)

end


# 4. Refactored Solution






# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def assert
  raise "Assertion failed!" unless yield
end

puts "Nums to words test"
puts "--------------"
puts "Testing 4"
puts in_words(4) == "four"
puts in_words(27) == "twenty seven"
puts in_words(92) == "ninety two"


# 5. Reflection 
# My pseudo code started with the idea of splitting the integer into an array,
# and output diferent outcomes depending on the position and array length. 
# As I started coding, I realized that the simpler it is the better.
# As a result came up with a hash (inspired by a previous decoder exercise) and simply
# returning the value for the corresponding key.  

# I can imagine that there is still an array version for this solution, but for this week
# I decided to keep the code as simple as possible. 
