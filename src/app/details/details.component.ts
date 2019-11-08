import { Component, OnInit, Renderer, ElementRef, ViewChild, OnDestroy } from '@angular/core';
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
export class DetailsComponent implements OnInit, OnDestroy {
  objectKeys = Object.keys;
  state_name: any;
  list_view: any;
  header_list: any;
  namesearch: any;
  has_serial_no: any;
  actions: any;
  btn_action: any;
  add_option: boolean = true;
  has_search: any;
  mainitem: any;
  length: any;
  config: any;
  page_number: any;
  records_per_page: any;
  constructor(private http: Http, private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }


  ngOnInit() {
    this._activatedroute.params.subscribe(params => {
      this.state_name = params['name'];
      this.get_master_list_view();
    });
  }

  get_master_list_view() {
    this._ProjectService.get_master_list_view(this.state_name)
      .subscribe(
        res => {
          this.mainitem = res;
          this.list_view = this.mainitem.data.result;

          this.header_list = this.mainitem.list_config.columns;
          this.length = this.mainitem.data.result.length;
          this.actions = this.mainitem.list_config.has_actions;
          this.has_serial_no = this.mainitem.list_config.has_serial_no;
          this.btn_action = this.mainitem.list_config.actions;
          this.add_option = this.mainitem.list_config.add_option;
          this.has_search = this.mainitem.list_config.has_search;
          this.page_number = this.mainitem.list_config.default_api_params.page_number;
          this.records_per_page = this.mainitem.list_config.default_api_params.records_per_page;
        },

      );

  }
  ngOnDestroy() {
  }
  delete_record(id) {


  }

  edit_pass(data) {


  }





}
