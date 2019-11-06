import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { count } from 'rxjs/operator/count';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  state_name:any;
  list_view:any;
  header_list:any;
  namesearch:any;
  has_serial_no:any;
  actions:any;
  btn_action:any;
  add_option:boolean=true;
  has_search:any;
  length:any;
  config: any;
  page_number:any;
  records_per_page:any;
  constructor( private http: Http,private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }

  ngOnInit() {
    this._activatedroute.params.subscribe(params => {
      this.state_name = params['state_name'];
      console.log(this.state_name);
      //console.log(this.vehicle_id);
    });
    this.get_master_list_view();
  
  }
  get_master_list_view(){
    // const data = {
    //       state_name :this.state_name
    //     }
    //     console.log(data);
    console.log(this.state_name);
    this._ProjectService.get_master_list_view(this.state_name)
    .subscribe(
       res => {
console.log(res);

    this.list_view=res.data.result;
    this.header_list=res.list_config.columns;
this.length=res.data.result.length;
    this.actions=res.list_config.has_actions;
    this.has_serial_no=res.list_config.has_serial_no;
    this.btn_action=res.list_config.actions;
    this.add_option=res.list_config.add_option;
    this.has_search=res.list_config.has_search;
    this.page_number=res.list_config.default_api_params.page_number;
    this.records_per_page=res.list_config.default_api_params.records_per_page;
    
    console.log(this.actions);
    console.log(this.btn_action);
    console.log(this.add_option);
console.log(this.length);
    for (var i = 0; i < this.length; i++) {
   
      // this.persons.push(
      //   {
      //     id: i + 1,
      //     value: "items number " + (i + 1)
      //   }
      // );
    }
    
      // this.config = {
      //   itemsPerPage: this.records_per_page,
      //   currentPage: this.page_number,
      //   totalItems: this.length
      // };
      },

  );
  }
  delete_record(id){
   console.log(id);

  }

  edit_pass(data){
    console.log(data);
  
  }

  // pageChanged(event){
   
  //   console.log(event);
  //   this.config.currentPage = event;
 
    

  // }

 

}
