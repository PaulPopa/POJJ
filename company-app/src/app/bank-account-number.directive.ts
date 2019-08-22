import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyBankAccountNumber]',
  providers: [{ provide: NG_VALIDATORS,
                  useClass: BankAccountNumberDirective, multi: true }]
})
export class BankAccountNumberDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
     return (control.value && control.value.toString().length == 8) ? null : { checkaccno: true };
  }}
