import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


//default for is http://localhost:4200/
const routes: Routes = [
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"userdashboard",component:UserDashboardComponent},
  {path:"employeedashboard",component:EmployeeDashboardComponent},
  {path: "adminpanel", component:AdminPanelComponent},
<<<<<<< HEAD
  {path: "employeepanel",component:EmployeePanelComponent},
  {path: "userpanel",component:UserPanelComponent},
  {path:"**",component:NotfoundComponent},
  {path: "user-sign-up",component:UserSignupComponent},
  {path: "user-sign-in",component:UserSigninComponent}
=======
  {path: "employeePanel", component:EmployeePanelComponent},
  {path:"**",component:NotfoundComponent}
>>>>>>> bbcbe048256243d4fcf11572413ac6788ef9b264
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
