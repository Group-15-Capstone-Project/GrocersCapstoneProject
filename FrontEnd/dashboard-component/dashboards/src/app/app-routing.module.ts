import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


//default for is http://localhost:4200/
const routes: Routes = [
  {path:"admindashboard",component:AdminDashboardComponent},
  {path:"userdashboard",component:UserDashboardComponent},
  {path:"employeedashboard",component:EmployeeDashboardComponent},
  {path: "adminpanel", component:AdminPanelComponent},
  {path: "employeePanel", component:EmployeePanelComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
