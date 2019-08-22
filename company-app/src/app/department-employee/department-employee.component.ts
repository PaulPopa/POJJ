import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';
import { Department } from '../department';

@Component({
  selector: 'company-department-employee',
  templateUrl: './department-employee.component.html',
  styleUrls: ['./department-employee.component.css']
})
export class DepartmentEmployeeComponent implements OnInit {
  thisDepartment: Department;
  data: DataService;
  switchboard: SwitchboardService;

  constructor(dataService : DataService,
              switchboard : SwitchboardService) {
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect(newDepartment : Department) : void {
    this.thisDepartment = newDepartment;
    console.log(newDepartment);
    this.switchboard.switchDepartment(this.thisDepartment);
  }

  ngOnInit() {
  }
}
