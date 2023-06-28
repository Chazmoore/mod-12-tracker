DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  FOREIGN KEY (manager_id) REFERENCES employees (id)
);

INSERT INTO departments (name)
VALUES ('Operations'), ('Toys'), ('Electronics'), ('Home Goods'), ('Automotive'), ('Furniture');

INSERT INTO roles (title, salary, department_id)
VALUES ('Manager', 50000, 1),
       ('Team lead', 40000, 2),
       ('Cashier', 25000, 3),
       ('Stocker', 30000, 4),
       ('Maintenance', 35000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jerry', 'Montz', 2, 3),
       ('Corey', 'Thomas', 1, 1),
       ('Courtney', 'Smith', 3, NULL),
       ('Anthony', 'Fields', 3, 2),
       ('Kerry', 'Arnold', 4, 1),
       ('Tommy', 'Jones', 4, 4);

SET FOREIGN_KEY_CHECKS = 1;


