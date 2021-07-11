import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'',pathMatch:'full',redirectTo:'Register'
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Student',component:StudentComponent,canActivate:[AuthGuard],data:{
      role:['Student','Administrator']
    }
  },
  {
    path:'Teacher',component:TeacherComponent,canActivate:[AuthGuard],data:{
      role:["Teacher",'Administrator']
    }
  },
  {
    path:'Administrator',component:AdminComponent,canActivate:[AuthGuard],data:{
      role:['Administrator']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
