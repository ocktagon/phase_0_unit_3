# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Aki Suzuki
# 2.
 
# User Stories (As many as you want. Delete the statements you don't need)

# <IN SCOPE>
# As a user, I want to see what is on my grocery list
# As a user, I want to name my grocery list to something unique
# As a user, I want to add items to my grocery list
# As a user, I want to add quantity of item
# As a user, I want to delete items from my grocery list

# <OUT OF SCOPE>
# As a user, I want to reorder items within my grocery list

# As a user, I want to be able to output a checklist 
# As a user, I want to be able to mark in my checklist what I bought

# As a user, I want to assign many grocery lists to a user
# As a user, I want to be able to have many user accounts who can have grocery lists

 
# Pseudocode
# DEFINE Class called GroceryList
#   INITIALIZE 
#      Create an empty hash (item name : quantity)
#   METHOD to add items to grocery list
# 
#   METHOD to delete item/items from grocery list
#
#   METHOD to see full grocery list
#   
 
# Your fabulous code goes here....

class GroceryList
  def initialize
    @groceries = {}
  end

  def add(item, qty)
    @groceries[item] = qty
  end
  
  def delete(item)
    if @groceries.has_key?(item)
      @groceries.delete(item)
    else
      puts "#{item} does not exist in grocery list!"
    end
  end
  
  def read
    @groceries
  end
  
  def print_list
    @groceries.each {|k,v| puts "#{k}, #{v}"}
  end
end


# DRIVER CODE GOES HERE. 

aki_test = GroceryList.new

aki_test.add("carrots", 1) == {"carrots"=>1}
aki_test.delete("carrots", 1) == {}

aki_test.add("carrots", 1)
aki_test.add("lettuce", 2)
aki_test.add("eggs", 2)

aki_test.read
aki_test.print_list

