import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Set4PageRoutingModule } from './set4-routing.module';

import { Set4Page } from './set4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Set4PageRoutingModule
  ],
  declarations: [Set4Page]
})
export class Set4PageModule {}
