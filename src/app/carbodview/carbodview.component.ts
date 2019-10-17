import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carbodview',
  templateUrl: './carbodview.component.html',
  styleUrls: ['./carbodview.component.css']
})
export class CarbodviewComponent implements OnInit {

  alldata:any;
  delete_id:any;
  modeldisplay2:any=false;
  applyback:any=false;
  constructor( private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }

  ngOnInit() {
    this.get_all_data();
  }
  get_all_data(){
    
console.log("mayu");
    this._ProjectService.get_all_data()
    .subscribe(
      res => {
        console.log(res);
        this.alldata = res.data;
        console.log( this.alldata);
       
      },

    );
  
  }
  delete_record(id){
    this.delete_id = id;
    this.modeldisplay2=true;
            this.applyback=true;

  }
  delete_data_byid(id){
    
    const data={
      id:id
    }
    this._ProjectService.delete_data_byid(data)
      .subscribe(
        res => {
          this.get_all_data();
          
         
          this.modeldisplay2=false;
          this.applyback=false;
          
        },
        err =>{
          
          console.log(err);
          
          }
      );
    
  }
  hidemodel(){
    this.modeldisplay2=false;
    this.applyback=false;
  }

}
