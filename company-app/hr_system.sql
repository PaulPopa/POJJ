DROP DATABASE IF EXISTS hr_system;
CREATE DATABASE hr_system;
USE hr_system;

CREATE TABLE employee(
	emp_id MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    address VARCHAR(500) NULL,
    email VARCHAR(100) NOT NULL CHECK (email LIKE '%@%.%'),
    nin CHAR(9) UNIQUE NULL,
    bank_acc_number CHAR(8) NULL CHECK(bank_acc_number REGEXP '^[0-9]*$'),
    bank_sort_code CHAR(6) NULL CHECK(bank_sort_code REGEXP '^[0-9]*$'),
    start_salary DECIMAL(10, 2),
    CONSTRAINT bank_acc_number CHECK (length(bank_acc_number)=8),
    CONSTRAINT bank_sort_code CHECK (length(bank_sort_code)=6),
    CONSTRAINT nin CHECK (length(nin)=9)
);

CREATE TABLE department(
	emp_id MEDIUMINT,
    dep_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);

CREATE TABLE salesEmployee(
	emp_id MEDIUMINT UNIQUE,
    commission_rate DECIMAL(4,2) NOT NULL,
    total_sales DECIMAL (10,2) NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES employee(emp_id)
);

INSERT INTO employee(emp_name, address, email, nin, bank_acc_number, bank_sort_code, start_salary) 
VALUES ('B. Rodgers', '3 George Street', 'brodgers@kainos.com', 'SG304050P', '12345678', '040004', 27500);
INSERT INTO employee(emp_name, address, email, nin, bank_acc_number, bank_sort_code, start_salary) 
VALUES ('A. Daley', '91 Western Road', 'adaley@kainos.com', 'JA754351P', '28391521', '090104', 15000);
INSERT INTO employee(emp_name, address, email, nin, bank_acc_number, bank_sort_code, start_salary) 
VALUES ('K. Knight', '27 Colmore Row', 'kknight@kainos.com', 'KC447563P', '45856877', '070128', 32000);
INSERT INTO employee(emp_name, address, email, nin, bank_acc_number, bank_sort_code, start_salary) 
VALUES ('M. Atkins', '20 Wellfield Road', 'matkins@kainos.com', 'AW999728B', '16690537', '090128', 30000);
