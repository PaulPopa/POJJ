import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.getEmployees();
  }

  employees: Employee[] = [];

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
}
