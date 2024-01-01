import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EquationValidators } from '../equation-validators';
import { Subscription, delay } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();

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
      EquationValidators.addition('answer', 'firstValue', 'secondValue'),
    ]
  );

  ngOnInit(): void {
    this.subscriptions.add(
      this.equathionForm.statusChanges.pipe(delay(500)).subscribe((value) => {
        if (value.toLocaleLowerCase() === 'valid') {
          this.equathionForm.patchValue({
            firstValue:  this.generateRandomNumber(),
            secondValue:  this.generateRandomNumber(),
            answer:''
          })
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
