import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import {MatTableModule, MatIconModule, MatButtonModule,} from '@angular/material/table';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './Department/show-dep/show-dep.component';
import { AddDepComponent } from './Department/add-dep/add-dep.component';
import { EditDepComponent } from './Department/edit-dep/edit-dep.component';
import {DepartmentService} from  '/src/app/services/department.service';
import {EmployeeService} from '/src/app/services/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmpComponent,
    ShowEmpComponent,
    EditEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddDepComponent,
    EditDepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule, MatIconModule, MatButtonModule,HttpClientModule,
   ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }







