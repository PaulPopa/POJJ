import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { DataService } from './data.service';
import { Department } from './department';

@Directive({
  selector: '[departmentDirective]',
  providers: [{ provide: NG_VALIDATORS, useClass: DepartmentDirective, multi: true}]
})
export class DepartmentDirective implements Validator{
  data: DataService;
  department: Department;
  validate(control: AbstractControl): { [key: string]: any} | null {
    var departmentList = this.data.getDepartments().map(function (obj) {
      return obj.dep_name;
    });
    
    console.log(departmentList);
    return departmentList.includes(control.value) ? null : {nosuchdept:true };
  }

  constructor(dataService: DataService) { 
    this.data = dataService;
  }

}
