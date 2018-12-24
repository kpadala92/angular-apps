import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSort,MatTableDataSource, MatPaginator } from '@angular/material';
import { WorklogdataService } from '../worklogdata.service';
import {MatSortModule} from '@angular/material';
import { WorkLogData } from '../models/worklogdata.model';

@Component({
  selector: 'app-worklogdatatable',
  templateUrl: './worklogdatatable.component.html',
  styleUrls: ['./worklogdatatable.component.css']
})
export class WorklogdatatableComponent implements OnInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //displayedColumns =['Key','Summary','Account Name','Type','Status','Reporter','Parent','LOE','Client','Billable','Deliverable Type','Platform'];
   listData:MatTableDataSource<WorkLogData>;
  displayedColumns =['issueKey','issueSummary','accountName','issueType','issueStatus','parentKey','reporter','timeEstimate','accountClient','billable','deliverableType','platform' ];
  searchKey:string;
  constructor(private worklogdataService:WorklogdataService) { }
 
  ngOnInit() {
    this.worklogdataService.getWorkLogData().subscribe(results =>{
      if(!results){
        return;
      }
      console.log("results : "+results);
      console.log("json : "+JSON.stringify(results));
      
      //let arr :any[];
      //let JsonString=JSON.stringify(results);
      
      this.listData=new MatTableDataSource<WorkLogData>(results);
      console.log("listData : "+this.listData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }
  
  /* ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  } */
 /*  rowClicked(row: any): void {
    console.log(row);
  } */

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
  }
  applyFilter(filterValue: string) {
    /* filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.listData.filter = filterValue; */
    this.listData.filter=this.searchKey.trim().toLowerCase();
  }

}
