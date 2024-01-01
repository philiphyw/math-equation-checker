import { AbstractControl } from '@angular/forms';

export class EquationValidators {
  // make methos to static so it can be used without creating a new instance
  static addition(form: AbstractControl) {
    const { firstValue, secondValue, answer } = form.value;
    if (form.pristine) return null;
    if (firstValue + secondValue === Number.parseInt(answer)) {
      return null;
    }
    return { addition: true };
  }

  static subtraction() {}
}
