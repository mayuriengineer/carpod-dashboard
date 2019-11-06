import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http'; 
import { environment } from '../environments/environment.prod';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _getmenubyurl = `${environment.api}/getMenu`;
 
  constructor(private http: HttpClient) { }

  get_menu_data(){
    return this.http.get<any>(this._getmenubyurl);
  }

  get_master_list_view(data){
    console.log(data);
    
    return this.http.get<any>(`${environment.api}`+'/openState?state_name='+data);
    
  }
}
