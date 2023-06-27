const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password1',
  database: 'employee_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the employee database.');
  startApp();
});

function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit'
        ]
      }
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          console.log('Goodbye!');
          break;
      }
    });
}

function viewAllDepartments() {
  const query = 'SELECT * FROM departments';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('\n');
    console.table(res);

    startApp();
  });
}

function viewAllRoles() {
  const query = 'SELECT * FROM roles';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('\n');
    console.table(res);

    startApp();
  });
}

function viewAllEmployees() {
  const query = 'SELECT * FROM employees';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('\n');
    console.table(res);

    startApp();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
      }
    ])
    .then((answers) => {
      const query = 'INSERT INTO departments (name) VALUES (?)';
      connection.query(query, [answers.name], (err, res) => {
        if (err) throw err;

        console.log('Department added successfully!');
        startApp();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for the role:'
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Enter the department ID for the role:'
      }
    ])
    .then((answers) => {
      const query =
        'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
      connection.query(
        query,
        [answers.title, answers.salary, answers.department_id],
        (err, res) => {
          if (err) throw err;

          console.log('Role added successfully!');
          startApp();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the employee:'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the employee:'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter the role ID for the employee:'
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'Enter the manager ID for the employee (optional):'
      }
    ])
    .then((answers) => {
      const query =
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(
        query,
        [answers.first_name, answers.last_name, answers.role_id, answers.manager_id || null],
        (err, res) => {
          if (err) throw err;

          console.log('Employee added successfully!');
          startApp();
        }
      );
    });
}

function updateEmployeeRole() {
  // Implement the logic to update an employee's role
  console.log('Update Employee Role');
  startApp();
}

  



