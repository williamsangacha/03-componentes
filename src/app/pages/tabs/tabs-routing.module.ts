import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'account',
        // loadChildren: '../avatar/avatar.module#AvatarPageModule'
        loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarPageModule)
      },
      {
        path:'contact',
        // loadChildren: '../lista/lista.module#ListaPageModule'
        loadChildren: () => import('../lista/lista.module').then(m => m.ListaPageModule)
      },
      {
        path:'settings',
        // loadChildren: '../infiniti-scroll/infiniti-scroll.module#InfinitiScrollPageModule'
        loadChildren: () => import('../infiniti-scroll/infiniti-scroll.module').then(m => m.InfinitiScrollPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
