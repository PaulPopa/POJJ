import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employee';
import { Department} from '../department';
import { DepartmentEmployeeComponent } from '../department-employee/department-employee.component';

@Component({
  selector: 'employee-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public newEmployee: Employee;
  data: DataService;

  departments = this.data.getDepartments().map(function (obj) {
    return obj.dep_name;
    
  });

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }

  addEmployee(addForm): void {
    if (addForm.valid) {
      var employeeToAdd = this.newEmployee;
      this.newEmployee = new Employee();
      this.data.addEmployee(employeeToAdd);
    } else {
      console.error("Add Employee form is in an invalid state");
    }
  }

}
