// Problem (IN): An admin needs an app to store a list of students and their basic info.

// @TODO: Expand the app so we collect the student's age and email and it shows the result in the console
///     ... the goal is, when your user submits an entry, they see the following in the console:
///     ... "Student: <Submitted Student Name>, Email: <submitted@email>, Age: <Submitted age>, Class: <Submitted class>

// HTML
// create a form to get info from users
// [x] an input:text#name
// [x] an input:text#email
// an input:text#age
// an input:text#class

// JS
// get the inputs into variables
//1. get all the elements that we need in javascript
const formEl = document.querySelector("form");
const fullNameEl = document.querySelector("#full-name");
const emailEl = document.querySelector("#email");
const ageEl = document.querySelector("#age");
const classEl = document.querySelector("#s-class-select");
// const deleteEl = document.querySelector("#delete");
const studentsTableEl = document.querySelector("#students-table"); //Document Object Model
// console.log(studentsTableEl);

//(from 2.4), declare that is an empty array using in 2.4
// The listener triggers a function that **saves the data**
let students = [];

// 2: Add a single student to the table
// 2. define an eventListener on the submission of the form
formEl.addEventListener("submit", function (event) {
  // 2.1 stop the form from "refreshing"
  event.preventDefault();

  //2.2 get the values of the input elements and save as variables
  const fullName = fullNameEl.value;
  const email = emailEl.value;
  const age = ageEl.value;
  const classs = classEl.value;

  //2.3 convert the values into a single object literal
  const studentObjectLiteral = {
    full_name: fullName,
    an_email: email,
    s_age: age,
    s_class: classs
  };

  //2.4: Add the single student object  (with keys, fullName, email) to an array
  students.push(studentObjectLiteral);

  // ?
  fullNameEl.value = "";
  emailEl.value = "";
  ageEl.value = "";
  classEl.value = "";

  fullNameEl.focus();

  //console.log(students);

  //2.5: show in the HTML results section each student in our array with  a [for ..of] loop
  ///2.5.1: make the tbody section (where we append a new row) empty first
  /// before running through the loop
  studentsTableEl.innerHTML = "";

  //2.5.2: set the condition for the loop
  //.. set a variable called "itemInArray" (represents an item in the array), which pull from "students" array
  for (let item of students) {
    // 2.5.2a: create a html table row in JS
    const tr = document.createElement("tr");

    // 2.5.2b: add the table row data to the row using string template
    tr.innerHTML = `
    <td>${item["full_name"]}</td>
    <td>${item["an_email"]}</td>
    <td>${item["s_age"]}</td>
    <td>${item["s_class"]}</td>
    <td><button class="bg-[#f8f9fa] border rounded px-2 text-sm py-1.5 m-1 delete-btn" value=${
      item[`an_email`]
    }>Delete</button></td>
    `;

    // 2.5.2c: add the table table to the html element we need it to show on..
    /// ... from the variable called "studentData"
    studentsTableEl.appendChild(tr);
  }
});

// 3. Remove single student from the table
// 3.1: add an event listener on the WHOLE page
document.addEventListener("click", function (event) {
  //3.1.1: Look for an element that has the specific class called "remove-student"
  if (event.target.matches(".delete-btn")) {
    //3.1.3: create a copy of the array, so we can delete from it
    let studentClone = students;

    //3.1.2: find the array index number of this specific
    // item using the "id" as the unique identifier
    const index = studentClone.findIndex(function (item) {
      // console.log("itemInArray:", typeof Number(itemInArray["id"]))
      // console.log("event.value:", typeof Number(evt.target.value))
      // console.log("Is it equal?", Number(evt.target.value) === Number(itemInArray["id"]) )
      return item["an_email"] === event.target.value;
    });
    // console.log("end Array:", studentCopy);

    // 3.1.4: delete the specific item `studentCopy` by it's index from above
    studentClone.splice(index, 1);
    // console.log("end Array:", studentCopy);

    ///3.5.5: make the tbody section (where we append a new row) empty first
    /// before running through the loop
    studentsTableEl.innerHTML = "";

    ///3.5.6: set the condition for the loop
    ///.. set a variable called "itemInArray" (represents an item in the array), which pull from "studentsCopy" array
    for (let item of studentClone) {
      // 3.5.6a: create a html table row in JS
      const tr = document.createElement("tr");

      // 3.5.6b: add the table row data to the row using string template
      tr.innerHTML = `
      <td>${item["full_name"]}</td>
      <td>${item["an_email"]}</td>
      <td>${item["s_age"]}</td>
      <td>${item["s_class"]}</td>
      <td><button class="bg-[#f8f9fa] border rounded px-2 text-sm py-1.5 m-1 delete-btn" value=${
        item[`an_email`]
      }>Delete</button></td>
    `;

      // 3.5.6c: add the table table to the html element we need it to show on..
      /// ... from the variable called "studentData"
      studentsTableEl.appendChild(tr);
    }
  }
});
