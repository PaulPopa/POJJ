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
  employees = [];

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
        e.emp_id = parseInt(emp_id[i], 10);
        e.emp_name = emp_name[i];
        e.address = "";
        e.email = "";
        e.nin = "";
        e.bank_acc_number = "";
        e.bank_sort_code = "";
        e.start_salary = "";
        this.employees.push(e);
        console.log(e);
      }
    });
  }

  ngOnDestroy() : void {
    this.subDepartment.unsubscribe();
  }
}
