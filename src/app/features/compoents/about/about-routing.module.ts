
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'
import { AboutTabOneComponent } from './about-tab-one/about-tab-one.component';
import { AboutTabTwoComponent } from './about-tab-two/about-tab-two.component';
import { AboutTabThreeComponent } from './about-tab-three/about-tab-three.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: "", component: AboutComponent, children: [
      { path: "tab1", component: AboutTabOneComponent },
      { path: "tab2", component: AboutTabTwoComponent },
      { path: "tab3", component: AboutTabThreeComponent },
      { path: "", pathMatch: 'full', redirectTo: "/about/tab1" },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
