# U3.W7: Designing Schemas


#### I worked on this challenge [by myself]


## Release 0: Student Roster Schema
<!-- display your image inline here -->
<img src="../imgs/0_schema.png" />

## Release 1: One to Many Schema
<!-- display your image inline here -->
<img src="../imgs/1_schema.png" />

## Release 2: One to One Schema
<!-- display your image inline here -->
<img src="../imgs/2_schema.png" />

## Release 3: Many to Many Schema
<!-- display your image inline here -->
<img src="../imgs/3_schema.png" />

## Release 4: Design your own Schema
Description of what you're modeling: 
<img src="../imgs/4_schema.png" />

<!-- display your one-to-one image inline here -->
<!-- display your many-to-many image inline here -->

## Release 5: Reflection
Learning how to use SQL designer was relatively straight forward, although it took a bit of time to learn what the quickest way to do things were.  
For my own schema - I decided to add accountability groups and a twitter account for the students.  The accountability group was the most interesting - there obviously can be many students in an accountability group.  Although it is not
necessarily true that a student can be in many accountability groups at once, 
I still took the route of creating a many-to-many relationship because it felt
cleaner to have the student/group lookup table in between to keep the other tables more organized.  The twitter account was more straightforwad and was
able to model it similarly to the facebook account example.
