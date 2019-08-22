import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';


@Component({
  selector: 'company-department-employee',
  templateUrl: './department-employee.component.html',
  styleUrls: ['./department-employee.component.css']
})
export class DepartmentEmployeeComponent implements OnInit {
  data: DataService;
  switchboard: SwitchboardService;

  constructor(dataService : DataService,
              switchboard : SwitchboardService) {
    this.data = dataService;
    this.switchboard = switchboard;
  }

  ngOnInit() {
  }
}
