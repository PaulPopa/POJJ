import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyDepartmentName]',
    providers: [{ provide: NG_VALIDATORS,
                   useClass: DepartmentNameDirective, multi: true }]
})
export class DepartmentNameDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    var deps = [
        'Sales',
        'Marketing',
        'Production'
    ];

    return deps.includes(control.value) ? null : { nodep : true };
  }
}
