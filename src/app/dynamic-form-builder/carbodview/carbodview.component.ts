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
  persons: Person[] = [];
  collection:{data:[]};
  //persons: { count: 60, data: [] }
  //collection = { count: 60, data: [] };
  list_type: any;
  namesearch: any;
  searchText;
  length:number;
  config: any;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  alldata:{ count: 60, data: [] }
  delete_id:any;
  page_number:any;
  modeldisplay2:any=false;
  applyback:any=false;
  constructor( private http: Http,private _router: Router, private _activatedroute: ActivatedRoute,
    private _ProjectService: ProjectService) { }

    ngOnInit(): void {
      this._activatedroute.queryParams.subscribe(params => {
      
        this.page_number=params['page'];
        
      });
      this.list_type = 'ascending';
      console.log(this.dtOptions);
      this.dtOptions = {
       // pagingType: 'full_numbers',
        //pageLength: 5,
        "paging": false,
        "ordering": false,
        "searching": false,
        "stateSave": true
      };
      const data = {
        order_by: this.list_type,
      }
      console.log(data);
      this._ProjectService.get_all_data(data)
      .subscribe(
        res => {
          console.log(res);
          this.persons = res.data;
          this.length=res.data.length;
       console.log( this.length);
          this.dtTrigger.next();
          console.log(this.persons);
         
        },
  
      );

      for (var i = 0; i < this.length; i++) {
        console.log(this.length);
        this.persons.push(
          {
            id: i + 1,
            value: "items number " + (i + 1)
          }
        );
      }
      this.config = {
        itemsPerPage: 4,
        currentPage: this.page_number,
        totalItems: this.collection
      };
      
    }
      private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  sorting_in_list(listtype) {
    this.list_type = listtype;
    console.log(this.list_type);
    const data = {
      order_by: this.list_type,
    }
    console.log(data);
    this._ProjectService.get_all_data(data)
    .subscribe(
      res => {
        console.log(res);
        this.persons = res.data;
        // this.length=res.data.length;
        // console.log( this.length);
        console.log(this.persons);
       
      },

    );
    // for (var i = 0; i < this.length; i++) {
    //   console.log(this.length);
    //   this.persons.push(
    //     {
    //       id: i + 1,
    //       value: "items number " + (i + 1)
    //     }
    //   );
    // }
    
    
    //   this.config = {
    //     itemsPerPage: 4,
    //     currentPage: 1,
    //     totalItems: this.length
    //   };
    
   
   

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
          "item": JSON.stringify(data),
          "page":this.config.currentPage
      }
  };
    this._router.navigate(['/edit-carbod-view'],navigationExtras)
  }

  pageChanged(event){
    console.log(event);
    this.config.currentPage = event;
    console.log(this.config.currentPage);
  }

}
