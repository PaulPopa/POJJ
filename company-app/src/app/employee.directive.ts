import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyEmployee]',
  providers: [{ provide: NG_VALIDATORS,
                useClass: EmployeeDirective, multi: true }]
})
export class EmployeeDirective {

  constructor() { }

   validate(control: AbstractControl): { [key: string]: any } | null {
     console.log(control.value);
     return (control.value > 12000 && control.value < 200000) ? null : { checksalary: true };
   }
}
