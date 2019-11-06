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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu_list:any;
  menu_nodes:any;
  menu_nod:any;
  constructor( private http: Http,private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }
    
  ngOnInit() {

    this.get_menu_data();
  }
  get_menu_data()
  {
    this._ProjectService.get_menu_data()
    .subscribe(
       res => {
console.log(res.ui.nodes);
this.menu_list=res.ui;

this.menu_nodes=res.ui[1].nodes;
this.menu_nod=res.ui[2].nodes;
console.log(this.menu_list);
console.log(this.menu_nodes);
    
      },

  );
  }

}
