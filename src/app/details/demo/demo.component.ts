import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public form: FormGroup;
  unsubcribe: any
  public fields: any;
  state_name: any;
  current_page: string;
  tabs:any;
  param1: any;
  edit_view:any;
  tabs_view:any;
  active:any;
  showinternal: any = true;
 sections:any;
  constructor(private http: Http, private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) {
    this.fields = [];
    var temp = this._router.url;
    var array = temp.split("/");
    this.current_page = array[1];
    this._activatedroute.params.subscribe(params => {
      this.param1 = params['param1'];
      this.state_name = params['state_name'];
    });
    
    this._ProjectService.get_vo_edit_view(this.state_name)
      .subscribe(
        res => {
         console.log(res);
          if(res.view=='EDIT'){
            this.edit_view=res.view;
            console.log(res);
            this.fields = res.edit_config.fields;
            this.sections=res.edit_config.sections;
            // console.log(this.sections);
          }
          else if(res.view=='TABS')
          {
            this.tabs_view=res.view;
            this.tabs = res.tabs_config.tabs;
           
            console.log(res);
           
            
          }
          
         
        });

    this.form = new FormGroup({
    
      fields: new FormControl(this.fields)
    
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      this.fields = JSON.parse(update.fields);
    
    });
  }
  ngOnInit() {
  }

  onUpload(e) {
  }

  getFields() {

    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }



}
