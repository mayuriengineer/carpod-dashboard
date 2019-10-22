import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from './project.service';
 import { ActivatedRoute } from '@angular/router';
 import { AppComponent } from '../app.component';
 import { environment } from '../../environments/environment.prod';
 import { Subscription } from 'rxjs';
 import { Router, NavigationExtras } from '@angular/router';
import { HttpModule } from "@angular/http";
@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form (ngSubmit)="onSubmit(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Save</button>
          <strong >Saved all values</strong>
        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  current_page:string;
  vehicle_id:any;
  page_number:any;
  all_data:any;
  id:any;
  constructor(private _router: Router, private _activatedroute: ActivatedRoute,
    private _app: AppComponent,private _ProjectService: ProjectService) { }
    
    @Input() fields: any[] = [];
    form: FormGroup;

    ngOnInit() {
      var temp = this._router.url;
      var array = temp.split("/");
      this.current_page = array[1];
      this._activatedroute.queryParams.subscribe(params => {
        this.vehicle_id =params['item'];
        this.page_number=params['page'];
        console.log(this.vehicle_id);
        console.log(this.page_number);
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
 
  // get_all_data_byid(){

  //   const data = {
  //     id :this.vehicle_id
  //   }
  //   this._ProjectService.get_all_data_byid(data)
  //   .subscribe(
  //     res => {
     
  //       this.form.value.lastName=res.data[0].lname;
     
  //       console.log(this.form.value.lastName);
     
  //     },

  //   );
  
  // }

  onSubmit(){
    
if(!this.vehicle_id){
  
    this._ProjectService.add_insertdata(this.form.value)
    .subscribe(
      res => {
       
    console.log(res);
  	alert("record save sucessfully");
    this._router.navigate(["/dashboard"]);
      },

    );
}
else
{

  let navigationExtras: NavigationExtras = {
    queryParams: {
        
        "page":this.page_number
    }
};
  
  this.all_data=JSON.parse(this.vehicle_id);
  console.log(this.all_data);
  const data = {
    id :this.all_data.id,
    firstName :this.form.value.firstName,
    lastName:this.form.value.lastName,
    email:this.form.value.email

  }
  console.log(data);
  console.log(this.form.value);
  this._ProjectService.uppdate_insertdata(data)
  .subscribe(
    res => {
     
  console.log(res);
  alert("record update sucessfully");
  this._router.navigate(['/dashboard'],navigationExtras);

    },

  );

}

  } 
}
