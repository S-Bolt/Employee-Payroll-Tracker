// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];

  let addMoreEmployees = true;
  while (addMoreEmployees) {
    const firstName = prompt("Enter employee first name.");
    const lastName = prompt("Enter employee last name.");
    let salary = parseFloat(prompt("Enter employee salary."));//added parseFloat b/c my salary values were be treaded as atrings instead of numbers
  
  if (isNaN(salary) || !salary){
    salary =0;
  }

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };
  employees.push(employee);

  const userInput = prompt("Do you want to add an additional employee? (yes/no)").toLowerCase();
  addMoreEmployees = userInput ==="yes";
};
  return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
if (employeesArray.length > 0){
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const  averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
  console.log(`Total Salary: ${totalSalary}`);
}
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length > 0){
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Random Employee:`);
    console.log(`First Name: ${randomEmployee.firstName}`);
    console.log(`Last Name: ${randomEmployee.lastName}`);
    console.log(`Salary: ${randomEmployee.salary}`);
  } else{
    console.log(`No employees to select a random`);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
