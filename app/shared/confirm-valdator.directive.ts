import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
    selector: '[appConfValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: confirmValidatorDirective,
        multi: true
    }]
})

export class confirmValidatorDirective implements Validator{
        @Input() appConfValidator: string;
        validate(control: AbstractControl): {[key:string]:any} | null {
                const controltoCompare = control.parent.get(this.appConfValidator);
                if (controltoCompare && controltoCompare.value !== control.value){
                    return { 'notEqual': true };
                }

                    return null;
        }
}