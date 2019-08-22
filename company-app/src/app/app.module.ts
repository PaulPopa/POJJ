import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentEmployeeComponent } from './department-employee/department-employee.component';
import { DepartmentFilterPipe } from './department-filter.pipe';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { EmployeeDirective } from './employee.directive';
import { EmployeeNameDirective } from './employee-name.directive';
import { EmailDirective } from './email.directive';
import { NinDirective } from './nin.directive';
import { BankAccountNumberDirective } from './bank-account-number.directive';
import { BankSortCodeDirective } from './bank-sort-code.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddEmployeeComponent,
    DepartmentEmployeeComponent,
    DepartmentFilterPipe,
    EmployeeReportComponent,
    EmployeeDirective,
    EmployeeNameDirective,
    EmailDirective,
    NinDirective,
    BankAccountNumberDirective,
    BankSortCodeDirective
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
