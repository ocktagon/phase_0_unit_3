# U3.W8-9: OO Basics: Student


# I worked on this challenge [by myself].

# 2. Pseudocode



# 3. Initial Solution

class Student
  attr_accessor :scores, :first_name

  def initialize(first_name, scores)   #Use named arguments!
    @first_name = first_name
    @scores = scores
  end

  def average
  	sum = scores.inject(0, &:+)
  	avg = sum / scores.length
  end

  def letter_grade
    case average
    when 90..100 then
      return "A"
    when 80..89 then
      return "B"
    when 70..79 then
      return "C"
    when 60..69 then
      return "D"
    when 0..59 then
      return "F"
    end
  end

end

def linear_search(list, name)
# Stuck on this 
  # unless 
  #   list.each do |k|
  #   	list[k].include?(name)
  #   end
  # 	return -1
  # else
  # 	list.each do |k|
  # 		return list.index(k) if list[k].first_name == name
  # 	end
  # end
end


alex = Student.new("Alex",[100,100,100,0,100])
aki = Student.new("Aki",[20,80,50,0,40])
john = Student.new("John",[100,100,100,0,100])
jake = Student.new("Jake",[100,100,100,0,100])
jeff = Student.new("Jeff",[100,100,100,0,100])

students = [alex, aki, john, jake, jeff]


# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE
# Tests for release 0:

p students[0].first_name == "Alex"
p students[0].scores.length == 5
p students[0].scores[0] == students[0].scores[4]
p students[0].scores[3] == 0


# Tests for release 1:

p students[0].average == 80
p students[0].letter_grade == 'B'

# Tests for release 2:

p linear_search(students, "Alex") == 0
p linear_search(students, "NOT A STUDENT") == -1





# 5. Reflection 