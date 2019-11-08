import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { environment } from '../../environments/environment.prod';
import { Subscription } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { HttpModule } from "@angular/http";
@Component({
  selector: 'dynamic-form-builder',
  template: `
    <form (ngSubmit)="onSubmit(this.form.value)" novalidate [formGroup]="form" class="form-horizontal">
      <div class="form-group" *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button type="submit" class="btn btn-primary">Save</button>
          <strong >Saved all values</strong>
        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  current_page: string;
  vehicle_id: any;
  page_number: any;
  all_data: any;
  id: any;
  constructor(private _router: Router, private _activatedroute: ActivatedRoute,
    private _app: AppComponent, private _ProjectService: ProjectService) { }

  @Input() fields: any[] = [];
  form: FormGroup = new FormGroup({});

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
      } else {
        let opts = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }


  onSubmit() {



  }
}
