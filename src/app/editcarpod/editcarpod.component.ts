import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from '../project.service';
 import { ActivatedRoute } from '@angular/router';
 import { AppComponent } from '../app.component';
 import { environment } from '../../environments/environment.prod';
 import { Subscription } from 'rxjs';
 import { Router } from '@angular/router';
import { HttpModule } from "@angular/http";

@Component({
  selector: 'app-editcarpod',
  templateUrl: './editcarpod.component.html',
  styleUrls: ['./editcarpod.component.css']
})
export class EditcarpodComponent implements OnInit {
  
  current_page:string;
  vehicle_id:any;
  lastName:string;
  firstName:any;
  public form: FormGroup;
  unsubcribe: any;
  responce:any;
  email:any;
  dynamicFields:any;
  all_data:any;
  constructor(private _router: Router, private _activatedroute: ActivatedRoute,
    private _app: AppComponent,private _ProjectService: ProjectService) {
    
    
  }
  ngOnInit() {
    var temp = this._router.url;
    var array = temp.split("/");
    this.current_page = array[1];
	  this._activatedroute.params.subscribe(params => {
      this.vehicle_id = params['id'];
      //console.log(this.vehicle_id);
    });
    this._activatedroute.queryParams.subscribe(params => {
      this.all_data =JSON.parse(params['item']);
      console.log(this.all_data)

  });
    // this.get_all_data_byid();
   
  }

  fields: any[]= [
    
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
]


  onUpload(e) {
    //console.log(e);
  }

  // get_all_data_byid(){

  //   const data = {
  //     id :this.vehicle_id
  //   }

  //   this._ProjectService.get_all_data_byid(data)
  //   .subscribe(
  //     res => {
        
  //       console.log(res);
  //      // this.dynamicFields = res.results;
  //       console.log(JSON.stringify(res)); 
  //       this.firstName=res.data[0].firstName;
  //         this.lastName=res.data[0].lastName;
  //         this.email=res.data[0].email;
  //         this.fields[0].value = this.firstName;
  //         this.fields[1].value = this.lastName;
  //         this.fields[2].value = this.email;
          
  //      },

  //   );
  
  // }
  getFields() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    console.log(this.fields);
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
     
      this.fields = JSON.parse(update.fields);
    });
    this.fields[0].value = this.all_data.firstName;
    this.fields[1].value = this.all_data.lastName;
    this.fields[2].value = this.all_data.email;
       return this.fields;
     }
 
}
