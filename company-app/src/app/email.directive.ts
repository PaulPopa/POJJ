import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyEmail]',
  providers: [{ provide: NG_VALIDATORS,
                  useClass: EmailDirective, multi: true }]
})
export class EmailDirective {
  constructor() { }

   validate(control: AbstractControl): { [key: string]: any } | null {
     return (control.value && control.value.match('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')) ? null : { checkemail: true };
   }
}
