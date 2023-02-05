## Problem

- (IN): An admin needs an app to store a list of students and their basic info.

### @TODO: 
- Expand the app so we collect the student's age and email and it shows the result in the console

### Goal
- ... the goal is, when your user submits an entry, they see the following in the console:
- ... "Student: <Submitted Student Name>, Email: <submitted@email>, Age: <Submitted age>, Class: <Submitted class>

### Code along
- https://github.com/msimbo/f23c1-student-register Dele
- https://codesandbox.io/s/01-wip-student-register-ctw9sl Amir

### HTML
- create a form to get info from users
    - [x] an input:text#name
    - [x] an input:text#email
    - [x] an input:text#age
    - [x] an input:text#class
- create a table to display student records
    - [x] delete bottom for each record

### JavaScript
- Planning  
	- 1. get all the elements that we need in javascript  
	- 2.4. declare that is an empty array using in 2.4.1  
	- 2. Add a single student to the table  
	  events listener on the form  
		- stop the form from "refreshing" 2.1  
		- get the values of the input elements and save as variables 2.2  
		- convert the values into a single object literal 2.3  
		- Add the single student object  (with keys, fullName, email) to an array 2.4.1  
		- show in the HTML results section each student in our array with  a [for ..of] loop 2.5  
		- make the tbody section (where we append a new row) empty first 2.5.1  
			- before running through the loop  
		- set the condition for the loop 2.5.2  
		  set a variable called "itemInArray" (represents an item in the array), which pull from "students" array  
			- create a html table row in JS 2.5.2a  
			- add the table row data to the row using string template 2.5.2b  
			- add the table table to the html element we need it to show on.. 2.5.2c  
			  from the variable called "studentData"  
	- Remove single student from the table 3  
	  add an event listener on the WHOLE page 3.1  
		- Look for an element that has the specific class called "remove-student" 3.1.1  
			- find the array index number of this specific 3.1.2  
			  item using the "id" as the unique identifier  
			- create a copy of the array, so we can delete from it 3.1.3  
			- delete the specific item `studentCopy` by it's index from above 3.1.4  
			- make the tbody section (where we append a new row) empty first 3.1.5  
			  before running through the loop  
			- set the condition for the loop 3.1.6  
			  set a variable called "itemInArray" (represents an item in the array), which pull from "studentsCopy" array  
				- create a html table row in JS 3.1.6a  
				- add the table row data to the row using string template 3.1.6b  
			- add the table table to the html element we need it to show on.. 3.1.7  
			  from the variable called "studentData"