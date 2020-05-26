import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equel-validator.directive';
import { EmployeeService } from './employee/employee.service';
import { DisplayEmployeeComponent } from './employee/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employee/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { EmployeeFilterPipe } from './employee/employee-filter.pipe';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create',
   component: CreateEmployeeComponent,
   canDeactivate: [CreateEmployeeCanDeactivateGuardService]
 },
 { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EmployeeService,CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
