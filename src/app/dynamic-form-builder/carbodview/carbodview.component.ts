import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Person } from 'person';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-carbodview',
  templateUrl: './carbodview.component.html',
  styleUrls: ['./carbodview.component.css']
})
export class CarbodviewComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  //persons: Person[] = [];
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  alldata:any;
  delete_id:any;
  modeldisplay2:any=false;
  applyback:any=false;
  constructor( private http: Http,private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        "stateSave": true
      };
      this._ProjectService.get_all_data()
      .subscribe(
        res => {
          console.log(res);
          this.persons = res.data;
          this.dtTrigger.next();
          console.log(this.persons);
         
        },
  
      );
      //this.get_all_data_record();
    }
      private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
//   get_all_data_record(){
    
// console.log("mayu");
//     this._ProjectService.get_all_data()
//     .subscribe(
//       res => {
//         console.log(res);
//         this.alldata = res.data;
//         this.dtTrigger.next();
//         console.log( this.alldata);
       
//       },

//     );
  
//   }
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
          console.log(res);
          alert("record delete sucessfully");
          
          this.modeldisplay2=false;
          this.applyback=false;
          this._router.navigate(['/add-carbod-view/']).then(() => {
             this._router.navigate(['/dashboard/']);
             });
          
         
          
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
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  edit_pass(data){
    console.log(data);
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "item": JSON.stringify(data)
      }
  };
    this._router.navigate(['/edit-carbod-view'],navigationExtras)
  }

}
