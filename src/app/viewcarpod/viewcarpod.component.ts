import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { environment } from '../../environments/environment.prod';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewcarpod',
  templateUrl: './viewcarpod.component.html',
  styleUrls: ['./viewcarpod.component.css']
})
export class ViewcarpodComponent implements OnInit {
  vehicle_id:any;
  current_page:string;
  alldata:any;
  id:any;
  fname:any;
  lname:any;
  email:any;
  constructor( private _router: Router, private _activatedroute: ActivatedRoute,
    private _app: AppComponent,private _ProjectService: ProjectService) { }

  ngOnInit() {
    var temp = this._router.url;
    var array = temp.split("/");
    this.current_page = array[1];
	  this._activatedroute.params.subscribe(params => {
      this.vehicle_id = params['id'];
      //console.log(this.vehicle_id);
    });
    this.get_all_data_byid();
  }
  get_all_data_byid(){
    
    const data = {
      id :this.vehicle_id
    }
console.log(data);
    this._ProjectService.get_all_data_byid(data)
    .subscribe(
      res => {
        
        console.log(res);
        this.id = res.data[0].id;
        this.fname = res.data[0].firstName;
        this.lname = res.data[0].lastName;
        this.email = res.data[0].email;
        //console.log(this.alldata);
       
       
      },

    );
  
  }

}
