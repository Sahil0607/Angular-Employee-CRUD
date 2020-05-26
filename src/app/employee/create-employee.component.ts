import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent{
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto=false;
  employee : Employee = {
    id: null,
    name:null,
    gender:null,
    email:"",
    phoneNumber:null,
    contactPreference:null,
    dateOfBirth:null,
    department:"-1",
    isActive:null,
    photoPath:null,
   }
  departments:Department[]=[
    {id:1 ,name:"Help Desk"},
    {id:2 ,name:"HR"},
    {id:3 ,name:"IT"},
    {id:4 ,name:"Payrole"},
    {id:5 ,name:"Admin"},
  ];
  constructor(private _employeeService:EmployeeService,
              private _router:Router){}
  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
  saveEmployee(): void {
  const newEmployee : Employee  = Object.assign({},this.employee)
  this._employeeService.save(newEmployee);
  this.createEmployeeForm.reset();
  this._router.navigate(['list']);
}


}
