import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EquationValidators } from '../equation-validators';

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
      // no need to invoke the function, just provide a reference
      EquationValidators.addition
    ]
  );

  private generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

 
}
