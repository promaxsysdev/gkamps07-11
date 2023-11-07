import { addPerson, getPersons, deletePerson as _deletePerson } from './js/database';

window.onload = function() {

  // Populate the table
  populateTable();

  // Add the add button click event
  document.getElementById('add').addEventListener('click', () => {

    // Retrieve the input fields
    //var firstname = document.getElementById('drpIdle');
   // var lastname = document.getElementById('drpIdle');
    var firstname = "Test";
    var lastname = "Test";

    // Save the person in the database
    addPerson(firstname, lastname);

    // Reset the input fields
    firstname= '';
    lastname = '';

    // Repopulate the table
    populateTable();
  });
}

// Populates the persons table
function populateTable() {

  // Retrieve the persons
  getPersons(function(persons) {

    // Generate the table body
    var tableBody = '';
    for (i = 0; i < persons.length; i++) {
      tableBody += '<tr>';
      tableBody += '  <td>' + persons[i].firstname + '</td>';
      tableBody += '  <td>' + persons[i].lastname + '</td>';
      tableBody += '  <td><input type="button" value="Delete" onclick="deletePerson(\'' + persons[i]._id + '\')"></td>'
      tableBody += '</tr>';
    }

    // Fill the table content
    document.getElementById('tablebody').innerHTML = tableBody;
  });
}

// Deletes a person
function deletePerson(id) {

  // Delete the person from the database
  _deletePerson(id);

  // Repopulate the table
  populateTable();
}
