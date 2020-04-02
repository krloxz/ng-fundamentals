import { Directive } from '@angular/core';
import { Validator, FormGroup, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[validateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})
// tslint:disable-next-line: directive-class-suffix
export class LocationValidator implements Validator {

  validate(form: FormGroup): ValidationErrors {
    const address = form.controls['address'];
    const city = form.controls['city'];
    const country = form.controls['country'];
    const onlineUrl = (<FormGroup>form.root).controls['onlineUrl'];

    if ((address && address.value && city && city.value && country && country.value)
        || (onlineUrl && onlineUrl.value)) {
      return null;
    }
    return {validateLocation: false};
  }

}
