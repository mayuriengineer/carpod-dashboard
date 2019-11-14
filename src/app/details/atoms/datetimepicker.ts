
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'datetimepicker',
    template: `
    <div [formGroup]="form">
    <date-picker formControlName="date"></date-picker>
  </div> 
    `
})

export class DatetimepickerComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }

}
