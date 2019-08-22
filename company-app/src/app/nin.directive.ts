import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[companyNin]',
  providers: [{ provide: NG_VALIDATORS,
                useClass: NinDirective, multi: true }]
})
export class NinDirective {
  constructor() { }

   validate(control: AbstractControl): { [key: string]: any } | null {
     return (control.value && control.value.length == 9 && control.value.match('^[A-CEGHJ-PR-TW-Z]{1}[A-CEGHJ-NPR-TW-Z]{1}[0-9]{6}[A-DFM]{0,1}$')) ? null : { checknin: true };
   }
}
