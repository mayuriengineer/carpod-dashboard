import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password, 
@Component({
    selector: 'timepicker',
    template: `
      <div [formGroup]="form">
        <input [readOnly]="!field.editable"  [attr.type]="field.type" class="form-control"  [id]="field.name" [name]="field.name" [readOnly]="!field.editable"  [formControlName]="field.name">
      
      </div> 
    `
})

export class TimepickerComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
  
    constructor() {

    }
}
