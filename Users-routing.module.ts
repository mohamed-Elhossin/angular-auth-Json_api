
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'

import { TrainersComponent } from './trainers/trainers.component';
import { CoursesComponent } from './courses/courses.component';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';



const routes: Routes = [

  {
    path: '', component: LayoutComponent, children: [
      { path: "home", loadComponent: () => import("./home/home.component").then((ts) => ts.HomeComponent) },
      {
        path: "about",
        loadChildren: () => import("./about/about-routing.module").then((tm) => tm.AboutRoutingModule)
      },
      { path: "trainers", component: TrainersComponent },
      { path: "courses", component: CoursesComponent },
      { path: "cards", component: CardsComponent },
      { path: "", pathMatch: "full", redirectTo: "home" },
    ]
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModule { }
