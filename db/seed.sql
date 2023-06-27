INSERT INTO department (name)
VALUES ('Operations'), ('Toys'), ('Electronics'), ('Home Goods'), ('Automotive'), ('Furniture');

INSERT INTO roles (title, salary, department_id)
VALUES ('Manager'), ('Team lead'), ('Casheier'), ('Stocker'), ('Maintenance');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jerry', 'Montz', 2, 3), ('Corey', 'Thomas',1,1), ('Courtney','Smith'), ('Anthony', 'Fields', 3,5), ('Kerry','Arnold', 4,2), ('Tommy', 'Jones', 4,4);