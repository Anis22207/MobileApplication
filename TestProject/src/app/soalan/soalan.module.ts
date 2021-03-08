import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoalanPageRoutingModule } from './soalan-routing.module';

import { SoalanPage } from './soalan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoalanPageRoutingModule
  ],
  declarations: [SoalanPage]
})
export class SoalanPageModule {}
