import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoalanPage } from './soalan.page';

const routes: Routes = [
  {
    path: '',
    component: SoalanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoalanPageRoutingModule {}
