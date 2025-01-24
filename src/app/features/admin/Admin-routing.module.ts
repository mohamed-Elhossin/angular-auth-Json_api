
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HomeComponent } from './home/home.component';
import { ListCourseComponent } from './pages/coureses/list-course/list-course.component';
import { CreateCourseComponent } from './pages/coureses/create-course/create-course.component';
import { UpdateCourseComponent } from './pages/coureses/update-course/update-course.component';
import { ListTainersComponent } from './pages/trainers/list-tainers/list-tainers.component';
import { CreateTainerComponent } from './pages/trainers/create-tainer/create-tainer.component';
import { UpdateTainerComponent } from './pages/trainers/update-tainer/update-tainer.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';




const routes: Routes = [

  {
    path: "", component: MainAdminComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'lc', component: ListCourseComponent },
      { path: 'cc', component: CreateCourseComponent },
      { path: 'uc/:id', component: UpdateCourseComponent },

      { path: 'lt', component: ListTainersComponent },
      { path: 'ct', component: CreateTainerComponent },
      { path: 'ut', component: UpdateTainerComponent },
      { path: 'home', component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },

      { path: "", component: LoginComponent },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModule { }
