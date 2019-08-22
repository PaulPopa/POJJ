import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Department } from './department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getEmployees();
    this.getDepartments();
    this.getEmployeesFromDepartment();
  }

  employees: Employee[] = [];
  departments: Department[] = [];
  departmentEmployees: Employee[] = [];

  public getEmployees(): void {
    this.http.get<Employee[]>('/api/employees').subscribe(employees => {
      this.employees = employees;
    });
  }

  public addEmployee(newEmployee: Employee): void {
    this.http.post<Employee[]>('/api/addEmployee', newEmployee).subscribe(employees => {
      this.employees = employees;
    });
  }

  public getDepartments(): Department[] {
    this.http.get<Department[]>('/api/departments').subscribe(departments => {
      console.log(departments);
      this.departments = departments;
    });
    return this.departments;
  }

  public getEmployeesFromDepartment(): void {
    this.http.get<Employee[]>('/api/departmentemployees').subscribe(employees => {
      this.departmentEmployees = employees;
    })
  }
}
