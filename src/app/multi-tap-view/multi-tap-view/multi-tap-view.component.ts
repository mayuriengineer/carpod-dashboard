import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../carbodview/project.service';
@Component({
  selector: 'app-multi-tap-view',
  templateUrl: './multi-tap-view.component.html',
  styleUrls: ['./multi-tap-view.component.css']
})
export class MultiTapViewComponent implements OnInit {
  showinternal: any = true;
  person:any;
  firstName:any;
  email:any;
  lastName:any;
  showexternal: any = false;
  showother: any = false;
  constructor(private _ProjectService: ProjectService) { }

  ngOnInit() {
    this.get_all_professional_data();
  }

  openDialog() {
    this.showinternal = true;
    this.showexternal = false;
    this.showother=false;
    this.get_all_professional_data();
  }
  openDialog1() {

    this.showinternal = false;
    this.showexternal = true;
    this.showother=false;
    console.log("567");
  }
  open() {
    this.showother=true;
    this.showinternal = false;
    this.showexternal = false;
    
    console.log("5671234");
  }

  get_all_professional_data()
  {

  this._ProjectService.get_all_professional_data()
  .subscribe(
    res => {
      console.log(res);
      this.firstName=res.data[0].firstName;
      this.email=res.data[0].email;
      this.lastName=res.data[0].lastName;
      //console.log(this.alldata);
      
    },  

  );
 
    

}

}
