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
    <div  *ngFor="let section of sections; let i=index">
    <h4>{{section}}</h4>
      <div class="form-group" *ngFor="let field of fields">
    
          <field-builder *ngIf="i==field.section_index"  [field]="field" [form]="form" ></field-builder>
         
      </div>
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
  isDisabled = true;
  current_page: string;
  vehicle_id: any;
  page_number: any;
  all_data: any;
  id: any;
  param1: any;
  state_name: any;
  sections: any;
  controller:any;
  method:any;
  identifier:any;
  constructor(private _router: Router, private _activatedroute: ActivatedRoute,
    private _app: AppComponent, private _ProjectService: ProjectService) { }

  @Input() fields: any[] = [];
  form: FormGroup = new FormGroup({});

  ngOnInit() {
    var temp = this._router.url;
    var array = temp.split("/");
    this.current_page = array[1];
    this._activatedroute.params.subscribe(params => {
      this.param1 = params['param1'];


      this.state_name = params['state_name'];

      this.get_vo_edit_view();
    });
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
  get_vo_edit_view() {
    this._ProjectService.get_vo_edit_view(this.state_name)
      .subscribe(
        res => {
          console.log(res);
          this.fields = res.edit_config.fields;
          this.sections = res.edit_config.sections;
          this.controller=res.api_controller;
          this.method=res.api_method;
          this.identifier=res.identifier.id;

        });
  }
  onSubmit(value) {

   this._ProjectService.onSubmit(this.controller,this.method,this.identifier,value)
      .subscribe(
        res => {
          console.log(res);
         alert("record submit sucessfully"); 
        //  this._router.navigate(['/details/vo_masterlist']);

        });
     }
}
