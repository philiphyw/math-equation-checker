import { AbstractControl } from '@angular/forms';

export class EquationValidators {
  // make methos to static so it can be used without creating a new instance
  static addition(target: string,sourceOne: string,sourceTwo: string) {
    return (form: AbstractControl) => {
      const firstValue = form.value[sourceOne];
      const secondValue = form.value[sourceTwo];
      const answer = form.value[target];

      if (form.pristine) return null;
      if (firstValue + secondValue === Number.parseInt(answer)) {
        return null;
      }
      return { addition: true };
    };
  }

  static subtraction() {}
}
