import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { DepartmentEmployeeComponent } from './department-employee/department-employee.component';
import { DepartmentFilterPipe } from './department-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DepartmentEmployeeComponent,
    DepartmentFilterPipe
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
