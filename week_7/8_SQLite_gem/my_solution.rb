# U3.W7: BONUS Using the SQLite Gem

# I worked on this challenge [by myself]

require 'sqlite3'


$db = SQLite3::Database.open "congress_poll_results.db"


def print_arizona_reps
  puts "AZ REPRESENTATIVES"
  az_reps = $db.execute("SELECT name FROM congress_members WHERE location = 'AZ'")
  az_reps.each { |rep| puts rep }
end

def print_longest_serving_reps(minimum_years)  #sorry guys, oracle needs me, i didn't finish this!
  puts "LONGEST SERVING REPRESENTATIVES"
  lng_list = $db.execute("SELECT name, years_in_congress FROM congress_members WHERE years_in_congress > #{minimum_years}")
  lng_list.each {|item| puts "#{item[0]}" + " - " + "#{item[1]}" }

end

def print_lowest_grade_level_speakers(grade)
  puts "LOWEST GRADE LEVEL SPEAKERS (less than grade #{grade})"
  puts $db.execute("SELECT name FROM congress_members WHERE grade_current < #{grade}")

end

def print_some_states
	puts "NJ, NY, Maine, Florida, and Alaska"
  state_list = $db.execute("SELECT name, party, location FROM congress_members WHERE location in ('NY', 'NJ', 'ME', 'FL', 'AK') order by location")
	state_list.each {|item| puts "#{item[0]} - #{item[1]} - #{item[2]}"  }  

end


def print_separator
  puts 
  puts "------------------------------------------------------------------------------"
  puts 
end


print_arizona_reps

print_separator

print_longest_serving_reps(35)

print_separator
print_lowest_grade_level_speakers(9)
print_lowest_grade_level_speakers(8)

print_separator

print_some_states


##### BONUS #######
# TODO (bonus) - Stop SQL injection attacks!  Statmaster learned that interpolation of variables in SQL statements leaves some security vulnerabilities.  Use the google to figure out how to protect from this type of attack.

# TODO (bonus)
# Create a listing of all of the Politicians and the number of votes they recieved
# output should look like:  Sen. John McCain - 7,323 votes (This is an example, yours will not return this value, it should just 
#    have a similar format)
# Create a listing of each Politician and the voter that voted for them
# output should include the senators name, then a long list of voters separated by a comma
#
# * you'll need to do some join statements to complete these last queries!


# REFLECTION- Include your reflection as a comment below.
# How does the sqlite3 gem work?  
# The module allows Ruby programs to interface with the SQLite3 database engine 
# Sqlite must be installed first for it to work.  Once installed, the engine can be tapped
# by declaring it in a require statement in code. 

# What is the variable `$db` holding?  
# $db is holding a special command for a specific method open file blah under the Sqlite3::Database class. 


# Try to use your knowledge of ruby and OO to decipher this as well as h
# ow the `#execute` method works.  Take a stab at explaining the line 
# `$db.execute("SELECT name FROM congress_members WHERE years_in_congress 
#   > #{minimum_years}")`.  Try to explain this as clearly as possible for 
# your fellow students.  

# $db has already opened the target database that we want to take actions on.  
# The method execute allows us to execute a select statement to retrieve/manipulate data
# in the target database.  This method can only be declared after ruby knows which db we 
# want to use, thus why it has to be a method off of the $db variable we declared earlier. 

