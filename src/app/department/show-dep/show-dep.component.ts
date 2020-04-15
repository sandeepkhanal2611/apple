import { Component, OnInit } from '@angular/core';
import {MatTableDatSource} from '@angular/material';
import { Department } from 'src/app/models/department-model';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: DepartmentService) { }
listData : MatTableDataSource<any>;
DisplayColumns: string[]=['options', 'DepartmentID', 'DepartmentName']

  ngOnInit():  {
    this.refreshDeplist();
  }
refreshDepList(){
  //var dummyData=[{DepartmentID:1, DepartmentName:"IT"},
//{DepartmentID:2, DepartmentName:"Finance"}]
//this.listData = new MatTableDatSource(dummyData);
this.listData.getDepList().subscribe(data=>{
  this.listData = new MatTableDatSource(Data);
});
}




onedit(dep:Department){
  console.log(dep)
}
ondelete(id:number){
  console.log(id);
}
}
