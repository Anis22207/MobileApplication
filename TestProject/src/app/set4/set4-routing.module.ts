import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Set4Page } from './set4.page';

const routes: Routes = [
  {
    path: '',
    component: Set4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Set4PageRoutingModule {}
