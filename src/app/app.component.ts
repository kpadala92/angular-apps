import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator,MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'brt-app';
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(){
   // this.dataSource.sort = this.sort;
   // this.dataSource.paginator = this.paginator;
  }
  rowClicked(row: any): void {
    console.log(row);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
}
export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
  {position: 6, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 7, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 8, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 9, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 10, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
  {position: 11, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 12, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 13, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 14, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 15, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];
