import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Department } from '../department';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'company-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent implements OnInit {
  @Input() department: Department;
  switchboard: SwitchboardService;
  employees : Employee = [];

  constructor(switchboard : SwitchboardService) {
    this.switchboard = switchboard;
  }

  subDepartment: Subscription;
  ngOnInit() : void {
    this.subDepartment = this.switchboard.department$.subscribe((d) => {
      this.employees = [];
      this.department = d;
      var emp_id = this.department.emp_id.split(',');
      var emp_name = this.department.emp_name.split(',');

      for (var i = 0; i < emp_id.length; i++) {
        var e = new Employee();
        e.emp_id = emp_id[i];
        e.emp_name = emp_name[i];
        this.employees.push(e);
      }
    });
  }

  ngOnDestroy() : void {
    this.subDepartment.unsubscribe();
  }
}
