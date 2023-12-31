import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent {
  get firstValue() {
    return this.equathionForm.value.firstValue;
  }

  get secondValue() {
    return this.equathionForm.value.secondValue;
  }

  get answer() {
    return this.equathionForm.value.answer;
  }

  equathionForm = new FormGroup(
    {
      firstValue: new FormControl(this.generateRandomNumber()),
      secondValue: new FormControl(this.generateRandomNumber()),
      answer: new FormControl(''),
    },
    [
      (form: AbstractControl) => {
        
        const {  firstValue, secondValue, answer } = form.value;
        if (form.pristine) return null;
        if (firstValue + secondValue === Number.parseInt(answer)) {
          return null;
        }
        return { addition: true };
      },
    ]
  );

  private generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

 
}
