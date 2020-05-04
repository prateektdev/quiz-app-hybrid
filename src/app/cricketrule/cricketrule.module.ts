import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketrulePageRoutingModule } from './cricketrule-routing.module';

import { CricketrulePage } from './cricketrule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CricketrulePageRoutingModule
  ],
  declarations: [CricketrulePage]
})
export class CricketrulePageModule {}
