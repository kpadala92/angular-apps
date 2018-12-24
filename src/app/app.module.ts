import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule, AfterViewInit, ViewChild } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { WorklogdatatableComponent } from './worklogdatatable/worklogdatatable.component';
import { WorklogdataService } from './worklogdata.service';

@NgModule({
  declarations: [
    AppComponent,
    WorklogdatatableComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatProgressSpinnerModule,

    

    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [WorklogdataService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule  { 


  }
