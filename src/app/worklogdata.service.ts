import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkLogData } from './models/worklogdata.model';
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorklogdataService {
private serviceURL="http://10.219.19.138:8070/api/v1/brps/getAllWorklogsRawData";
private _serviceURL="http://localhost:8070//api/v1/brps/getAllWorkLogRawData";
  constructor(private http: HttpClient) { }
  getWorkLogData():Observable<WorkLogData[]>{
    return this.http.get<WorkLogData[]>(this._serviceURL);
  }
}
