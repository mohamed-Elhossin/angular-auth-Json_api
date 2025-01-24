import { Routes } from '@angular/router';

import { Error404Component } from './features/compoents/error404/error404.component';

export const routes: Routes = [

  {
    path: "user",
    loadChildren: () => import("./features/compoents/Users-routing.module").then((m) => m.UserModule)
  },

  {
    path: "admin",
    loadChildren: () => import("./features/admin/Admin-routing.module").then((m) => m.AdminModule)
  },

  { path: "", pathMatch: "full", redirectTo: "user" },

  // Load Last Route
  { path: "**", component: Error404Component }
];
