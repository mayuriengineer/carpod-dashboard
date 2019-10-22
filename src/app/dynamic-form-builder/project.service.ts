import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http'; 
import { environment } from '../../environments/environment.prod';
import { Observable,Subject,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
  private _addinsertUrl = `${environment.api}/insert`;
  private _getalldataUrl = `${environment.api}/fatchOrderByData`;
  private _getalldatabyidUrl = `${environment.api}/fatchData`;
  private _deleterecordbyidUrl = `${environment.api}/delete`;
  private _updateinsertUrl = `${environment.api}/edit`;
  constructor(private http: HttpClient) { }
  add_insertdata(data){
    return this.http.post<any>(this._addinsertUrl,data);
  }
  get_all_data(data){
    return this.http.post<any>(this._getalldataUrl,data);
  }
  uppdate_insertdata(data){
    return this.http.post<any>(this._updateinsertUrl,data);
  }
  delete_data_byid(data){
    return this.http.post<any>(this._deleterecordbyidUrl,data);
  }
  get_all_data_byid(data){
    return this.http.post<any>(this._getalldatabyidUrl,data);
  }
}
