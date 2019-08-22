import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyBankSortCode]',
  providers: [{ provide: NG_VALIDATORS,
                useClass: BankSortCodeDirective, multi: true }]
})
export class BankSortCodeDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
     return (control.value && control.value.toString().length == 6) ? null : { checkaccsortcode: true };
  }
}
